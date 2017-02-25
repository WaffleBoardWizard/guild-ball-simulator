(function() {
    var initialSize = 1200;

    function FieldControl(){
        this.Container_constructor();
        this.bitmap = new createjs.Bitmap(assets.field);
        this.addChild(this.bitmap);
    };

    var p = createjs.extend(FieldControl, createjs.Container);

    p.SetScale = function(scale) {
      var scaleTimes = 0;
        scaleTimes = 1200 / scale;

      //  this.bitmap.scaleX = this.bitmap.scaleY = scaleTimes;
    }

    window.FieldControl = createjs.promote(FieldControl, "Container");
}());
