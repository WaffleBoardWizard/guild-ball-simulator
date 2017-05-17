import Inputs from './Inputs';
import Measurements from './common/Measurements';

export default class Game {
  constructor(canvasId) {
    this.stage = null;
    this.assets = null;
    this.pieces = [];
    this.canvasId = canvasId;
    this.overlays = [];
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

  drawOverlays(boundaries){
      boundaries.forEach( o => this.drawOverlay(o));
  }

  drawOverlay(boundary){
    if(boundary.name == "Box")
      this.drawBoxOverlay(boundary);
    else if(boundary.name == "Radius")
        this.drawRadiusOverlay(boundary);
  }

  drawBoxOverlay(boundary){
   var g = new createjs.Graphics();
   g.setStrokeStyle(1);
   g.beginStroke(createjs.Graphics.getRGB(0,0,0));
   g.beginFill(createjs.Graphics.getRGB(255,0,0));
   let minX = boundary.minX * Measurements.Inch;
   let maxX = boundary.maxX * Measurements.Inch;
   let minY = boundary.minY * Measurements.Inch;
   let maxY = boundary.maxY * Measurements.Inch;

   g.drawRect(minX, minY, maxX - minX, maxY - minY);

   var s = new createjs.Shape(g);
   s.alpha = .5;
   this.overlays.push(s);
   this.field.addChild(s);
  }

  drawRadiusOverlay(boundary){
   var g = new createjs.Graphics();
   g.setStrokeStyle(1);
   g.beginStroke(createjs.Graphics.getRGB(0,0,0));
   g.beginFill(createjs.Graphics.getRGB(255,0,0));
   let x = boundary.startX * Measurements.Inch;
   let y = boundary.startY * Measurements.Inch;
   let radius = boundary.radius * Measurements.Inch;

   g.drawCircle(x, y, radius);

   var s = new createjs.Shape(g);
   s.alpha = .5;
   this.overlays.push(s);
   this.field.addChild(s);
  }

  removeOverlays(){
    this.overlays.forEach(o => this.field.removeChild(o));
    this.overlays = [];
  }

  movePiece(pieceId, boundaries) {
    let me = this;
    let cancel = null;

    let promise = new Promise((resolve, reject) => {
      let piece = me.getPiece(pieceId);
      let pressMoveListener = piece.on("pressmove", onMove, this);
      let clickListener = piece.on("pressup", onClick, this);

      function onMove(evt) {
        if(!boundaries
          || _.find(boundaries, x => x.InBoundary((evt.rawX) / Measurements.Inch, (evt.rawY) / Measurements.Inch))){
          piece.x = evt.rawX;
          piece.y = evt.rawY;
        }
      };

      function onClick(evt) {
        piece.off("pressmove", pressMoveListener);
        piece.off("pressup", clickListener);
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
