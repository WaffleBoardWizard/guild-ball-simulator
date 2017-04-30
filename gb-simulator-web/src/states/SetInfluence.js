import State from "./State";
import Inputs from "../Inputs"

export default class SetInfluence extends State {
  constructor(params, activeTeamId, game) {
    super("SetInfluence", params, activeTeamId, game, params.speed);
    this.teamId = params.teamId;

    this.team = this.game.getTeam(this.activeTeamId);
  }

  onActiveTeamStart(){
    this.game.UI.showMessage("Please Set Your Influence");
    this.game.highlightCharacters(this.team.Characters);
    this.game.setCurrentTeam(this.team);
    this.game.allowTeamToSetInfluence(this.team);
  }

  onNonActiveTeamStart(){
    this.game.UI.showMessage(this.team.PlayerName + " is Setting Influence");
  }

  onActiveTeamExit(){
    this.game.stopHilightingCharacters(this.team.Characters);
    this.game.hideInfluenceControls(this.team);
  }

  onNonActiveTeamExit(){
  }

  onExit(){
    this.game.UI.clearMessage();
  }

  validateExit(){
    let me = this;
    return new Promise(function(resolve, reject) {
      let maxInfluence = 0;
      let usedInfluence = 0;

      me.team.Characters.forEach(character => {
        maxInfluence += character.InfluenceStart;
        usedInfluence += character.Influence;
      }, this);

      if(maxInfluence > usedInfluence){
        me.game.UI.showConfirm("Validate", "You did not allocate all your influence. Are you sure you want to continue?")
          .then(resolve)
          .catch( e => console.log(e))
      } else {
        resolve(true);
      }
    });
  }
}
