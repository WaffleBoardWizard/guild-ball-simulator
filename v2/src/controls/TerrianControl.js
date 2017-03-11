import GamePieceControl from "./GamePieceControl";

function TerrianControl(properties) {
  this.GamePieceControl_constructor("terrian");
  this.addImage(properties);
};

var p = createjs.extend(TerrianControl, GamePieceControl);

p.shape = null;

p.addImage = function(properties) {
  var m = new createjs.Matrix2D();
  this.shape = new createjs.Shape();;
  m.translate(0,0);
  m.scale((properties.height) / properties.image.height, (properties.width) / properties.image.width);
  this.shape.graphics.setStrokeStyle(2).beginBitmapFill(properties.image, "no-repeat", m).drawRect(0, 0, properties.height, properties.width);
  this.addChild(this.shape)
}

export default createjs.promote(TerrianControl, "GamePieceControl");
