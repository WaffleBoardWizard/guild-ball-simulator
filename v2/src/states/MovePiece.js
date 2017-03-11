import State from "./State";
import Inputs from "../Inputs"

export default class MovePiece extends State{
  constructor(pieceId, callback, game) {
    super("MovePiece", game);
    this.pieceId = pieceId;
    this.piece = this.game.getPiece(pieceId);
    this.callback = callback.bind(game);
  }

  handleInput(input, pieceId, evt){
    console.log(pieceId);
    console.log(this.pieceId);
    if(pieceId != this.pieceId) return;
    switch (input) {
      case Inputs.PIECE_DRAG:
        this.piece.x = evt.mouseX;
        this.piece.y = evt.mouseY;
        break;
      case Inputs.PIECE_CLICK:
        if(this.callback)
          this.callback();
        break;
      default:
    }
  }
}
