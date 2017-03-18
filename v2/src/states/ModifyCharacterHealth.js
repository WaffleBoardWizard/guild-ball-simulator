import State from "./State";
import Inputs from "../Inputs"
import * as Controls from '../controls';

export default class ModifyCharacterHealth extends State{
  constructor(params,callback, game) {
    super("ModifyCharacterHealth", params, game, 500);
    var character = this.game.getPiece(params.characterId);
    character.character.damage(params.hits);
  }

  handleInput(input, pieceId, evt){
  }
}
