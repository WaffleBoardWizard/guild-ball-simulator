import State from "./State";
import Inputs from "../Inputs"

export default class KickBall extends State{
  constructor(piece, game) {
    super(game);
    this.piece = piece;
  }

  handleInput(input, piece, evt){
    if(piece != this.piece) return;

    switch (input) {
      case Inputs.PIECE_DRAG:
        this.piece.x = evt.rawX;
        this.piece.y = evt.rawY;
        break;
      default:
    }
  }
}
