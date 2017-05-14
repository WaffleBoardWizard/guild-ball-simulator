import State from "./State";
import * as States from "./"

export default class ChooseCharacterToActivate extends State {
  constructor(params,activeTeamId, game) {
    super("ChooseCharacterToActivate", params, activeTeamId, game, params.speed);

  }

  onStart(){
  
  }

  onActiveTeamStart(){
    let me = this;
    debugger
    this.team = this.game.getTeam(this.activeTeamId);
    this.unActivatedCharacters = _.filter(this.team.Characters, c => c.Turn.Activated == false);
    this.game.UI.showMessage("Please Activate a Character");
    this.game.UI.selectCharacter(this.unActivatedCharacters)
                .then( character =>{
                  me.game.switchState(new States.ActivateCharacter({characterName : character.Name}, me.activeTeamId, me.game));
                })
                .catch( ex => console.log(ex));
  }

  onNonActiveTeamStart(){
    this.game.UI.showMessage(this.Team.PlayerName + " is choosing a character to Activate");
  }

  onActiveTeamExit(){
    this.game.stopHilightingCharacters(this.team.Characters);
  }

  onExit(){
    this.game.UI.clearMessage();
  }

  handleInput(input, pieceId, evt) {
    switch (input) {
      case "PIECE_CLICKED":
        let me = this;
        let validPlayer = _.find(this.unActivatedCharacters, { Name : pieceId});

        if(validPlayer){
            this.game.UI.confirmActivation(validPlayer).then( activate => {
              if(activate){
                  me.game.switchState(new States.ActivateCharacter({characterName: validPlayer.Name}, me.game));
              }
            });
        }
        break;
      default:
    }
  }
}
