import State from "./State";
import * as States from "./";

export default class RecieveKickChoice extends State {
  constructor(params, activeTeamId, game) {
    debugger

    super("RecieveKickChoice", params, activeTeamId, game);
  }

  onActiveTeamStart() {
    let me = this;

    this.game.UI.showMessage("Coin Flip");

    this.game.UI.showConfirm("Recieve", "Would you like to recieve?").then(x => {
      if (x) {
        me.game.switchState(new States.SetupCharacters({
          team: me.params.team
        }, me.game));
      } else {
        me.game.switchState(new States.SetupCharacters({
          team: me.params.team
        }, me.game));
      }
    }).catch(e => console.log(e))
  }

  onExit() {
    this.game.UI.clearMessage();
  }

  handleInput(input, pieceId) {}
}
