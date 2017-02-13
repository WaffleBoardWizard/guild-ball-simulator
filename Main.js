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

//var gamePiece = {
//      maxRange : 60,
//      baseSize : 10,
//      reach: 10,
//      location : {
//            x : 100,
//            y : 100
//      },
//      overlays: [],
//      movement: {
//            status : CONSTANTS.MOVEMENT_MOVEABLE,
//            overlays : [],
//            nodes : [],
//            lastNode : { x: 100, y: 100, rangeUsed : 0},
//            range: null
//      },
//      canvasReference : null,
//};


var menuButtons = [{
        Name: "Jog",
        Icon: FontAwesomeIcons.arrowright,
        click: function() {
            console.log("I was clicked");
            return true;
        }
    },
    {
        Name: "Undo",
        Icon: FontAwesomeIcons.undo,
        click: function() {
            console.log("undo");
            return true;
        }
    }
];

var gamePieces = [];

function init() {
    // code here.
    stage = new createjs.Stage("demoCanvas");
    stage.enableMouseOver();
    stage.mouseMoveOutside = true;
    var numberOfPieces = 5;

    for (i = 0; i < numberOfPieces; i++) {

        var x = 100 + (30 * (i + 1));
        var y = 100;

        var gamePiece = new GamePiece();

        var location = new Location();
        location.x = x;
        location.y = y;

        var movement = new Movement();
        movement.status = CONSTANTS.MOVEMENT_MOVEABLE;
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
        var gamePieceGraphic = new createjs.Shape();

        gamePieceGraphic.graphics.beginFill("red").drawCircle(0, 0, 10);
        gamePieceGraphic.x = x;
        gamePieceGraphic.y = y;
        gamePieceGraphic.hitArea = hit;
        gamePiece.canvasReference = gamePieceGraphic;
        gamePieces.push(gamePiece);


        gamePieceGraphic.on("click",
            function(evt) {
                toggleMenu(evt, "circle", menuButtons);
            });

        gamePieceGraphic.on("dblclick", movementEvent);
        gamePieceGraphic.on("pressup", movementEvent);
        gamePieceGraphic.on("pressmove", movementEvent);
        stage.addChild(gamePieceGraphic);
        stage.update();
    }
    
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
    stage.update();
}

function getGamePieceForEvent(evt, success) {
    $.each(gamePieces, function(key, gamePiece) {
        if (gamePiece.canvasReference == evt.currentTarget) {
            success(gamePiece);
        }
    });
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
    } else if (evt.type == "dblclick") {
        finishNodeMovement(evt);
    }

    stage.update();
}

function finishNodeMovement(evt) {
    getGamePieceForEvent(evt, function(gamePiece) {
        if (gamePiece.movement.status == CONSTANTS.MOVEMENT_NODE_MOVEABLE) {
            //accept current movement!
            gamePiece.location.x = evt.currentTarget.x;
            gamePiece.location.y = evt.currentTarget.y;

            gamePiece.movement.status = CONSTANTS.MOVEMENT_MOVEABLE;
            gamePiece.movement.lastNode = null;
            gamePiece.movement.nodes = [];

            $.each(gamePiece.movement.overlays, function(index, overlay) {
                stage.removeChild(overlay.value);
            });

            gamePiece.movement.overlays = [];

            stage.update();

        }
    });
}

function releaseDragNode(evt) {
    getGamePieceForEvent(evt, function(gamePiece) {

        gamePiece.movement.status = CONSTANTS.MOVEMENT_NODE_MOVEABLE;

        var nodeLine = new createjs.Shape();
        nodeLine.graphics.beginStroke("white")
            .setStrokeStyle(2, "round")
            .moveTo(gamePiece.movement.lastNode.x, gamePiece.movement.lastNode.y)
            .lineTo(evt.currentTarget.x, evt.currentTarget.y);

        gamePiece.movement.overlays.push({
            type: CONSTANTS.NODE_OVERLAY,
            value: nodeLine
        });
        stage.addChild(nodeLine);

        getRangeUsed(gamePiece, evt, function(rangeUsed) {

            var totalRangeUsed = 0;

            gamePiece.movement.nodes.push({
                x: evt.currentTarget.x,
                y: evt.currentTarget.y,
                rangeUsed: rangeUsed
            })

            $.each(gamePiece.movement.nodes, function(index, node) {
                totalRangeUsed = totalRangeUsed + node.rangeUsed;
            });

            gamePiece.movement.range = gamePiece.maxRange - totalRangeUsed;

            gamePiece.movement.lastNode.x = evt.currentTarget.x;
            gamePiece.movement.lastNode.y = evt.currentTarget.y;

            stage.update();
        });

    });
}

function beginDragNode(evt) {
    getGamePieceForEvent(evt, function(gamePiece) {
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


                        stage.update();

                    });
                }

                // make sure to redraw the stage to show the change:
            });
        }
    });
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

function toggleMenu(evt, orientation, btns) {
    let menuButtons = [];

    getGamePieceForEvent(evt, function(piece) {

        function hide(clickedIndex) {
            menuButtons.forEach(function(btn, index) {
                setTimeout(function() {
                    createjs.Tween.get(btn, {
                        loop: false
                    }).to({
                        x: piece.canvasReference.x,
                        y: piece.canvasReference.y
                    }, 1000, createjs.Ease.getPowInOut(4));
                }, clickedIndex == index ? 300 : 0);
            });
        };



        for (let i = 0; i < btns.length; i++) {
            let btn = btns[i];
            let menuButton = new FAButton(btn.Icon, "white", "blue");;

            menuButton.x = piece.canvasReference.x;
            menuButton.y = piece.canvasReference.y;

            stage.addChild(menuButton);

            menuButton.on("mouseover", function() {
                //  menuButton.btn.graphics.clear().beginFill("blue");
                createjs.Tween.get(menuButton, {
                    scaleX: 1,
                    scaleY: 1
                }).to({
                    scaleX: 1.25,
                    scaleY: 1.25
                }, 100, createjs.Ease.getPowInOut(4));

            });

            menuButton.on("mouseout", function() {
                //menuButton.btn.graphics.clear().beginFill("red");
                createjs.Tween.get(menuButton, {
                    scaleX: 1.25,
                    scaleY: 1.25
                }).to({
                    scaleX: 1,
                    scaleY: 1
                }, 100, createjs.Ease.getPowInOut(4));
            });

            stage.addChild(menuButton);

            let toX = 0;
            let toY = 0;
            switch (orientation) {
                case "circle":
                    toX = piece.canvasReference.x - (30 * Math.cos(i * (Math.PI / 4)));
                    toY = piece.canvasReference.y - (30 * Math.sin(i * (Math.PI / 4)));
                    break;
                case "up":
                    toX = piece.canvasReference.x;
                    toY = piece.canvasReference.y - (15 * (i + 1));
                    break;
                case "down":
                    toX = piece.canvasReference.x;
                    toY = piece.canvasReference.y + (15 * (i + 1));
                    break;
                case "left":
                    toX = piece.canvasReference.x - (15 * (i + 1));
                    toY = piece.canvasReference.y;
                    break;
                case "right":
                    toX = piece.canvasReference.x + (15 * (i + 1));
                    toY = piece.canvasReference.y;
                    break;
                default:

            }

            stage.setChildIndex(menuButton, 0);

            setTimeout(function() {
                createjs.Tween.get(menuButton, {
                    loop: false
                }).to({
                    x: toX,
                    y: toY
                }, 1000, createjs.Ease.getPowInOut(4));
            }, 50 * i);


            menuButtons.push(menuButton);
            gamePieces.push(menuButton);

            menuButton.canvasReference = menuButton;
            menuButton.on("click", function() {
                if (btn.click()) {
                    hide(i);
                }
                //hide(i);
                // $(window).on("mousemove", function(){
                //   beginDragNode(evt);
                // });
            });
        }

    });
}
