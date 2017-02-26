var stage, field;
var dragger;
var foot = 400;
var inch = foot / 12;

var assetsToLoad = [
  "alc.png",
  "field.jpg"
];

var assets = {};

var CONSTANTS = {
  RANGE_OVERLAY: 1001,
  MAX_RANGE_OVERLAY: 1002,
  NODE_OVERLAY: 1003,
  NODELINE_OVERLAY: 1004,
  MOVEMENT_MOVEABLE: 2001,
  MOVEMENT_MOVING: 2002,
  MOVEMENT_UNMOVEABLE: 2003,
  MOVEMENT_NODE_MOVEABLE: 2004
};
var orientationArray = ["up", "down", "left", "right", "circle", "down", "left", "right"];

var boardState = {

};

var jogMenuButtons = [{
  Name: "Confirm",
  Icon: FontAwesomeIcons.check,
  click: function(btn, displayObject) {
    finishNodeMovement(displayObject);
    console.log("I was clicked");
    return true;
  }
}, {
  Name: "Undo",
  Icon: FontAwesomeIcons.undo,
  click: function(btn, displayObject) {
    undoLastMovementNode(displayObject);
    console.log("undo");
    return true;
  }
}];

var menuButtons = [{
  Name: "Jog",
  Icon: FontAwesomeIcons.arrowright,
  click: function(btn, displayObject) {
    displayObject.gamePiece.movement.status = CONSTANTS.MOVEMENT_MOVEABLE;
    return true;
  }
}];

var gamePieces = [];

function init() {
  loadAssets(function() {
    stage = new createjs.Stage("demoCanvas");
    field = new FieldControl();
    stage.addChild(field);
    loadGame();
  });
}

function loadAssets(onSuccess) {
  var assetsLoaded = 0;
  assetsToLoad.forEach(function(asset) {
    var image = new Image();
    image.src = "./assets/" + asset;
    var me = this;
    image.onload = function() {

      var imageName = asset.split(".")[0];
      assets[imageName.toLowerCase()] = event.target;
      if (++assetsLoaded == assetsToLoad.length) {
        onSuccess();
      }
    }
  });
}

function loadGame() {
  stage.enableMouseOver();
  stage.mouseMoveOutside = true;

  var numberOfPieces = 1;

  for (i = 0; i < numberOfPieces; i++) {

    var x = 100 + (30 * (i + 1));
    var y = 100;

    var gamePiece = new GamePiece();

    var location = new Location();
    location.x = x;
    location.y = y;

    var movement = new Movement();
    movement.status = CONSTANTS.MOVEMENT_UNMOVEABLE;
    movement.nodes = [];
    movement.overlays = [];
    movement.lastNode = new Node();

    gamePiece.movement = movement;
    gamePiece.maxRange = inch * 8;
    gamePiece.baseSize = inch;
    gamePiece.reach = inch * 10;
    gamePiece.location = location;

    var hit = new createjs.Shape();
    hit.graphics.beginFill("#000").drawCircle(0, 0, inch / 2);
    var image = new Image();
    image.src = "alc.png";
    var gamePieceGraphic = new BoardShape(gamePiece);

    gamePieceGraphic.graphics.beginBitmapFill(assets.alc).drawCircle(0, 0, inch / 2);
    gamePieceGraphic.x = x;
    gamePieceGraphic.y = y;
    gamePieceGraphic.setBounds(x, y, inch, inch);
    gamePieceGraphic.hitArea = hit;
    gamePiece.canvasReference = gamePieceGraphic;
    gamePieces.push(gamePiece);


    gamePieceGraphic.on("dblclick",
      function(evt) {
        gamePiece.currentMenu = new Menu(evt.currentTarget, "circle", menuButtons, inch, field);
        gamePiece.showCurrentMenu();
      });

    gamePieceGraphic.on("tap",
      function(evt) {
        gamePiece.currentMenu = new Menu(evt.currentTarget, "circle", menuButtons, inch, field);
        gamePiece.showCurrentMenu();
      });
      
    gamePieceGraphic.on("pressup", movementEvent);
    gamePieceGraphic.on("pressmove", movementEvent);
    field.addChild(gamePieceGraphic);
    stage.update();
  }

  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", stage);
  stage.update();
}

function getRangeUsed(gamePiece, evt, success) {
  var rangeUsed = 0;
  var lastNode = gamePiece.movement.getLastNode();


  //check for direct x,y axis movement
  if (lastNode.y == evt.stageY) {
    //no movement along the y axis, so we only care how far along the x axis the model has traveled
    if (evt.stageX > lastNode.x) {
      rangeUsed = rangeUsed + (evt.stageX - lastNode.x);
    } else {
      rangeUsed = rangeUsed + (lastNode.x - evt.stageX);
    }
  } else if (lastNode.x == evt.stageX) {
    //no movement along the x axis, so we only care how far along the y axis the model has traveled
    if (evt.stageY > lastNode.y) {
      rangeUsed = rangeUsed + (evt.stageY - lastNode.y);
    } else {
      rangeUsed = rangeUsed + (lastNode.y - evt.stageY);
    }
  } else {
    //complex movement detected. Will need to use pythagorean theorem to calculate distance moved
    var xDistance = 0;
    var yDistance = 0;

    if (evt.stageY > lastNode.y) {
      yDistance = evt.stageY - lastNode.y;
    } else {
      yDistance = lastNode.y - evt.stageY;
    }

    if (evt.stageX > lastNode.x) {
      xDistance = evt.stageX - lastNode.x;
    } else {
      xDistance = lastNode.x - evt.stageX;
    }

    rangeUsed = pythagorean(xDistance, yDistance);
  }

  success(rangeUsed);
}

function movementEvent(evt) {

  if (evt.type == "pressmove") {
    beginDragNode(evt);
  } else if (evt.type == "pressup") {
    releaseDragNode(evt);
  }

  stage.update();
}

function undoLastMovementNode(displayObject) {
  var gamePiece = displayObject.gamePiece;

  if (gamePiece.movement.status == CONSTANTS.MOVEMENT_NODE_MOVEABLE) {

    var nodeToRemove = gamePiece.movement.nodes[gamePiece.movement.nodes.length - 2];

    displayObject.x = nodeToRemove.x;
    displayObject.y = nodeToRemove.y;

    nodeToRemove.removeDisplayObjects(field);

    gamePiece.movement.removeLastNode();
    gamePiece.movement.removeLastNode();

    var totalRangeUsed = 0;

    $.each(gamePiece.movement.nodes, function(index, node) {
      totalRangeUsed = totalRangeUsed + node.rangeUsed;
    });

    gamePiece.movement.range = gamePiece.maxRange - totalRangeUsed;

    if (gamePiece.movement.nodes.length == 0) {
      gamePiece.movement.status = CONSTANTS.MOVEMENT_MOVEABLE;
    } else {
      gamePiece.showCurrentMenu();
    }

    stage.update();
  }
}

function finishNodeMovement(displayObject) {
  var gamePiece = displayObject.gamePiece;

  if (gamePiece.movement.status == CONSTANTS.MOVEMENT_NODE_MOVEABLE) {
    //accept current movement!
    gamePiece.location.x = displayObject.x;
    gamePiece.location.y = displayObject.y;

    gamePiece.movement.status = CONSTANTS.MOVEMENT_MOVEABLE;

    $.each(gamePiece.movement.nodes, function(index, node) {
      $.each(node.displayObjects, function(index, displayObject) {
        field.removeChild(displayObject.value);
      });
    });

    $.each(gamePiece.movement.overlays, function(index, node) {
      field.removeChild(node.value);
    });

    gamePiece.movement.nodes = [];
    gamePiece.movement.overlays = [];
    gamePiece.movement.status = CONSTANTS.MOVEMENT_UNMOVEABLE;

    stage.update();

  }
}

function releaseDragNode(evt) {
  var gamePiece = evt.currentTarget.gamePiece;

  if (gamePiece.movement.status != CONSTANTS.MOVEMENT_UNMOVEABLE) {

    gamePiece.movement.status = CONSTANTS.MOVEMENT_NODE_MOVEABLE;
    var lastNode = gamePiece.movement.getLastNode();

    var nodeLine = new createjs.Shape();
    nodeLine.graphics.beginStroke("white")
      .setStrokeStyle(2, "round")
      .moveTo(lastNode.x, lastNode.y)
      .lineTo(evt.currentTarget.x, evt.currentTarget.y);

    lastNode.displayObjects.push({
      type: CONSTANTS.NODELINE_OVERLAY,
      value: nodeLine
    });

    field.addChild(nodeLine);
    //field.addChild(nodeLine, stage.children.length - 2);

    getRangeUsed(gamePiece, evt, function(rangeUsed) {

      var totalRangeUsed = rangeUsed;

      $.each(gamePiece.movement.nodes, function(index, node) {
        totalRangeUsed = totalRangeUsed + node.rangeUsed;
      });

      gamePiece.movement.range = gamePiece.maxRange - totalRangeUsed;

      var currentNode = new Node();
      currentNode.rangeUsed = rangeUsed;
      currentNode.x = evt.currentTarget.x;
      currentNode.y = evt.currentTarget.y;
      currentNode.displayObjects = [];

      gamePiece.movement.nodes.push(currentNode);

      stage.update();
    });

    gamePiece.currentMenu = new Menu(evt.currentTarget, "circle", jogMenuButtons, inch, field);
    gamePiece.showCurrentMenu();
  }
}

function beginDragNode(evt) {
  var gamePiece = evt.currentTarget.gamePiece;

  if (gamePiece.currentMenu)
    gamePiece.hideCurrentMenu(true);

  if (gamePiece.movement.status != CONSTANTS.MOVEMENT_UNMOVEABLE) {
    if (gamePiece.movement.status == CONSTANTS.MOVEMENT_MOVEABLE || gamePiece.movement.status == CONSTANTS.MOVEMENT_NODE_MOVEABLE) {
      //First movement!  Add maxRange node and origin node
      var x = gamePiece.location.x;
      var y = gamePiece.location.y;


      if (gamePiece.movement.status == CONSTANTS.MOVEMENT_NODE_MOVEABLE) {
        x = gamePiece.movement.getLastNode().x;
        y = gamePiece.movement.getLastNode().y;
      } else {
        gamePiece.movement.range = gamePiece.maxRange;

        var maxRange = new createjs.Shape();
        maxRange.graphics.beginFill("Green").drawCircle(0, 0, gamePiece.baseSize + gamePiece.maxRange);
        maxRange.x = x;
        maxRange.y = y;
        maxRange.alpha = 0.5;
        gamePiece.movement.nodes = [];
        gamePiece.movement.overlays.push({
          type: CONSTANTS.MAX_RANGE_OVERLAY,
          value: maxRange
        });

        field.addChild(maxRange, gamePiece.canvasReference);
      }

      var origin = new createjs.Shape();
      origin.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, gamePiece.baseSize);
      origin.x = x;
      origin.y = y;

      //if (gamePiece.movement.status == CONSTANTS.MOVEMENT_MOVEABLE) {
      var node = new Node();
      node.x = x;
      node.y = y;
      node.displayObjects = [{
        type: CONSTANTS.NODE_OVERLAY,
        value: origin
      }];

      gamePiece.movement.nodes.push(node);
      // }

      gamePiece.movement.status = CONSTANTS.MOVEMENT_MOVING;

      field.addChild(origin, gamePiece.canvasReference);

    } else {
      //the is not the first movement point of this piece.  Add any logic required for second movement here.

    }

    if (gamePiece.movement) {
      $.each(gamePiece.movement.nodes, function(index, node) {
        $.each(node.displayObjects, function(index, displayObject) {
          if (displayObject.type == CONSTANTS.RANGE_OVERLAY) {
            field.removeChild(displayObject.value);
          }
        });
      });
    }

    getRangeUsed(gamePiece, evt, function(rangeUsed) {

      if ((gamePiece.movement.range - rangeUsed) > 0) {

        detectCollision(evt, gamePieces, function(collision) {

          var range = new createjs.Shape();
          range.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, gamePiece.movement.range - rangeUsed + gamePiece.baseSize);

          if (collision) {
            range.x = evt.currentTarget.x;
            range.y = evt.currentTarget.y;
          } else {
            evt.currentTarget.y = evt.stageY;
            evt.currentTarget.x = evt.stageX;
            range.x = evt.stageX;
            range.y = evt.stageY;
          }

          range.alpha = 0.5;
          field.addChild(range, gamePiece.canvasReference);

          gamePiece.movement.getLastNode().displayObjects.push({
            type: CONSTANTS.RANGE_OVERLAY,
            value: range
          });

          stage.update();

        });
      } else {
        console.log("No Range Left")
      }
      // make sure to redraw the stage to show the change:
    });
  }
}

function detectCollision(evt, gamePieces, success) {
  var result = false;

  $.each(gamePieces, function(index, gamePiece) {
    if (gamePiece.canvasReference != evt.currentTarget) {
      collision = circlesIntersect(gamePiece.canvasReference.x, gamePiece.canvasReference.y, 10, evt.stageX, evt.stageY, 10);

      if (collision) {
        result = true;
      }
    }
  });

  success(result);
}
