import State from "./State";
import * as States from "./";

export default class RecieveKickChoice extends State {
  constructor(params, activeTeamId, game) {
    super("RecieveKickChoice", params, activeTeamId, game);
  }

  onActiveTeamStart() {
    let me = this;

    this.game.UI.showMessage("Coin Flip");

    this.game.UI.showOptions("You have won the coin toss. What would you like to do?", ["Recieve", "Kick"]).then(option => {

      switch (option) {
        case "Recieve":
          me.game.switchState(new States.SetupCharacters({
            kicking: true
          }, me.activeTeamId, me.game));
          me.game.addInfoLog(me.activeTeamId + ' has chosen to Kick');
          break;
        case "Kick":
          me.game.switchState(new States.SetupCharacters({
            kicking: true
          }, me.game.getOpposingTeamId(), me.game));
          me.game.addInfoLog(me.activeTeamId + ' has chosen to Recieve');
          break;
        default:
      }
    }).catch(e => console.log(e))
  }

  onExit() {
    this.game.UI.clearMessage();
  }

  handleInput(input, pieceId) {}
}
