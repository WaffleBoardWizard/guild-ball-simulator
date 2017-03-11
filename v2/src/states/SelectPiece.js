import State from "./State";
import Inputs from "../Inputs";
import MenuControl from "../controls/MenuControl";
import FontAwesomeIcons from '../common/FontAwesomeIcons';

export default class SelectPiece extends State {
  constructor(piecesId, callback, game) {
    super("SelectPiece", game);
    this.piecesId = piecesId;
    this.pieces = this.game.getPieces(piecesId);
    this.game.illuminateCharacters(this.pieces);
    this.callback = callback;
  }


  handleInput(input, pieceId) {
    switch (input) {
      case Inputs.PIECE_CLICK:
        if (_.includes(this.piecesId, pieceId)) {
          this.game.stopIllumatingAllCharacters(this.characters);
          if(this.callback)
            this.callback.bind(this.game, pieceId)();
        }
    break;
    default:
  }
}
}
