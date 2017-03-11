export default class Game {
  constructor() {
    this.characters = [];
    this.ball = null;
    this.field = null;
    this._currentState = null;
    this.assets = null;
    this.pieces = [];
  }

  getPieceByType(type){
    return  _.filter(this.pieces, { type: type});
  }

  getPieces(ids){
      return _.filter(this.pieces, x => _.includes(ids, x.id));
  }

  getPiece(id){
    return _.find(this.pieces, { id : id });
  }

  reducePiecesToId(pieces){
    return _.map(pieces, 'id');
  }
}
