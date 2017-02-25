
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

Movement.prototype.getLastNode = function() {
	if(this.nodes) {
		return this.nodes[this.nodes.length -1];
	}
}

Movement.prototype.removeLastNode = function() {
	if(this.nodes) {
		this.nodes.pop();
	}
}

Node.prototype.x = null;
Node.prototype.y = null;
Node.prototype.rangeUsed = null;
Node.prototype.displayObjects = null;

Node.prototype.removeDisplayObjects = function(stage) {
	 $.each(this.displayObjects, function(index, displayObject) {
            stage.removeChild(displayObject.value);
        });
}