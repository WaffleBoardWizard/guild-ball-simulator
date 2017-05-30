import State from './State';
import * as States from './'
import * as Actions from "@/actions";
import DiceHelper from "@/Helpers/DiceHelper";

export default class RollForInitiative extends State {
  constructor(params, activeTeamId, game) {
    super("RollForInitiative", params, activeTeamId, game);
  }

  onStart() {
    this.game.UI.showMessage("Rollin For Initiative");
  }

  onActiveTeamStart() {
    let team1 = this.game.teams[0];
    let team2 = this.game.teams[1];
    let team1Result = DiceHelper.rollDice(1);
    let team2Result = DiceHelper.rollDice(1);
    let team1Momentum = team1.Momentum;
    let team2Momentum = team2.Momentum;
    let team1Total = team1Result + team1Momentum;
    let team2Total = team2Result = team2Momentum;
    let winningTeam = null;
    let losingTeam = null;

    this.game.addLog({
      firstPlayer: {
        Name: team1.PlayerName,
        Modifer: team1Momentum,
        Roll: team1Result
      },
      secondPlayer: {
        Name: team2.PlayerName,
        Modifer: team2Momentum,
        Roll: team2Result
      }
    }, 'DiceRollVsLog');

    let team = null

    if (team1Total == team2Total) {
      this.game.addInfoLog("Tie roll. Rolling again.");
      this.game.switchState(new States.RollForInitiave({}, me.activeTeamId, this.game));
    } else {
      if (team1Total > team2Total) {
        winningTeam = team1;
        losingTeam = team2;
      } else if (team1Result < team2Result) {
        winningTeam = team2;
        losingTeam = team1;
      }

      this.game.clearTeamsTurnData();

      this.game.addInfoLog(winningTeam.PlayerName + ' has won initiative');
      this.game.switchState(new States.InitiativeChoice({}, winningTeam.PlayerName, this.game));
    }

  }

  onExit() {
    this.game.UI.clearMessage();
  }

  handleInput(input, pieceId) {}
}
