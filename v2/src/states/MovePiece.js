import State from "./State";
import Inputs from "../Inputs"

export default class MovePiece extends State{
  constructor(params, callback, game) {
    super("MovePiece", params, game, 1);
    this.pieceId = params.pieceId;
    this.piece = this.game.getPiece(this.pieceId);
    this.piece.x = params.x;
    this.piece.y = params.y;

    if(callback)
      this.callback = callback.bind(game);
  }

  handleInput(input, pieceId, evt){
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
