import GamePieceControl from "./GamePieceControl";
import Measurements from '../common/Measurements';
var BALL_IMAGE = require("../assets/ball.png");

function BallControl(ballmage) {
  this.GamePieceControl_constructor();
  this.addImage(Measurements.Inch, ballmage);
};

var p = createjs.extend(BallControl, GamePieceControl);

p.shape = null;

p.addImage = function(size, ballmage) {
  this.shape = new createjs.Shape();;
  var m = new createjs.Matrix2D();
  m.translate(-size / 2, -size / 2);
  m.scale(size / ballmage.height, size / ballmage.width);

  this.shape.graphics.setStrokeStyle(2).beginStroke("white").beginBitmapFill(ballmage, "no-repeat", m).drawCircle(0, 0, (size / 2) - 1);

  this.addChild(this.shape);
}

export default createjs.promote(BallControl, "GamePieceControl");
