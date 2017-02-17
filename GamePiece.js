
function GamePiece() {}
function Movement() {}
function Location() {}
function Node() {}
//	var gamePiece = new GamePiece();
//	return gamePiece;
//}

GamePiece.prototype.maxRange = null;
GamePiece.prototype.baseSize = null;
GamePiece.prototype.reach = null;
GamePiece.prototype.location = Object.create(Location.prototype);
GamePiece.prototype.movement = Object.create(Movement.prototype);
GamePiece.prototype.canvasReference = null;
GamePiece.prototype.currentMenu = null;
GamePiece.prototype.showCurrentMenu = function() {
  this.currentMenu.show();
};

GamePiece.prototype.hideCurrentMenu = function(quick) {
  this.currentMenu.hide(null, quick);
};

Location.prototype.x = null;
Location.prototype.y = null;

Movement.prototype.status = null;
Movement.prototype.overlays = null;
Movement.prototype.nodes = null;
Movement.prototype.lastNode = Object.create(Node.prototype);
Movement.prototype.range = null;

Node.prototype.x = null;
Node.prototype.y = null;
Node.prototype.rangeUsed = null;
