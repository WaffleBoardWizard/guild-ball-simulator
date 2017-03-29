import State from "./State";
import Inputs from "../Inputs"
import * as Controls from '../controls';
import * as States from './';

export default class ModifyCharacterHealth extends State{
  constructor(params,callback, game) {
    super("ModifyCharacterHealth", params, game, 500);
    var character = this.game.getPiece(params.characterId);
    character.character.damage(params.hits);
    if(character.character.isTakenOut()){
      game.switchState(new States.TakeOutCharacter({
        characterId: params.characterId,
      }, callback, game));
    }
  }

  handleInput(input, pieceId, evt){
  }
}
