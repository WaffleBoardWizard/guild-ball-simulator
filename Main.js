var stage;
var dragger;

var CONSTANTS = {
    RANGE_OVERLAY: 1001,
    MAX_RANGE_OVERLAY: 1002,
    NODE_OVERLAY: 1003,
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
    click: function(btn,displayObject) {
        finishNodeMovement(displayObject);     
        console.log("I was clicked");
        return true;
    }
}, {
    Name: "Undo",
    Icon: FontAwesomeIcons.undo,
    click: function(btn,displayObject) {
        undoLastMovementNode(displayObject);
        console.log("undo");
        return true;
    }
}];

var menuButtons = [{
    Name: "Jog",
    Icon: FontAwesomeIcons.arrowright,
    click: function(btn,displayObject) {
        displayObject.gamePiece.movement.status = CONSTANTS.MOVEMENT_MOVEABLE;        
        console.log("I was clicked");
        return true;
    }
}, {
    Name: "Undo",
    Icon: FontAwesomeIcons.undo,
    click: function() {
        console.log("undo");
        return true;
    }
},{
    Name: "Undo",
    Icon: FontAwesomeIcons.undo,
    click: function(btn) {
        console.log("undo");
        toggleMenu(btn, "up", menuButtons);
        return false;
    }
},
{
    Name: "Undo",
    Icon: FontAwesomeIcons.undo,
    click: function() {
        console.log("undo");
        return true;
    }
},{
    Name: "Undo",
    Icon: FontAwesomeIcons.undo,
    click: function() {
        console.log("undo");
        return true;
    }
},{
    Name: "Undo",
    Icon: FontAwesomeIcons.undo,
    click: function() {
        console.log("undo");
        return true;
    }
},{
    Name: "Undo",
    Icon: FontAwesomeIcons.undo,
    click: function() {
        console.log("undo");
        return true;
    }
},{
    Name: "Undo",
    Icon: FontAwesomeIcons.undo,
    click: function() {
        console.log("undo");
        return true;
    }
}];

var gamePieces = [];

function init() {
    // code here.
    stage = new createjs.Stage("demoCanvas");
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
        gamePiece.maxRange = 60;
        gamePiece.baseSize = 10;
        gamePiece.reach = 10;
        gamePiece.location = location;

        var hit = new createjs.Shape();
        hit.graphics.beginFill("#000").drawCircle(0, 0, 10);
        var image = new Image();
        image.src = "alc.png";
        var gamePieceGraphic = new BoardShape(gamePiece);

        gamePieceGraphic.graphics.beginFill("red").drawCircle(0, 0, 10);
        gamePieceGraphic.x = x;
        gamePieceGraphic.y = y;
        gamePieceGraphic.setBounds(x, y, 20, 20);
        gamePieceGraphic.hitArea = hit;
        gamePiece.canvasReference = gamePieceGraphic;
        gamePieces.push(gamePiece);


        gamePieceGraphic.on("dblclick",
            function(evt) {
                    gamePiece.currentMenu = Menu(evt.currentTarget, "circle", menuButtons);
                    gamePiece.showCurrentMenu();
            });

        gamePieceGraphic.on("pressup", movementEvent);
        gamePieceGraphic.on("pressmove", movementEvent);
        stage.addChild(gamePieceGraphic);
        stage.update();
    }

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    stage.update();
}

function getRangeUsed(gamePiece, evt, success) {
    var rangeUsed = 0;

    //check for direct x,y axis movement
    if (gamePiece.movement.lastNode.y == evt.stageY) {
        //no movement along the y axis, so we only care how far along the x axis the model has traveled
        if (evt.stageX > gamePiece.movement.lastNode.x) {
            rangeUsed = rangeUsed + (evt.stageX - gamePiece.movement.lastNode.x);
        } else {
            rangeUsed = rangeUsed + (gamePiece.movement.lastNode.x - evt.stageX);
        }
    } else if (gamePiece.movement.lastNode.x == evt.stageX) {
        //no movement along the x axis, so we only care how far along the y axis the model has traveled
        if (evt.stageY > gamePiece.movement.lastNode.y) {
            rangeUsed = rangeUsed + (evt.stageY - gamePiece.movement.lastNode.y);
        } else {
            rangeUsed = rangeUsed + (gamePiece.movement.lastNode.y - evt.stageY);
        }
    } else {
        //complex movement detected. Will need to use pythagorean theorem to calculate distance moved
        var xDistance = 0;
        var yDistance = 0;

        if (evt.stageY > gamePiece.movement.lastNode.y) {
            yDistance = evt.stageY - gamePiece.movement.lastNode.y;
        } else {
            yDistance = gamePiece.movement.lastNode.y - evt.stageY;
        }

        if (evt.stageX > gamePiece.movement.lastNode.x) {
            xDistance = evt.stageX - gamePiece.movement.lastNode.x;
        } else {
            xDistance = gamePiece.movement.lastNode.x - evt.stageX;
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

        var lastNode = gamePiece.movement.nodes[gamePiece.movement.nodes.length - 1];

        displayObject.x = lastNode.x;
        displayObject.y = lastNode.y;

        $.each(lastNode.displayObjects, function(index, displayObject) {
            stage.removeChild(displayObject);
        });

        gamePiece.movement.nodes.pop();

        if(gamePiece.movement.nodes.length == 0) {
            gamePiece.movement.status = CONSTANTS.MOVEMENT_MOVEABLE;
        }
        else {
      //      gamePiece.showCurrentMenu();
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
        gamePiece.movement.lastNode = null;
        gamePiece.movement.nodes = [];

        $.each(gamePiece.movement.overlays, function(index, overlay) {
            stage.removeChild(overlay.value);
        });

        gamePiece.movement.overlays = [];
        gamePiece.movement.status = CONSTANTS.MOVEMENT_UNMOVEABLE;

        stage.update();

    }
}

function releaseDragNode(evt) {
    var gamePiece = evt.currentTarget.gamePiece;

    if (gamePiece.movement.status != CONSTANTS.MOVEMENT_UNMOVEABLE) {

        gamePiece.movement.status = CONSTANTS.MOVEMENT_NODE_MOVEABLE;
        var currentNode = gamePiece.movement.nodes[gamePiece.movement.nodes.length - 1];

        var nodeLine = new createjs.Shape();
        nodeLine.graphics.beginStroke("white")
            .setStrokeStyle(2, "round")
            .moveTo(gamePiece.movement.lastNode.x, gamePiece.movement.lastNode.y)
            .lineTo(evt.currentTarget.x, evt.currentTarget.y);

        currentNode.displayObjects.push(nodeLine);

        gamePiece.movement.overlays.push({
            type: CONSTANTS.NODE_OVERLAY,
            value: nodeLine
        });
        stage.addChild(nodeLine);

        getRangeUsed(gamePiece, evt, function(rangeUsed) {

            var totalRangeUsed = 0;

            currentNode.rangeUsed = rangeUsed;

            $.each(gamePiece.movement.nodes, function(index, node) {
                totalRangeUsed = totalRangeUsed + node.rangeUsed;
            });

            gamePiece.movement.range = gamePiece.maxRange - totalRangeUsed;

            gamePiece.movement.lastNode.x = evt.currentTarget.x;
            gamePiece.movement.lastNode.y = evt.currentTarget.y;

            stage.update();
        });

        gamePiece.currentMenu = Menu(evt.currentTarget, "circle", jogMenuButtons);
        gamePiece.showCurrentMenu();
    }
}

function beginDragNode(evt) {
    var gamePiece = evt.currentTarget.gamePiece;

    if(gamePiece.currentMenu)
      gamePiece.hideCurrentMenu(true);

    if (gamePiece.movement.status != CONSTANTS.MOVEMENT_UNMOVEABLE) {
        if (gamePiece.movement.status == CONSTANTS.MOVEMENT_MOVEABLE || gamePiece.movement.status == CONSTANTS.MOVEMENT_NODE_MOVEABLE) {
            //First movement!  Add maxRange node and origin node
            var x = gamePiece.location.x;
            var y = gamePiece.location.y;

            if (gamePiece.movement.status == CONSTANTS.MOVEMENT_NODE_MOVEABLE) {
                x = gamePiece.movement.lastNode.x;
                y = gamePiece.movement.lastNode.y;
            } else {
                gamePiece.movement.range = gamePiece.maxRange;
                gamePiece.movement.lastNode = {
                    x: x,
                    y: y,
                    rangeUsed: 0
                };

                var maxRange = new createjs.Shape();
                maxRange.graphics.beginFill("Green").drawCircle(0, 0, gamePiece.baseSize + gamePiece.maxRange);
                maxRange.x = x;
                maxRange.y = y;
                maxRange.alpha = 0.2;
                gamePiece.movement.nodes = [];
                gamePiece.movement.overlays.push({
                    type: CONSTANTS.MAX_RANGE_OVERLAY,
                    value: maxRange
                });

                stage.addChild(maxRange);
            }

            gamePiece.movement.status = CONSTANTS.MOVEMENT_MOVING;

            var origin = new createjs.Shape();
            origin.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, gamePiece.baseSize);
            origin.x = x;
            origin.y = y;
            
            gamePiece.movement.nodes.push({
                x: x,
                y: y,
                displayObjects: [origin]
            });

            gamePiece.movement.overlays.push({
                type: CONSTANTS.NODE_OVERLAY,
                value: origin
            });

            stage.addChild(origin);
        } else {
            //the is not the first movement point of this piece.  Add any logic required for second movement here.

        }

        if (gamePiece.movement) {
            $.each(gamePiece.movement.overlays, function(index, overlay) {
                if (overlay.type == CONSTANTS.RANGE_OVERLAY) {
                    stage.removeChild(overlay.value);
                }
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

                    range.alpha = 0.2;
                    stage.addChild(range);
                    gamePiece.movement.overlays.push({
                        type: CONSTANTS.RANGE_OVERLAY,
                        value: range
                    });

                    gamePiece.movement.nodes[gamePiece.movement.nodes.length - 1].displayObjects.push(range);

                    stage.update();

                });
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
