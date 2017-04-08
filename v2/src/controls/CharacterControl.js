import GamePieceControl from './GamePieceControl';
import MenuControl from './MenuControl';
import FontAwesomeIcons from '../common/FontAwesomeIcons';
import Measurements from '../common/Measurements';
import FontAwesomeIcons from '../common/FontAwesomeIcons';
import FAButton from "./FAButton";

function CharacterControl(character, image) {
  this.GamePieceControl_constructor("character");
  this.character = character;
  this.image = image;
  this.baseSize =  this.character.Size * Measurements.MM
  this.character.addOnHealthChange(this.onDamage.bind(this));


  this.addImage();

  this.id = this.character.Name;

  this.character.addOnHealthChange(this.onDamage.bind(this));
  this.character.addOnConditionsChange(this.onConditionAdded.bind(this));
  this.character.addOnAurasChange(this.onAuraAdded.bind(this));
  this.character.addOnInfluenceChange(this.showInfluenceBar.bind(this));

  //this.shape.addEventListener ("mouseover", function(){
  //  console.log("mouse")
    this.showHealthBar();
    this.showInfluenceBar();
//  }, this);

  this.shape.on("click", function(){
    console.log(this.character);
  }, this);

  const handler = {
    set(target, key, value) {
      console.log(`Setting value ${key} as ${value}`)
    },
  };

  const p = new Proxy(character, handler);

};

var p = createjs.extend(CharacterControl, GamePieceControl);
p.baseSize = null;
p.healthBar = null;
p.influenceBar = null;
p.shape = null;
p.illuminateCircle = null;
p.conditionBars = [];
p.auras = [];
p.influenceControls = [];


p.showMoveIcon = function(){
  var text = new createjs.Text(FontAwesomeIcons.arrows, "32px FontAwesome");
  text.set({
    textAlign: "center",
    textBaseline: "middle",
    color: "white"
  });
  this.addChild(text);
}

p.onAuraAdded = function(aura){
  this.removeAuras();

  this.character.Auras.forEach( aura => this.showAura( aura.Length, aura.Color));
}

p.removeAuras = function () {
  this.auras.forEach( a => this.removeChild(a), this);
  this.auras = [];
}

p.onConditionAdded= function(condition){
  this.showMessage(condition.Name);
};

p.showInfluenceBar = function() {
  if (this.influenceBar)
    this.removeChild(this.influenceBar);

  this.influenceBar = new createjs.Shape().set({
    x: 0,
    y: 0
  });

  this.addChildAt(this.influenceBar, this.shape);

  // Draw Random Segments
  var thisArc, angle = 0;
  var arc = 360 / this.character.InfluenceMax;

  for (var i = 0; i <= this.character.InfluenceMax; i++) {
    var angle = i * arc;
    var startAngle = angle * Math.PI / 180;
    var endAngle = Math.min(360, angle + arc) * Math.PI / 180;
    this.influenceBar.graphics.s("black").ss(3);

    if (i < this.character.Influence)
      this.influenceBar.graphics.f("purple");
    else
      this.influenceBar.graphics.f("white");

    this.influenceBar.graphics.moveTo(0, 0)
    this.influenceBar.graphics.arc(0, 0, this.baseSize * .65, startAngle, endAngle);
  }
};

p.onDamage = function(damage) {
  this.showMessage( damage + " Damage");
  this.showHealthBar();
  this.showInfluenceBar();
}

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

p.showMessage = function(message, color){
  var me = this;
  var text = new createjs.Text(message, "20px Arial", color || "red");
  text.set({
    textAlign: "center",
    textBaseline: "middle"
  });

  //text.x = -this.baseSize / 2;
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

p.showAura = function(size, color){
  let aura = new createjs.Shape();
  aura.graphics.beginFill(color).drawCircle(0, 0, size * Measurements.Inch);
  aura.alpha = .5;
  this.addChildAt(aura, this.shape);
  this.auras.push(aura);
}

p.showInflunceControls = function(maxInfluence, getAvaliableInfluence, onInfluenceChange){
  let me = this;
  let add = new FAButton(FontAwesomeIcons.plus, "white", "red", 25);
  add.x = -15
  add.y = this.baseSize;
  add.on('click', function(){
    if(getAvaliableInfluence() > 0 && me.character.Influence < me.character.InfluenceMax){
      me.character.Influence++;
      me.showInfluenceBar();
      onInfluenceChange(+1);
    }
  });



  let minus = new FAButton(FontAwesomeIcons.minus, "white", "red", 25);
  minus.x = 15;
  minus.y = this.baseSize;
  minus.on('click', function(){
    console.log(maxInfluence)
    if(getAvaliableInfluence() != maxInfluence && me.character.Influence != 0){
      me.character.Influence--;
      me.showInfluenceBar();
      onInfluenceChange(-1);
    }
  });

  this.influenceControls.push(add);
  this.influenceControls.push(minus);

  this.addChild(add);
  this.addChild(minus);
}

p.hideInfluenceControls = function(){
  this.influenceControls.forEach((c) => this.removeChild(c), this);
  this.influenceControls = [];
}

export default createjs.promote(CharacterControl, "GamePieceControl");
