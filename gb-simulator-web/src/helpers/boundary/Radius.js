import Boundary from "./Boundary";

export default class Radius extends Boundary{
  constructor(startX, startY, radius, pieceRadius){
    super("Radius");
    this.startX = startX;
    this.startY = startY;
    this.radius = radius + pieceRadius;

    this.pieceRadius = pieceRadius;
  }

  InBoundary(x,y){
    return ( this.pythagorean(Math.abs(this.startX -x), Math.abs(this.startY - y)) + this.pieceRadius < this.radius);
  }

  pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }

}
