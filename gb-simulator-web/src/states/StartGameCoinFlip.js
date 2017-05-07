import State from './State';
import * as States from './'
import * as Actions from "@/actions";

export default class StartGameCoinFlip extends State {
  constructor(params, activeTeamId, game) {
    super("StartGameCoinFlip", params, activeTeamId, game);
  }

  onStart() {
    this.game.UI.showMessage("Coin Flip");
  }

  onActiveTeamStart() {
    let me = this;

    let team1Result = this.game.rollDice(1);
    let team2Result = this.game.rollDice(1);

    me.game.addInfoLog("Rolling For Initiative");

    this.game.addLog({
      firstPlayer: {
        Name: this.game.teams[0].PlayerName,
        Modifer: this.game.teams[0].Momentum,
        Roll: team1Result
      },
      secondPlayer: {
        Name: this.game.teams[1].PlayerName,
        Modifer: this.game.teams[1].Momentum,
        Roll: team2Result
      }
    }, 'DiceRollVsLog');

    let team = null
    if (team1Result > team2Result) {
      team = this.game.teams[0].PlayerName;
      me.game.addInfoLog(this.game.teams[0].PlayerName + ' has won initiative');
      this.game.switchState(new States.RecieveKickChoice({}, team, this.game));
    } else if (team1Result < team2Result) {
      team = this.game.teams[1].PlayerName;
      me.game.addInfoLog(this.game.teams[1].PlayerName + ' has won initiative');
      this.game.switchState(new States.RecieveKickChoice({}, team, this.game));
    } else {
      me.game.addInfoLog("Tie roll. Rolling again.");
      this.game.switchState(new States.StartGameCoinFlip({}, me.activeTeamId, me.game));
    }

  }

  onExit() {
    this.game.UI.clearMessage();
  }

  handleInput(input, pieceId) {}
}
