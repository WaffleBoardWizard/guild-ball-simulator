import GamePieceControl from "./GamePieceControl";
import Measurements from '../common/Measurements';
var BALL_IMAGE = require("../assets/ball.png");
function BallControl(ballmage, kickScatterImage) {
  this.GamePieceControl_constructor("ball");
  this.addImage(Measurements.Inch, ballmage);
  this.scatter = new createjs.Shape();
  this.scatter.graphics.setStrokeStyle(2).beginStroke("red").beginBitmapFill(kickScatterImage, "no-repeat").drawRect(0, 0, kickScatterImage.width, kickScatterImage.height);
  this.scatter.rotation = 180;
  this.scatter.x = 0;
  this.scatter.y = 0;
  this.scatter.regY = this.scatter.regX = (kickScatterImage.width / 2)
  this.addChildAt(this.scatter, this.shape);
  //this.rotateScatter(0);
};

var p = createjs.extend(BallControl, GamePieceControl);

p.shape = null;

p.rotateScatter = function(degrees){
  console.log(degrees);
    this.scatter.rotation = degrees;
};

p.addImage = function(size, ballmage) {
  this.shape = new createjs.Shape();;
  var m = new createjs.Matrix2D();
  m.translate(-size / 2, -size / 2);
  m.scale(size / ballmage.height, size / ballmage.width);

  this.shape.graphics.setStrokeStyle(2).beginStroke("white").beginBitmapFill(ballmage, "no-repeat", m).drawCircle(0, 0, (size / 2) - 1);

  this.addChild(this.shape);
}

export default createjs.promote(BallControl, "GamePieceControl");
