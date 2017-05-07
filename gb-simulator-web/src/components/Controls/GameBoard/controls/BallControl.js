import GamePieceControl from "./GamePieceControl";
import Measurements from '../common/Measurements';
import MathHelper from '@/Helpers/MathHelper';
var BALL_IMAGE = require("../assets/ball.png");

function BallControl(ballmage) {
  this.GamePieceControl_constructor("ball");
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

p.scatterLines = [];

p.drawScatter = function(intialAngle) {
  console.log(intialAngle);

  let angle = intialAngle - 90  + 22.5;
  for(let i = 1; i <= 6; i++){
    if( i == 4)
      angle += 22.5;

    let line = new createjs.Shape();
    let coord = MathHelper.CalculateXYWithDistanceAndAngle(6 * Measurements.Inch, angle);

    line.graphics.setStrokeStyle(3);
    if(i == 1)
      line.graphics.beginStroke("black");
    else
      line.graphics.beginStroke("white");


    line.graphics.moveTo(0, 0);
    line.graphics.lineTo(coord.x, coord.y);

    this.addChildAt(line, this);

    this.scatterLines.push(line);

    angle += 22.5;
  }
}

p.removeScatter = function(){
  this.scatterLines.forEach( l => this.removeChild(l), this);
  this.scatterLines = [];
}

p.highlighScatterLine = function(lineIndex) {
  createjs.Tween.get(this.scatterLines[lineIndex - 1], {
    loop: true
  }).to({
    scaleX: 1.5,
    scaleY: 1.5
  }, 1000, createjs.Ease.getPowInOut(4)).to({
    scaleX: 1,
    scaleY: 1
  }, 1000, createjs.Ease.getPowInOut(4));
}

export default createjs.promote(BallControl, "GamePieceControl");
