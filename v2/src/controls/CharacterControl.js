import GamePieceControl from './GamePieceControl';
import MenuControl from './MenuControl';
import FontAwesomeIcons from '../common/FontAwesomeIcons';

var jogMenuButtons = [{
  Name: "Confirm",
  Icon: FontAwesomeIcons.check,
  click: function(btn, displayObject) {
    // finishNodeMovement(displayObject);
    console.log("confirm");
    return true;
  }
}, {
  Name: "Undo",
  Icon: FontAwesomeIcons.undo,
  click: function(btn, displayObject) {
    console.log("undo");
  //  undoLastMovementNode(displayObject);
    return true;
  }
}];

function CharacterControl(properties, container) {
  this.GamePieceControl_constructor();
  this.addImage(properties);
  var me = this;
  this.properties = properties;
  // this.on("click",
  // function(evt) {
  //     new MenuControl(me, "circle", jogMenuButtons, properties.baseSize, container).show();
  //   });
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


export default createjs.promote(CharacterControl, "GamePieceControl");
