export default (function(){
  var fieldWidthPixels = 1200;
  var fieldWidthFeet = 3;
  var foot = fieldWidthPixels / fieldWidthFeet;
  var inch = foot / 12;
  var mm = inch * 0.0393701;

  return {
    Foot : foot,
    Inch : inch,
    MM: mm
  };
})()
