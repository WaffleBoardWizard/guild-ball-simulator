import State from "./State";
import Inputs from "../Inputs"

export default class SetInfluence extends State {
  constructor(params, callback, game) {
    super("SetInfluence", params, game, params.speed);
    this.teamId = params.teamId;
    this.team = _.find(this.game.teams, { PlayerName : this.teamId});

    let InfluenceMax = this.team.Influence;

    this.characters = game.getTeamCharacters(this.teamId);

    this.characters.forEach( c =>{
      c.showInflunceControls(InfluenceMax, function(){
        return InfluenceMax;
      }, function(value){
        InfluenceMax -= value;
      });
    });
  }

  onStart(){
  }

  handleInput(input, pieceId, evt) {
  }
}
