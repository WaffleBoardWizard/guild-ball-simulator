import State from "./State";
import * as States from "./"
import * as Actions from "@/actions";

export default class AssignKicker extends State {
  constructor(params, activeTeamId, game) {
    super("AssignKicker", params, activeTeamId, game, 800);
  }

  onStart(){
  }

  onActiveTeamStart(){
    let me = this;

    this.game.UI.showMessage("Please Activate a Character");
    this.team = this.game.getTeam(this.activeTeamId);
    this.game.UI.selectCharacter(this.team.Characters)
                .then( character =>{
                  me.game.addAction(new Actions.AssignBall({characterId: character.Name}, me.game));
                  me.game.switchState(new States.SetupCharacters(null, me.game.getOpposingTeamId(), me.game));
                })
                .catch( ex => console.log(ex));
  }

  onNonActiveTeamStart(){
    this.game.UI.showMessage(this.activeTeamId + " is choosing a character to give the ball to");
  }

  onActiveTeamExit(){
  }

  onExit(){
    this.game.UI.clearMessage();
  }
}
