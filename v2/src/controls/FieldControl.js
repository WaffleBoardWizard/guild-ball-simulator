import Measurement from '../common/Measurements';

var initialSize = 1200;

function FieldControl(fieldImage) {
  this.Container_constructor();
  this.bitmap = new createjs.Bitmap(fieldImage);
  this.addChild(this.bitmap);

  this.drawField();
};

var p = createjs.extend(FieldControl, createjs.Container);

p.SetScale = function(scale) {
  var scaleTimes = 0;
  scaleTimes = 1200 / scale;
};

p.boundaries = {
  topGoalSide: null,
  topGoalArea: null,
  topGoal: null,
  topDeploy: null,
  topMidfield: null,
  bottomDeploy: null,
  bottomMidfield: null,
  bottomGoal: null,
  bottomGoalSide: null,
  bottomGoalArea: null,
  center: null
};
p.drawRect = function(x, y, width, height, color) {
  var rect = new createjs.Shape();
  rect.graphics.beginFill(color).drawRect(x, y, width, height);
  rect.alpha = .5;
  this.addChild(rect);

  return {
    x: x,
    y: y,
    height: height,
    width: width
  };
}

p.drawCircle = function(x, y, radius, color) {
  var circle = new createjs.Shape();
  circle.graphics.beginFill(color).drawCircle(x, y, radius);
  circle.alpha = .5;
  this.addChild(circle);

  return circle;
}

p.drawField = function() {
  this.boundaries.topGoalSide = this.drawRect(0, 0, Measurement.Foot * 3, Measurement.Inch * 6, "pink");
  this.boundaries.topGoalArea = this.drawCircle((Measurement.Foot * 3) / 2, 0, Measurement.Inch * 5, "red");
  this.boundaries.topGoal = this.drawCircle((Measurement.Foot * 3) / 2, 5 * Measurement.Inch, Measurement.Inch, "blue");
  this.boundaries.topDeploy = this.drawRect(0, Measurement.Inch * 6, Measurement.Foot * 3, Measurement.Inch * 4, "purple");
  this.boundaries.topMidfield = this.drawRect(0, Measurement.Inch * 10, Measurement.Foot * 3, Measurement.Inch * 8, "green");
  this.boundaries.bottomMidfield = this.drawRect(0, Measurement.Inch * 18, Measurement.Foot * 3, Measurement.Inch * 8, "green");
  this.boundaries.bottomDeploy = this.drawRect(0, Measurement.Inch * 26, Measurement.Foot * 3, Measurement.Inch * 4, "circle");
  this.boundaries.bottomGoalSide = this.drawRect(0, Measurement.Inch * 30, Measurement.Foot * 3, Measurement.Inch * 6, "pink");
  this.boundaries.bottomGoalArea = this.drawCircle((Measurement.Foot * 3) / 2, Measurement.Foot * 3, Measurement.Inch * 5, "red");
  this.boundaries.bottomGoal = this.drawCircle((Measurement.Foot * 3) / 2, (Measurement.Foot * 3) - (5 * Measurement.Inch), Measurement.Inch, "blue");
  this.boundaries.center = this.drawCircle((Measurement.Foot * 3) / 2, (Measurement.Foot * 3) / 2, Measurement.Inch * 3, "brown");
}

export default createjs.promote(FieldControl, "Container");
