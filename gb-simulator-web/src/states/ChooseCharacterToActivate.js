import State from "./State";
import Inputs from "../Inputs"
import * as States from "./"

export default class ChooseCharacterToActivate extends State {
  constructor(params, game) {
    super("ChooseCharacterToActivate", params, game, params.speed);
    this.teamId = params.teamId;
    this.team = this.game.getTeam(params.teamId);
    this.unActivatedCharacters = _.filter(this.team.Characters, c => c.Turn.Activated == false);
  }

  onStart(){
    this.game.setCurrentTeam(this.team);
    this.game.highlightCharacters(this.unActivatedCharacters);
  }

  onExit(){
    this.game.stopHilightingCharacters(this.team.Characters);
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
