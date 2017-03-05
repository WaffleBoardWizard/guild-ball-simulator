import proton from './lib/proton.min.js';
import CharacterControl from './controls/CharacterControl';
import FieldControl from './controls/FieldControl';
import TerrianControl from './controls/TerrianControl';
import BallControl from './controls/BallControl';
import Measurements from './common/Measurements';
import AssetsLoader from './helpers/AssetsLoader';
import FontAwesomeIcons from './common/FontAwesomeIcons';
import MenuControl from './controls/MenuControl';
import DieControl from './controls/DieControl';
import GameState from './helpers/GameState';
import GAME_STATES from './helpers/GameStates';
import Q from 'q';

var stage, field, ball, assets;

let characters = [];
var characterImages = [
  "ballista",
  "colossus",
  "hoist",
  "mainspring",
  "ratchet",
  "salvo"
];

var assets = {};

var onClickHandler = null;

function init() {
  AssetsLoader.LoadAssets()
    .then(function(q) {
      assets = q;
      stage = new createjs.Stage("demoCanvas");
      stage.preventSelection = false;
      createjs.Touch.enable(stage, false, true);
      field = new FieldControl(assets.getResult("field"));
      stage.addChild(field);
      addBall(field, assets.getResult("ball"), assets.getResult("kickscatter30"));
      addCharacters(field);
      addTerrian(field);
      stage.update();

      addPermStateHandlers();
      GameState.toState(GAME_STATES.SELECT_CHARACTER);

      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener("tick", tick);
      //createProton();
      //loadGame();
      field.on("click",
        function(evt) {
          console.log("click");
        });

    })
    .catch(function(ex) {
      console.log(ex);
    });
}

function addPermStateHandlers() {
  GameState.addPermStateHandler(GAME_STATES.SELECT_CHARACTER, illuminateAllCharacters, stopIllumatingAllCharacters);
}

function illuminateAllCharacters() {
  illuminateCharacters(characters);
}

function stopIllumatingAllCharacters() {
  stopIlluminatingCharacters(characters);
}

function illuminateCharacters(characters) {
  characters.forEach(function(character) {
    character.illuminate();
  });
};

function stopIlluminatingCharacters(characters) {
  characters.forEach(function(character) {
    character.stopIlluminate();
  });
};

function addCharacters(field) {
  var ballista = {
    image: assets.getResult("ballista"),
    baseSize: 30 * Measurements.MM
  }
  var colossus = {
    image: assets.getResult("colossus"),
    baseSize: 40 * Measurements.MM
  }

  addCharacter(ballista, Measurements.Inch * 8, Measurements.Inch * 16, field);
  addCharacter(colossus, Measurements.Foot, Measurements.Foot / 2, field);
}

function addCharacter(characterProps, x, y, field) {
  let characterControl = new CharacterControl(characterProps, field);
  characterControl.x = x;
  characterControl.y = y;

  characterControl.on("click",
    function(evt) {
      selectCharacter(characterControl);
    });

  field.addChild(characterControl);

  characters.push(characterControl);
};

function selectCharacter(character) {
  switch (GameState.CURRENT_STATE) {
    case GAME_STATES.SELECT_CHARACTER:
      characterSelected(character);
      break;
    case GAME_STATES.SELECT_OTHER_CHARACTER:
      otherCharacterSelected(character);
      break;
  }
};

function otherCharacterSelected(character) {
  GameState.toState(GAME_STATES.OTHER_CHARACTER_SELECTED, character);
};

function selectOtherCharacter(characters) {
  GameState.addTempStateHandler(GAME_STATES.SELECT_OTHER_CHARACTER,
    () => illuminateCharacters(characters),
    () => stopIlluminatingCharacters(characters));

  return Q.Promise(function(resolve, reject, notify) {
    GameState.toStateExpect(GAME_STATES.SELECT_OTHER_CHARACTER,
        GAME_STATES.OTHER_CHARACTER_SELECTED)
      .then(function(otherCharacter) {
        resolve(otherCharacter);
      });
  });
}

function characterSelected(character) {
  var menu = menuFactory(character);
  new MenuControl(character, "circle", menu, character.properties.baseSize, field).show();

  GameState.toState(GAME_STATES.CHARACTER_SELECTED);
}

function snapBallToCharacter(c) {
  let character = c;
  createjs.Tween.get(ball, {
    loop: false
  }).to({
    x: character.x,
    y: character.y
  }, 1000, createjs.Ease.getPowInOut(4));
}

function addTerrian(field) {
  var house = {
    image: assets.getResult("house"),
    height: Measurements.Inch * 4,
    width: Measurements.Inch * 4
  }
  var terrianControl = new TerrianControl(house);
  terrianControl.x = Measurements.Foot;
  terrianControl.y = Measurements.Foot;

  terrianControl.on("click",
    function(evt) {
      terrianControl.illuminate();
    });
  field.addChild(terrianControl);
}

function addBall(field, ballImage, kickScatterImage) {
  ball = new BallControl(ballImage, kickScatterImage);
  ball.x = Measurements.Foot / 2;
  ball.y = Measurements.Foot / 2;

  field.addChild(ball);
}

function tick() {
  stage.update();
}

function rollDice(numberOfDice) {
  return Q.Promise(function(resolve, reject, notify) {
    let dice = [];
    let results = [];
    for (var i = 0; i < numberOfDice; i++) {
      var die = new DieControl(assets.getResult("die"));
      die.x = i * 125;
      die.y = 0;
      field.addChild(die);
      dice.push(die);
      var result = die.roll(1000);
      results.push(result);
    }

    setTimeout(function() {
      resolve(results);
    }, 1000);

    setTimeout(function() {
      dice.forEach(function(die) {
        field.removeChild(die);
      });
    }, 4000)
  });
}

function checkDiceResult(diceResults, goal) {
  let result = false;
  diceResults.forEach(function(d) {
    if (d >= goal)
      result = true;
  });
  return result;
}

function menuFactory(character) {
  return [{
    Name: "Confirm",
    Icon: FontAwesomeIcons.check,
    click: function(btn, displayObject) {
      // finishNodeMovement(displayObject);
      console.log("confirm");
      return true;
    }
  }, {
    Name: "Kick",
    Icon: FontAwesomeIcons.undo,
    click: function(btn, displayObject) {
      let otherCharacters = characters.filter(x => x != character);

      selectOtherCharacter(otherCharacters)
        .then(function(otherCharacter) {
          rollDice(1).then(function(results) {
              GameState.toState(GAME_STATES.BALL_KICKED);
              if (checkDiceResult(results, 6)) {
                snapBallToCharacter(otherCharacter);
              } else {
                snapBallToCharacter(otherCharacter);
                kickScatter(character.x, character.y, otherCharacter.x, otherCharacter.y);
              }
              GameState.toState(GAME_STATES.SELECT_CHARACTER);
            })
            .catch(function(ex) {
              console.log(ex);
            });
        })
        .catch(function(ex) {
          console.log(ex);
        });

      return true;
    }
  }];
};

function kickScatter(fromX, fromY, toX, toY) {
  rollDice(2)
    .then(function(r) {
      var angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
      var distance = r[1];
      var direction = r[0];
      ball.rotateScatter(angle + 90);

      if (direction > 3)
        direction++;

      var coord = calculateXY(distance * Measurements.Inch, (22.5 * direction) + angle - 90);
      setTimeout(function() {
        createjs.Tween.get(ball, {
          loop: false
        }).to({
          x: ball.x + coord.x,
          y: ball.y + coord.y
        }, 1000, createjs.Ease.getPowInOut(4));
      }, 2000);

    })
    .catch(function(ex) {
      console.log(ex);
    });
}

function calculateXY(distance, angle) {
  var x = distance * (Math.cos((angle * Math.PI) / 180));
  var y = distance * (Math.sin((angle * Math.PI) / 180));

  return {
    x: x,
    y: y,
  }
}

$(document).ready(init);
