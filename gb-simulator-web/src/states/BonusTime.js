import State from './State';
import * as States from './'
import * as Actions from "@/actions";


export default class BonusTime extends State {
  constructor(params, activeTeamId, game) {
    super("BonusTime", params, activeTeamId, game);
  }

  onStart() {}

  onActiveTeamStart() {
    this.game.UI.showOptions("Would you like to bonus time this " + this.params.action + "?", ["North", "South"]).then(option => {
      switch (expression) {
        case "Yes":
          me.game.addAction(new Actions.SetTeamMomentum({
            teamId: me.activeTeamId
          }, me.playerTeam.Momentum - 1));
          me.params.nextState.params.bonusTime = confirm;
          break;
      }
      me.game.switchState(new States[me.params.nextState.name](me.params.nextState.params, me.activeTeamId, me.game));
    })
  }

  onNonActiveTeamStart() {}

  onActiveTeamExit() {}

  onNonActiveTeamExit() {}

  onExit() {}
}
