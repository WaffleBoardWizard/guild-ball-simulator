var GamePieceControl = require("GamePieceControl");

function CharacterControl() {
  this.CharacterControl_constructor();
};

var p = createjs.extend(CharacterControl, GamePieceControl);

export default createjs.promote(CharacterControl, "Container");
