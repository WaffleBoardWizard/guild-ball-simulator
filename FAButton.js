     (function() {
         function FAButton(icon, iconColor, bgColor) {
             this.Container_constructor();

             iconColor = iconColor || "white";
             bgColor = bgColor || "red";

             var uni = icon;

             var text = new createjs.Text(uni, "20px FontAwesome");

             text.set({
                 textAlign: "center",
                 textBaseline: "middle",
                 color: iconColor
             });

             let shape = new createjs.Shape();

             shape.graphics.beginFill(bgColor).drawCircle(0, 0, 10);

             this.addChild(shape, text);
             this.btn = shape;
         };

         var p = createjs.extend(FAButton, createjs.Container);

         window.FAButton = createjs.promote(FAButton, "Container");
     }());
