import GamePieceControl from './GamePieceControl';
import MenuControl from './MenuControl';
import FontAwesomeIcons from '../common/FontAwesomeIcons';
import Measurements from '../common/Measurements';

function CharacterControl(character, image) {
  this.GamePieceControl_constructor("character");
  this.character = character;
  this.image = image;
  this.baseSize =  this.character.Size * Measurements.MM
  this.character.addOnHealthChange(this.onDamage.bind(this));
  this.addImage();
  this.showHealthBar();

  this.id = this.character.Name;
};

var p = createjs.extend(CharacterControl, GamePieceControl);
p.baseSize = null;
p.healthBar = null;
p.shape = null;
p.illuminateCircle = null;

p.showHealthBar = function() {
  if (this.healthBar)
    this.removeChild(this.healthBar);

  this.healthBar = new createjs.Shape().set({
    x: 0,
    y: 0
  });

  this.addChildAt(this.healthBar, this.shape);

  // Draw Random Segments
  var thisArc, angle = 0;
  var arc = 360 / this.character.MaxHealth;

  for (var i = 0; i <= this.character.MaxHealth; i++) {
    var angle = i * arc;
    var startAngle = angle * Math.PI / 180;
    var endAngle = Math.min(360, angle + arc) * Math.PI / 180;
    this.healthBar.graphics.s("black").ss(3);

    if (i < this.character.CurrentHP)
      this.healthBar.graphics.f("red");
    else
      this.healthBar.graphics.f("white");

    this.healthBar.graphics.moveTo(0, 0)
    this.healthBar.graphics.arc(0, 0, this.baseSize * .5, startAngle, endAngle);
  }
};

p.onDamage = function(damage) {
  this.showMessage( damage + " Damage");
  this.showHealthBar();
}
p.showInfluenceBar = function() {
  var shape = new createjs.Shape().set({
    x: 0,
    y: 0
  });
  this.addChild(shape);

  // Draw Random Segments
  var thisArc, angle = 0;
  var arc = 360 / this.character.InfluenceMax;

  while (angle <= 360) {
    var startAngle = angle * Math.PI / 180;
    var endAngle = Math.min(360, angle + arc) * Math.PI / 180;
    shape.graphics.s("black").ss(3);
    shape.graphics.f("purple");
    shape.graphics.moveTo(0, 0)
    shape.graphics.arc(0, 0, this.baseSize * .6, startAngle, endAngle);
    //shape.graphics.lt(0,0); // This could close each arc.

    angle += arc;
  }
};

p.addImage = function() {
  this.shape = new createjs.Shape();
  var charaterImage = this.image;
  var m = new createjs.Matrix2D();
  m.translate(-this.baseSize / 2, -this.baseSize / 2);
  m.scale((this.baseSize) / charaterImage.height, (this.baseSize) / charaterImage.width);


  this.shape.graphics.setStrokeStyle(2)
    .beginStroke("black")
    .beginBitmapFill(charaterImage, "no-repeat", m)
    .drawCircle(0, 0, (this.baseSize * .4) - 1);
  this.addChild(this.shape);
}

p.illuminate = function() {
  this.illuminateCircle = new createjs.Shape();
  this.illuminateCircle.graphics.beginFill("blue").drawCircle(0, 0, (this.baseSize * .6) - 1)
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

p.showMessage = function(message){
  var me = this;
  var text = new createjs.Text(message, "20px Arial", "red");
  text.x = -this.baseSize;
  this.addChild(text);

  createjs.Tween.get(text).to({alpha: 0.5}, 2000);

  createjs.Tween.get(text, {
    loop: false
  }).to({
    scaleX: 1.5,
    scaleY: 1.5
  }, 2000, createjs.Ease.getPowInOut(4)).call(function(){
    me.removeChild(text);
  })
}

p.data = function(){
  var data = JSON.stringify(this.character)
  return {
    x : this.x,
    y: this.y,
    characterData: data
  }
}
export default createjs.promote(CharacterControl, "GamePieceControl");
