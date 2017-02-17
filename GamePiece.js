
function GamePiece() {}
function Movement() {}
function Location() {}
function Node() {}

GamePiece.prototype.maxRange = null;
GamePiece.prototype.baseSize = null;
GamePiece.prototype.reach = null;
GamePiece.prototype.location = Object.create(Location.prototype);
GamePiece.prototype.movement = Object.create(Movement.prototype);
GamePiece.prototype.canvasReference = null;

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
Node.prototype.displayObjects = null;
