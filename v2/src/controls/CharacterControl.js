import GamePieceControl from "./GamePieceControl";

function CharacterControl(properties) {
  this.GamePieceControl_constructor();
  this.shape = new createjs.Shape();
  var charaterImage = properties.image;
  var m = new createjs.Matrix2D();
  m.translate(-properties.baseSize / 2, -properties.baseSize / 2);
  m.scale((properties.baseSize) / charaterImage.height, (properties.baseSize) / charaterImage.width);


  this.shape.graphics.setStrokeStyle(2).beginStroke(properties.border).beginBitmapFill(charaterImage, "no-repeat", m).drawCircle(0, 0, (properties.baseSize / 2) - 1);

  this.addChild(this.shape);
};

var p = createjs.extend(CharacterControl, GamePieceControl);
p.shape = null;

export default createjs.promote(CharacterControl, "GamePieceControl");
