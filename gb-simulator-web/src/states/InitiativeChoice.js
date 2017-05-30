import State from "./State";
import * as States from "./";
import * as Actions from "@/actions";

export default class InitiativeChoice extends State {
  constructor(params, activeTeamId, game) {
    super("InitiativeChoice", params, activeTeamId, game);
  }

  onStart() {

  }

  onActiveTeamStart() {
    let me = this;

    this.game.UI.showMessage("You have won initiative.");

    this.game.UI.showOptions("You have won initiative, would you like to take it?", ["Yes", "No"]).then(option => {
      let firstTeam = null;
      let secondTeam = null;

      switch (option) {
        case "Yes":
          firstTeam = me.game.getCurrentTeam();
          secondTeam = me.game.getOpposingTeam();
        case "No":
          firstTeam = me.game.getOpposingTeam();
          secondTeam = me.game.getCurrentTeam();
          break;
        default:
      }

      //Team that does not have intitiave recieves Momentum
      me.game.addMomentumToTeam(secondTeam, 1);

      me.game.switchState(new States.SetInfluence({}, me.activeTeamId, me.game));
    }).catch(e => console.log(e))
  }

  onNonActiveTeamStart() {
    this.game.UI.showMessage(this.game.getOpposingTeam().PlayerName + " Is Choosing if they would like to take initiative");
  }

  onActiveTeamExit() {}

  onNonActiveTeamExit() {

  }
  onExit() {
    this.game.UI.clearMessage();
  }
}
