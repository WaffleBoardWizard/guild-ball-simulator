function FAButton(unicode, iconColor, bgColor, size) {
  this.Container_constructor();
  iconColor = iconColor || "white";
  bgColor = bgColor || "red";

  var text = new createjs.Text(unicode, "20px FontAwesome");
  text.set({
    textAlign: "center",
    textBaseline: "middle",
    color: iconColor
  });

  let shape = new createjs.Shape();

  shape.graphics.beginFill(bgColor).drawCircle(0, 0, size / 2);

  this.addChild(shape, text);

  this.btn = shape;
};

var p = createjs.extend(FAButton, createjs.Container);

export default createjs.promote(FAButton, "Container");
