import State from "./State";
import * as States from './';
import * as Actions from "@/actions";

export default class SetInfluence extends State {
  constructor(params, activeTeamId, game) {
    super("SetInfluence", params, activeTeamId, game, params.speed);
    this.team = this.game.getTeam(this.activeTeamId);
  }

  onActiveTeamStart(){
    let me = this;
    this.game.UI.showMessage("Please Set Your Influence");
    console.log("setting influence");
    this.game.UI.setInfluence(this.team).then( x => {
      let maxInfluence = 0;
      let usedInfluence = 0;

      me.team.Characters.forEach(character => {
        maxInfluence += character.InfluenceStart;
        usedInfluence += character.Influence;
      }, this);

      if(maxInfluence > usedInfluence){
        me.game.UI.showConfirm("Validate", "You did not allocate all your influence. Are you sure you want to continue?")
          .then( confirm =>{
            if(confirm)
              me.nextState();
            else
              me.game.switchState(new States.SetInfluence(
              {}, me.activeTeamId, me.game));
          })
          .catch( e => console.log(e))
      } else {
        me.nextState();
      }
    })
  }

  setCharactersInfluenceActions(){
    this.team.Characters.forEach(character => {
      this.game.addAction(new Actions.SetCharacterInfluence({characterName: character.Name, Influence : character.Influence}, this.game));
    }, this);
  }

  nextState(){
    this.setCharactersInfluenceActions();

    let otherTeam = this.game.getOpposingTeam();

    this.game.addAction(new Actions.SetTeamHasSetInfluence({teamId: this.activeTeamId, HasSetInfluence : true}, this.game));

    if(otherTeam.HasSetInfluence){
      this.game.switchState(new States.ChooseCharacterToActivate(
        {}, this.game.getOpposingTeamId(), this.game));
    } else {
      this.game.switchState(new States.SetInfluence(
        {}, this.game.getOpposingTeamId(), this.game));
    }
  }

  onNonActiveTeamStart(){
    this.game.UI.showMessage(this.team.PlayerName + " is Setting Influence");
  }

  onActiveTeamExit(){
  }

  onNonActiveTeamExit(){
  }

  onExit(){
    this.game.UI.clearMessage();
  }
}
