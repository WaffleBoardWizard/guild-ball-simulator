import State from "./State";
import Inputs from "../Inputs"

export default class KickBall extends State {
  constructor(params, callback, game) {
    super("KickBall", params, game, 500);
    this.piecesId = params.charactersId;
    this.pieces = this.game.getPieces(this.piecesId);

    this.ball = game.getPieceByType("ball")[0];

    if (callback)
      this.callback = callback.bind(game);
  }

  onStart() {
    this.game.illuminateCharacters(this.pieces);
  }

  onExit() {
    this.game.stopIllumatingAllCharacters(this.pieces);
  }

  handleInput(input, pieceId, evt) {
    switch (input) {
      case Inputs.PIECE_DRAG:
        if (pieceId == this.ball.id) {
          this.ball.x = evt.mouseX;
          this.ball.y = evt.mouseY;
        }
        break;
      case Inputs.PIECE_CLICK:
        if (_.includes(this.piecesId, pieceId)) {
          if (this.callback)
            this.callback({type: "piece", pieceId : pieceId});
        } else if (pieceId == this.ball.id){
          if (this.callback)
            this.callback({ type : "field" });
        }
        break;
      default:
    }
  }
}
