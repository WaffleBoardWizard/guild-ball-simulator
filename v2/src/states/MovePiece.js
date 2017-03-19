import State from "./State";
import Inputs from "../Inputs"

export default class MovePiece extends State {
  constructor(params, callback, game) {
    super("MovePiece", params, game, params.speed);
    this.pieceId = params.pieceId;
    this.piece = this.game.getPiece(this.pieceId);

    createjs.Tween.get(this.piece, {
      loop: false
    }).to({
      x: params.x,
      y: params.y
    },  params.speed, createjs.Ease.getPowInOut(4));

    if (callback)
      this.callback = callback.bind(game);

    this.message = params.message;

  }

  onStart(){
    if(this.message)
      this.piece.showMessage(this.message);
  }

  handleInput(input, pieceId, evt) {
    if (pieceId != this.pieceId) return;
    switch (input) {
      case Inputs.PIECE_DRAG:
        this.piece.x = evt.mouseX;
        this.piece.y = evt.mouseY;
        break;
      case Inputs.PIECE_CLICK:
        if (this.callback)
          this.callback();
        break;
      default:
    }
  }
}
