import State from "./State";
import Inputs from "../Inputs";
import MenuControl from "../controls/MenuControl";
import FontAwesomeIcons from '../common/FontAwesomeIcons';

export default class SelectPiece extends State {
  constructor(characters, callback, game) {
    super("SelectPiece", game);
    this.characters = characters;
    this.game.illuminateCharacters(characters);
    this.callback = callback;
  }


  handleInput(input, character) {

    switch (input) {
      case Inputs.PIECE_CLICK:
        if (this.characters.indexOf(character) > -1) {
          this.game.stopIllumatingAllCharacters(this.characters);
          if(this.callback)
            this.callback.bind(this.game, character)();
        }
    break;
    default:
  }
}
}
