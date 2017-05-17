const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./build/webpack.dev.conf.js');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const GameData = require("./mockdata/game");
const CharacterData = require("./mockdata/characters");
const _ = require('lodash');
const server = require('http').Server(app);

server.listen(8090);
const io = require('socket.io')(server);

let gameData = null;

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('/app', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

var i = 1;

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

app.get('/game', function(req, res) {
  if (gameData == null) {
    gameData = GameData;
    gameData.Teams.forEach(team => {
      team.Characters = [];
      team.CharacterNames.forEach(characterName => {
        let character = _.find(CharacterData, {
          Name: characterName
        });
        character.Turn = {
          Activated: false,
          Advanced: false,
        };

        character.x = 0;
        character.y = 0;
        character.HasBall = false;

        team.Characters.push(character);
      });
    });
  }

  res.send(gameData);
});

let players = [];

io.on('connection', function(socket) {
  console.log("connected");

  socket.on('switchState', state => {
    gameData.CurrentState = state;
    io.emit("switchState", state);
  });

  socket.on('addAction', action => {
    gameData.Actions.push(action);
    console.log('adding action' + (gameData.Actions.length - 1));

    io.emit("actionAdded", { id : gameData.Actions.length - 1, action : action});
  });

  socket.on('updateCurrentAction', request =>{
    var player = _.find(gameData.Teams, {PlayerName : request.player });
    player.CurrentAction = request.currentAction;
  });

  socket.on('joingame', player => {
    var validPlayer = _.find(gameData.Teams, {PlayerName : player });

    if(validPlayer){
      console.log("Valid Player Joined");
      players.push(player);
      console.log(gameData.State);
      console.log(players);
      if(players.length >= 2 && gameData.CurrentState.Name == "StartingGame"){
        io.emit("switchState", { Name : "StartGameCoinFlip", Params : null, activeTeamId: "Andrew" });
      }
    }
  })
});
