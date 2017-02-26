function pythagorean(a,b) {
	return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

function circlesIntersect(c1X,c1Y,c1Radius, c2X, c2Y, c2Radius) {
    var distanceX = c2X - c1X;
    var distanceY = c2Y - c1Y;

    var magnitude = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
     return magnitude < c1Radius + c2Radius;
}