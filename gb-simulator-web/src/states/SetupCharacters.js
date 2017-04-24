import State from './State';
import * as States from './'
import * as Actions from "../actions";

export default class SetupCharacters extends State {
  constructor(params, game) {
    super("SetupCharacters", params, game);
  }

  onStart() {
    let me = this;
    console.log("setting up");
    
    if(this.game.player == this.params.team){
      this.game.UI.showMessage("Please Setup For Kick Off");

      let team = this.game.getTeam(this.params.team);

      let characters = team.Characters;
      this.game.highlightCharacters(characters);

      characters.forEach( character =>{
        this.game.UI.moveCharacter(character)
        .then( r => {
          character.x = r.x;
          character.y = r.y;

          // me.game.updateCharacterData();

          me.game.addAction(new Actions.MovePiece({
              character: character.Name,
              from: {
                x : 0,
                y : 0
              },
              to: {
                x : r.x,
                y : r.y
              }
            }
          ));
        })
        .catch( e => console.log(e));
      }, this);

    } else {
      this.game.UI.showMessage("Please wait...");
    }
  }

  onExit() {
    this.game.UI.clearMessage();
  }

  handleInput(input, pieceId) {
  }
}
