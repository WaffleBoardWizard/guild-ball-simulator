import GamePieceControl from "./GamePieceControl";
import Measurements from '../common/Measurements';
import MathHelper from '../helpers/MathHelper';
var BALL_IMAGE = require("../assets/ball.png");

function GoalControl(goalImage) {
  this.GamePieceControl_constructor("goal");
  this.addImage(Measurements.Inch * 2, goalImage);
};

var p = createjs.extend(GoalControl, GamePieceControl);

p.shape = null;
p.illuminateCircle = null;

p.addImage = function(size, ballmage) {
  this.shape = new createjs.Shape();;
  var m = new createjs.Matrix2D();
  m.translate(-size / 2, -size / 2);
  m.scale(size / ballmage.height, size / ballmage.width);
  this.shape.graphics.setStrokeStyle(2).beginStroke("white").beginBitmapFill(ballmage, "no-repeat", m).drawCircle(0, 0, (size / 2) - 1);
  this.addChild(this.shape);
}

p.illuminate = function() {
  this.illuminateCircle = new createjs.Shape();
  this.illuminateCircle.graphics.beginFill("blue").drawCircle(0, 0, (Measurements.Inch) - 1)
  this.illuminateCircle.alpha = .5;
  this.addChildAt(this.illuminateCircle, this.shape);
  var me = this;
  createjs.Tween.get(this.illuminateCircle, {
    loop: true
  }).to({
    scaleX: 1.5,
    scaleY: 1.5
  }, 1000, createjs.Ease.getPowInOut(4)).to({
    scaleX: 1,
    scaleY: 1
  }, 1000, createjs.Ease.getPowInOut(4));
};

p.stopIlluminate = function() {
  this.removeChild(this.illuminateCircle);
}

export default createjs.promote(GoalControl, "GamePieceControl");
