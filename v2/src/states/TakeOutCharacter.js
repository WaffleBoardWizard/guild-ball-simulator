import Inputs from "../Inputs"
import State from "./State";

export default class TakeOutCharacter extends State {
  constructor(params, callback, game) {
    super("TakeOutCharacter", params, game, 1000);
    var character = this.game.getPiece(params.characterId);
    createjs.Tween.get(character)
      .to({
        alpha: 0
      }, 1000)
      .call(function() {
        character.showMessage("Taken Out");
        game.field.removeChild(character);
      });
  }

  handleInput(input, pieceId, evt) {}
}
