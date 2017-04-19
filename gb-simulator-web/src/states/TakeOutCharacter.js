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

  onExit(){
    this.game.stopHilightingCharacters(this.team.Characters);
    this.game.hideInfluenceControls(this.team);
  }

  handleInput(input, pieceId, evt) {
    console.log(input);
  }
}
