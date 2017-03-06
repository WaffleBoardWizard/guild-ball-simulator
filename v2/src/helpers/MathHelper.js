export default  class  MathHelper{
  static CalculateXYWithDistanceAndAngle(distance, angle) {
    var x = distance * (Math.cos((angle * Math.PI) / 180));
    var y = distance * (Math.sin((angle * Math.PI) / 180));

    return {
      x: x,
      y: y,
    }
  }
}
