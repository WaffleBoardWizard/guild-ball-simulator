(function() {
    var initialSize = 1200;

    function FieldControl(){
        this.Container_constructor();
        this.bitmap = new createjs.Bitmap(assets.field);
        this.addChild(this.bitmap);

        this.drawField();
    };

    var p = createjs.extend(FieldControl, createjs.Container);

    p.SetScale = function(scale) {
      var scaleTimes = 0;
        scaleTimes = 1200 / scale;

      //  this.bitmap.scaleX = this.bitmap.scaleY = scaleTimes;
    }

    p.boundaries = {
      topGoalSide : null,
      topGoalArea : null,
      topGoal : null,
      topDeploy: null,
      topMidfield: null,
      bottomDeploy : null,
      bottomMidfield : null,
      bottomGoal : null,
      bottomGoalSide : null,
      bottomGoalArea : null,
      center : null
    };
    p.drawRect = function(x , y, height, width, color){
      var rect = new createjs.Shape();
      rect.graphics.beginFill(color).drawRect(x, y, height, width);
      rect.alpha = .5;
      this.addChild(rect);

      return rect;
    }

    p.drawCircle = function(x, y, radius, color){
      var circle = new createjs.Shape();
      circle.graphics.beginFill(color).drawCircle(x, y, radius);
      circle.alpha = .5;
      this.addChild(circle);

      return circle;
    }

    p.drawField = function() {
        this.boundaries.topGoalSide = this.drawRect(0, 0, foot * 3, inch * 6,"pink");
        this.boundaries.topGoalArea = this.drawCircle((foot * 3) / 2, 0, inch * 5, "red");
        this.boundaries.topGoal = this.drawCircle((foot * 3) / 2, 5 * inch, inch, "blue");
        this.boundaries.topDeploy = this.drawRect(0, inch * 6, foot * 3, inch * 4, "purple");
        this.boundaries.topMidfield = this.drawRect(0, inch * 10, foot * 3, inch * 8, "green");
        this.boundaries.bottomMidfield = this.drawRect(0, inch * 18, foot * 3, inch * 8, "green");
        this.boundaries.bottomDeploy = this.drawRect(0, inch * 26, foot * 3, inch * 4, "circle");
        this.boundaries.bottomGoalSide = this.drawRect(0, inch * 30, foot * 3, inch * 6, "pink");
        this.boundaries.bottomGoalArea = this.drawCircle((foot * 3) / 2, foot * 3, inch * 5, "red");
        this.boundaries.bottomGoal = this.drawCircle((foot * 3) / 2, (foot * 3) - (5 * inch), inch, "blue");
        this.boundaries.center = this.drawCircle((foot * 3) / 2, (foot * 3) / 2, inch * 3, "brown");
    }

    window.FieldControl = createjs.promote(FieldControl, "Container");
}());
