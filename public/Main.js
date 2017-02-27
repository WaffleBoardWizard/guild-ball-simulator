var stage, field, ball, proton;
var dragger;
var foot = 400;
var inch = foot / 12;
var assetsToLoad = [
  "ballista.png",
  "colossus.png",
  "hoist.png",
  "mainspring.png",
  "ratchet.png",
  "salvo.png",
  "field.jpg",
  "die.png",
  "ball.png",
  "house.png",
  "kickscatter30.png"
];

var characterImages = [
  "ballista",
  "colossus",
  "hoist",
  "mainspring",
  "ratchet",
  "salvo"
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
    console.log(displayObject);
    displayObject.gamePiece.currentMenu = null;
    finishNodeMovement(displayObject);
    console.log("I was clicked");
    return true;
  }
}, {
  Name: "Undo",
  Icon: FontAwesomeIcons.undo,
  click: function(btn, displayObject) {
    displayObject.gamePiece.currentMenu = null;

    undoLastMovementNode(displayObject);
    console.log("undo");
    return true;
  }
}];

var menuButtons = [{
  Name: "Jog",
  Icon: FontAwesomeIcons.arrowright,
  click: function(btn, displayObject) {
    displayObject.gamePiece.currentMenu = null;
    displayObject.gamePiece.movement.status = CONSTANTS.MOVEMENT_MOVEABLE;
    return true;
  }
}, {
  Name: "Kick",
  Icon: FontAwesomeIcons.arrowright,
  click: function(btn, displayObject) {
    displayObject.gamePiece.currentMenu = null;

    var diceResults = rollDice(4, function(diceResults) {
      if (checkDiceResult(diceResults, 4)) {
        console.log("success!");
        snapBallToCharacter(gamePieces[4].canvasReference, ball);
      }
    });
    return true;
  }
}];

var gamePieces = [];

function init() {
  loadAssets(function() {
    stage = new createjs.Stage("demoCanvas");
    stage.preventSelection = false;
    createjs.Touch.enable(stage, false, true);
    field = new FieldControl();
    stage.addChild(field);
    createProton();
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

  var numberOfPieces = 6;

  for (i = 0; i < numberOfPieces; i++) {
    var center = getRectangleCenter(field.boundaries.topDeploy);
    var x = center.x - (i * (2 * inch));
    var y = center.y;

    let gamePiece = new GamePiece();

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
    var gamePieceGraphic = new BoardShape(gamePiece);

    var charaterImage = assets[characterImages[i]];

    var m = new createjs.Matrix2D();
    m.translate(-inch / 2, -inch / 2);
    m.scale((inch) / charaterImage.height, (inch) / charaterImage.width);

    gamePieceGraphic.graphics.setStrokeStyle(2).beginStroke("maroon").beginBitmapFill(charaterImage, "no-repeat", m).drawCircle(0, 0, (inch / 2) - 1);
    gamePieceGraphic.x = x;
    gamePieceGraphic.y = y;
    gamePieceGraphic.setBounds(x, y, inch, inch);
    gamePieceGraphic.hitArea = hit;
    gamePiece.canvasReference = gamePieceGraphic;
    gamePieces.push(gamePiece);


    gamePieceGraphic.on("dblclick",
      function(evt) {
        console.log(gamePiece.currentMenu)
        if (gamePiece.currentMenu == null) {
          evt && evt.nativeEvent && evt.nativeEvent.preventDefault && evt.nativeEvent.preventDefault();
          field.swapChildren(evt.currentTarget, field.getChildAt(field.numChildren - 1));
          gamePiece.currentMenu = new Menu(evt.currentTarget, "circle", menuButtons, inch, field);
          gamePiece.showCurrentMenu();
        }
      });

    gamePieceGraphic.on("pressup", movementEvent);
    gamePieceGraphic.on("pressmove", movementEvent);
    field.addChild(gamePieceGraphic);
    stage.update();
  }

  ball = createBall();
  //snapBallToCharacter(gamePieces[0].canvasReference, ball);

  createTerrain();
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", tick);
}

function createBall() {
  var ball = new BallControl();
  ball.x = ball.y = inch
  field.addChild(ball);
  return ball;
}

function createTerrain() {
  var terrian = new BoardShape();
  terrian.graphics.setStrokeStyle(2).beginBitmapFill(assets.house, "no-repeat").drawRect(0, 0, assets.house.height, assets.house.width);
  terrian.x = terrian.y = foot * .75;
  field.addChild(terrian);
  return terrian;
}

function snapBallToCharacter(character, ball) {
  createjs.Tween.get(ball, {
    loop: false
  }).to({
    x: character.x - inch,
    y: character.y
  }, 1000, createjs.Ease.getPowInOut(4));
  character.hasBall = true;
}

function getRectangleCenter(rect) {
  return {
    x: (rect.x + (rect.width / 2)),
    y: (rect.y + (rect.height / 2))
  }
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
  evt && evt.nativeEvent && evt.nativeEvent.preventDefault && evt.nativeEvent.preventDefault();

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

  if (gamePiece.currentMenu) {
    gamePiece.hideCurrentMenu(true);
    gamePiece.currentMenu = null;
  }
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
        maxRange.graphics.beginFill("Green").drawCircle(0, 0, (gamePiece.baseSize / 2) + gamePiece.maxRange);
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
      origin.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, gamePiece.baseSize / 2);
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

function rollDice(numberOfDice, onFinish) {
  let results = [];
  for (var i = 0; i < numberOfDice; i++) {
    var die = new DieControl();
    die.x = i * 125;
    die.y = 0;
    field.addChild(die);
    var result = die.roll(1000);
    results.push(result);
  }

  setTimeout(function() {
    if (results.length == 1)
      results = results[0];
    onFinish(results);
  }, 1000);;
}

function checkDiceResult(diceResults, goal) {
  let result = false;
  diceResults.forEach(function(d) {
    if (d >= goal)
      result = true;
  });

  return result;
}

function createProton() {
  var canvas = $("#demoCanvas");
  var bitmap = new createjs.Bitmap("assets/smoke.png");
  bitmap.scaleX = bitmap.scaleY = .0002;
  proton = new Proton();
  emitter = new Proton.Emitter();
  emitter.rate = new Proton.Rate(new Proton.Span(0, 3), new Proton.Span(0, 0));
  emitter.addInitialize(new Proton.ImageTarget(bitmap));

  emitter.addInitialize(new Proton.Mass(1, 5));
  emitter.addInitialize(new Proton.Radius(20));
  //emitter.addInitialize(new Proton.Position(new Proton.LineZone(0, -40, canvas.width(), -40)));
  emitter.addInitialize(new Proton.Life(2, 4));
  emitter.addInitialize(new Proton.V(0, new Proton.Span(.1, .5)));

  emitter.addBehaviour(new Proton.CrossZone(new Proton.LineZone(0, canvas.height(), canvas.width(), canvas.height() + 20, 'down'), 'dead'));
  emitter.addBehaviour(new Proton.Rotate(new Proton.Span(0, 360), new Proton.Span(-.5, .5), 'add'));
  emitter.addBehaviour(new Proton.Scale(new Proton.Span(.02, .07)));
  emitter.addBehaviour(new Proton.RandomDrift(5, 0, .15));
  //emitter.addBehaviour(new Proton.Gravity(0.9));
  emitter.p.x = 410;
  emitter.p.y = 475;
  emitter.emit();
  proton.addEmitter(emitter);

  renderer = new Proton.Renderer('easel', proton, field);
  renderer.start();
}

function tick() {
  console.log("tick");
  proton.update();
  stage.update();
}

function kickScatter() {
  rollDice(2, function(r) {
      var distance = r[1];
      var direction = r[0];

      if(direction > 3)
        direction++;

      var coord = calculateXY(distance * inch, 22.5 * direction);

      createjs.Tween.get(ball, {
        loop: false
      }).to({
        x: ball.x + coord.x,
        y: ball.y + coord.y
      }, 1000, createjs.Ease.getPowInOut(4));
  });

  }

  function calculateXY(distance, angle) {
    var x = distance * (Math.cos((angle * Math.PI) / 180));
    var y = distance * (Math.sin((angle * Math.PI) / 180));

    return {
      x: x,
      y: y,
    }
  }
