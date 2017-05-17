import State from "./State";
import * as States from "./";
import * as Actions from "@/actions";

export default class PickSideChoice extends State {
  constructor(params, activeTeamId, game) {
    super("PickSideChoice", params, activeTeamId, game);
  }

  onStart() {

  }

  onActiveTeamStart() {
    let me = this;
    this.game.UI.showMessage("Choose a Field Side");

    this.game.UI.showOptions("Which side dou you want to start on?", ["North", "South"]).then(option => {
      switch (option) {
        case "North":
          me.game.addAction(new Actions.SetTeamSide({
            side: 'North',
            teamId: me.activeTeamId
          }, this.game));
          me.game.addAction(new Actions.SetTeamSide({
            side: 'South',
            teamId: me.game.getOpposingTeamId()
          }, this.game));
          break;
        case "South":
          me.game.addAction(new Actions.SetTeamSide({
            side: 'South',
            teamId: me.activeTeamId
          }, this.game));
          me.game.addAction(new Actions.SetTeamSide({
            side: 'North',
            teamId: me.game.getOpposingTeamId()
          }, this.game));
          break;
        default:
      }
      me.game.switchState(new States.SetupCharacters({
        kicking: true
      }, me.params.kickingTeamId, me.game));

    }).catch(e => console.log(e))
  }

  onNonActiveTeamStart() {
    this.game.UI.showMessage(this.game.getOpposingTeam().PlayerName + " Is Choosing Side");
  }

  onActiveTeamExit() {}

  onNonActiveTeamExit() {

  }
  onExit() {
    this.game.UI.clearMessage();
  }
}
