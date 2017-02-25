(function() {
    var initialSize = 1200;

    function FieldControl(onLoad){
        this.Container_constructor();
        var image = new Image();
        image.src = "./assets/field.jpg";
        var me = this;
        image.onload = function() {
            var image = event.target;
            me.bitmap = new createjs.Bitmap(image);
            me.addChild(me.bitmap);
            onLoad();
        };

    };

    var p = createjs.extend(FieldControl, createjs.Container);

    p.SetScale = function(scale) {
      var scaleTimes = 0;
        scaleTimes = 1200 / scale;

      //  this.bitmap.scaleX = this.bitmap.scaleY = scaleTimes;
    }

    window.FieldControl = createjs.promote(FieldControl, "Container");
}());
