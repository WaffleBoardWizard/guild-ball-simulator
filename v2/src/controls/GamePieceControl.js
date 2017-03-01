function GamePieceControl() {
  this.Container_constructor();
};

var p = createjs.extend(GamePieceControl, createjs.Container);


export default createjs.promote(GamePieceControl, "Container");
