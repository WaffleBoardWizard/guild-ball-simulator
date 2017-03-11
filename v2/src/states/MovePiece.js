import State from "./State";
import Inputs from "../Inputs"

export default class MovePiece extends State{
  constructor(piece, callback, game) {
    super("MovePiece", game);
    this.piece = piece;
    this.callback = callback.bind(game);
  }

  handleInput(input, piece, evt){
    if(piece != this.piece) return;

    switch (input) {
      case Inputs.PIECE_DRAG:
        this.piece.x = evt.rawX;
        this.piece.y = evt.rawY;
        break;
      case Inputs.PIECE_CLICK:
        if(this.callback)
          this.callback();
        break;
      default:
    }
  }
}
