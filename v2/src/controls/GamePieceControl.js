function GamePieceControl() {
  this.Container_constructor();
  var me = this;
  this.on("pressmove", function(evt) {
    console.log(evt.rawX)
    me.x = evt.rawX;
    me.y = evt.rawY;
});
};

var p = createjs.extend(GamePieceControl, createjs.Container);

p.type = null;

export default createjs.promote(GamePieceControl, "Container");
