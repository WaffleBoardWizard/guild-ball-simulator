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
    },
    Actions : [],
    Logs : [{
    CreatedOn : new Date(),  
    Message: "Game Has Started"
    }]
};
