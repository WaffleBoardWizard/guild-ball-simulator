import State from "./State";
import FontAwesomeIcons from '../common/FontAwesomeIcons';

export default class SelectPiece extends State {
  constructor(piecesId, callback, game) {
    super("SelectPiece", piecesId, game, 500);
    this.piecesId = piecesId;
    this.pieces = this.game.getPieces(piecesId);

    if (callback)
      this.callback = callback;
  }

  onStart() {
    this.game.illuminateCharacters(this.pieces);
  }

  onExit() {
    this.game.stopIllumatingAllCharacters(this.pieces);
  }

  handleInput(input, pieceId) {
    switch (input) {
      case Inputs.PIECE_CLICK:
        if (_.includes(this.piecesId, pieceId)) {
          var character = this.game.getPiece(pieceId);
          this.game.placePieceOnTop(character);
          if (this.callback)
            this.callback.bind(this.game, pieceId)();
        }
        break;
      default:
    }
  }
}
