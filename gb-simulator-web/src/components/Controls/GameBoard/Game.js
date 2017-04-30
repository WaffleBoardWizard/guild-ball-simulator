import Inputs from './Inputs';
import Measurements from './common/Measurements';

export default class Game {
  constructor(canvasId) {
    this.stage = null;
    this.assets = null;
    this.pieces = [];
    this.canvasId = canvasId;

    this.onPieceClicked = null;
  }

  initialize(assets) {
    //GET RID OF
    this.assets = assets;
    this.createStage(canvasId);
  }

  getPieceByType(type) {
    return _.filter(this.pieces, {
      type: type
    });
  }

  getPieces(ids) {
    return _.filter(this.pieces, x => _.includes(ids, x.id));
  }

  getPiece(id) {
    return _.find(this.pieces, {
      id: id
    });
  }

  reducePiecesToId(pieces) {
    return _.map(pieces, 'id');
  }

  placePieceOnTop(piece) {
    this.stage.swapChildren(piece, this.stage.getChildAt(this.stage.numChildren - 1));
  }

  createStage(canvasId) {
    this.stage = new createjs.Stage("demoCanvas");
    createjs.Touch.enable(this.stage, false, true);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);
    this.stage.enableMouseOver(20);
  }

  bindInputsToPiece(piece) {

    piece.on("click", function(evt) {
      this.clickPiece({
        pieceId: piece.id
      });
    }, this);

    piece.on("mouseup", function(evt) {}, this);

    piece.on("mousedown", function(evt) {}, this);
  }

  addPieceToField(piece, x, y) {
    piece.x = x;
    piece.y = y;

    this.pieces.push(piece)
    this.bindInputsToPiece(piece);
    this.stage.addChild(piece);
  }

  showMessage(message, color) {
    var me = this;
    var text = new createjs.Text(message, "64px Arial", color || "red");
    text.set({
      textAlign: "center",
      textBaseline: "middle"
    });

    //TODO figure out better way to calculate this.
    text.x = 33.33 * 18;
    text.y = 33.33 * 18;

    this.stage.addChild(text);

    createjs.Tween.get(text).to({
      alpha: 0.5
    }, 2000);

    createjs.Tween.get(text, {
      loop: false
    }).to({
      scaleX: 1.5,
      scaleY: 1.5
    }, 2000, createjs.Ease.getPowInOut(4)).call(function() {
      me.field.removeChild(text);
    })
  }

  //INPUT HANDLERS
  clickPiece(params) {
    if (this.onPieceClicked)
      this.onPieceClicked(params);
  }
  //END INPUT HANDLERS

  movePiece(pieceId) {
    let me = this;
    let cancel = null;

    let promise = new Promise((resolve, reject) => {
      let piece = me.getPiece(pieceId);
      let pressMoveListener = piece.on("pressmove", onMove, this);
      let clickListener = piece.on("click", onClick, this);


      function onMove(evt) {
        piece.x = evt.rawX;
        piece.y = evt.rawY;
      };

      function onClick(evt) {
        piece.off("pressmove", pressMoveListener);
        piece.off("click", clickListener);
        resolve({
          x: piece.x / Measurements.Inch,
          y: piece.y / Measurements.Inch
        });
      };

      cancel = function() {
        piece.off("pressmove", pressMoveListener);
        piece.off("click", clickListener);
      }
    });



    return {
      promise,
      cancel
    }
  }
}
