const TeamData = require('./teams')

const WaitingToStart = "WaitingToStart";
const InProgress = "InProgress";
const PreGame = "pregame";


module.exports = {
    Id: 1,
    Teams : TeamData,
    CurrentState : {
      Name : "StartingGame",
      Params : null,
      id : Math.floor(Math.random() * 10000000000)
    },
    Ball : {
      free : true,
      x : 0,
      y : 0
    },
    Actions : [],
    Logs : [{
    CreatedOn : new Date(),
    Params: {
      Message: "Game Has Started"
    },
    Type: 'info'
    }]
};
