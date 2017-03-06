import GamePieceControl from './GamePieceControl';
import MenuControl from './MenuControl';
import FontAwesomeIcons from '../common/FontAwesomeIcons';

function CharacterControl(properties, container) {
  this.GamePieceControl_constructor();
  this.addImage(properties);
  var me = this;
  this.properties = properties;
};

var p = createjs.extend(CharacterControl, GamePieceControl);

p.shape = null;
p.illuminateCircle = null;

p.addImage = function(properties){
  this.shape = new createjs.Shape();
  var charaterImage = properties.image;
  var m = new createjs.Matrix2D();
  m.translate(-properties.baseSize / 2, -properties.baseSize / 2);
  m.scale((properties.baseSize) / charaterImage.height, (properties.baseSize) / charaterImage.width);


  this.shape.graphics.setStrokeStyle(2).beginStroke(properties.border).beginBitmapFill(charaterImage, "no-repeat", m).drawCircle(0, 0, (properties.baseSize / 2) - 1);
  this.addChild(this.shape);
}

p.illuminate = function(){
  this.illuminateCircle = new createjs.Shape();
  this.illuminateCircle.graphics.beginFill("blue").drawCircle(0, 0, (this.properties.baseSize * .6) - 1)
  this.illuminateCircle.alpha = .5;
  this.addChildAt(this.illuminateCircle, this.shape);
  var me = this;
  createjs.Tween.get(this.illuminateCircle,{
    loop: true
  }).to({
    scaleX : 1.5,
    scaleY : 1.5
  },1000, createjs.Ease.getPowInOut(4)).to({
    scaleX : 1,
    scaleY : 1
  }, 1000, createjs.Ease.getPowInOut(4));
};

p.stopIlluminate = function(){
  this.removeChild(this.illuminateCircle);
}

export default createjs.promote(CharacterControl, "GamePieceControl");
