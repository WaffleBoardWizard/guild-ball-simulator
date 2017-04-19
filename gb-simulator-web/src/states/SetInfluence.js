import State from "./State";
import Inputs from "../Inputs"

export default class SetInfluence extends State {
  constructor(params, game) {
    super("SetInfluence", params, game, params.speed);
    this.teamId = params.teamId;
    this.team = this.game.getTeam(params.teamId);
  }

  onStart(){
    this.game.highlightCharacters(this.team.Characters);
    this.game.setCurrentTeam(this.team);
    this.game.allowTeamToSetInfluence(this.team);
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

  onExit(){
    this.game.stopHilightingCharacters(this.team.Characters);
    this.game.hideInfluenceControls(this.team);
  }

  handleInput(input, pieceId, evt) {

  }
}
