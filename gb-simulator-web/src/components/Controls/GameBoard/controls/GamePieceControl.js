function GamePieceControl(type) {
  this.Container_constructor();
  //this.id = new Date().getUTCMilliseconds();
  this.type = type;
};

var p = createjs.extend(GamePieceControl, createjs.Container);

p.type = null;

export default createjs.promote(GamePieceControl, "Container");
