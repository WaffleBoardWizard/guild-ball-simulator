import Boundary from "./Boundary";

export default class Box extends Boundary{
  constructor(minX, maxX, minY, maxY){
    super("Box");
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.maxY = maxY;
  }

  InBoundary(x,y){
    return x >= this.minX
          && x <= this.maxX
          && y >= this.minY
          && y <= this.maxY;
  }
}
