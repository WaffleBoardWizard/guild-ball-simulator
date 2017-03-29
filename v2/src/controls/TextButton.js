function TextButton(text, textColor, bgColor, fontSize) {
  this.Container_constructor();
  textColor = textColor || "white";
  bgColor = bgColor || "red";

  var textControl = new createjs.Text(text, fontSize +"px FontAwesome");
  textControl.set({
    textAlign: "center",
    textBaseline: "middle",
    color: textColor,
    x: (text.length * fontSize) / 2,
    y: fontSize / 2
  });

  let shape = new createjs.Shape();

  shape.graphics.beginFill(bgColor).drawEllipse (0, 0, text.length * fontSize, fontSize);

  this.addChild(shape, textControl);

  this.btn = shape;
};

var p = createjs.extend(TextButton, createjs.Container);

export default createjs.promote(TextButton, "Container");
