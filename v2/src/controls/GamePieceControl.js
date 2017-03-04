function GamePieceControl() {
  this.Container_constructor();
};

var p = createjs.extend(GamePieceControl, createjs.Container);

p.illuminate
p.type = null;


p.illuminate = function(){
  var bounds = this.DisplayObject_getBounds();

  this.illuminateCircle = new createjs.Shape();
  this.illuminateCircle.graphics.beginFill("blue").drawCircle(0, 0, (100* .5))
  this.illuminateCircle.alpha = .5;
  this.addChildAt(this.illuminateCircle);
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

export default createjs.promote(GamePieceControl, "Container");
