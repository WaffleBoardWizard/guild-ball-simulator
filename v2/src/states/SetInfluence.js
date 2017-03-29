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

    this.callback = callback.bind(this.game);
  }

  onStart(){
    var confirm = this.game.showButton("Confirm");
    confirm.on("click", () => this.callback());
  }

  onExit(){
    this.characters.forEach( c => c.hideInfluenceControls());
  }

  handleInput(input, pieceId, evt) {
  }
}
