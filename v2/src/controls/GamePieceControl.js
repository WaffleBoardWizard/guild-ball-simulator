function GamePieceControl() {
  this.Container_constructor();
};

var p = createjs.extend(GamePieceControl, createjs.Container);

p.type = null;

export default createjs.promote(GamePieceControl, "Container");
