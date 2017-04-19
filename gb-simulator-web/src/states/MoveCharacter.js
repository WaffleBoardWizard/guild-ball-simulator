import State from "./State";
import Inputs from "../Inputs"

export default class MoveCharacter extends State {
  constructor(params, game) {
    super("MoveCharacter", params, game, params.speed);
    this.characterName = params.characterName;
    this.character = this.game.getCharacter(params.characterName);
  }

  onStart(){
    this.game.moveCharacter(this.character);
  }

  onExit(){
  }

  handleInput(input, pieceId, evt) {
  }
}
