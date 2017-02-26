(function() {
  function Menu(refObject, orientation, btns, size, parent) {
    this.Container_constructor();
    this.refObject = refObject;
    this.orientation = orientation;
    this.btns = btns;
    this.size = size;
    this.menuButtons = [];
    console.log( parent.getChildIndex(refObject))
    parent.addChildAt(this, parent.getChildIndex(refObject));
  };

  var p = createjs.extend(Menu, createjs.Container);

  p.show = function() {
    for (let i = 0; i < this.btns.length; i++) {
      let btn = this.btns[i];
      let menuButton = new FAButton(btn.Icon, "white", "blue", this.size * .75);

      menuButton.x = this.refObject.x;
      menuButton.y = this.refObject.y;

      this.addChildAt(menuButton, this.refObject);

      menuButton.on("mouseover", function() {
        //  menuButton.btn.graphics.clear().beginFill("blue");
        createjs.Tween.get(menuButton, {
          scaleX: 1,
          scaleY: 1
        }).to({
          scaleX: 1.25,
          scaleY: 1.25
        }, 100, createjs.Ease.getPowInOut(4));

      });

      menuButton.on("mouseout", function() {
        createjs.Tween.get(menuButton, {
          scaleX: 1.25,
          scaleY: 1.25
        }).to({
          scaleX: 1,
          scaleY: 1
        }, 100, createjs.Ease.getPowInOut(4));
      });

      this.addChildAt(menuButton);

      let toX = 0;
      let toY = 0;

      var displayObjectBoundsWidth = this.refObject.getBounds().width;

      switch (this.orientation) {
        case "circle":
          toX = this.refObject.x - ((displayObjectBoundsWidth * 2) * Math.cos(i * (Math.PI / 4)));
          toY = this.refObject.y - ((displayObjectBoundsWidth * 2) * Math.sin(i * (Math.PI / 4)));
          break;
        case "up":
          toX = this.refObject.x;
          toY = this.refObject.y - ((displayObjectBoundsWidth * 2) * (i + 1));
          break;
        case "down":
          toX = this.refObject.x;
          toY = this.refObject.y + ((displayObjectBoundsWidth * 2) * (i + 1));
          break;
        case "left":
          toX = this.refObject.x - ((displayObjectBoundsWidth * 2) * (i + 1));
          toY = this.refObject.y;
          break;
        case "right":
          toX = this.refObject.x + ((displayObjectBoundsWidth * 2) * (i + 1));
          toY = this.refObject.y;
          break;
        default:

      }

      setTimeout(function() {
        createjs.Tween.get(menuButton, {
          loop: false
        }).to({
          x: toX,
          y: toY
        }, 1000, createjs.Ease.getPowInOut(4));
      }, 50 * i);

      this.menuButtons.push(menuButton);

      if (btn.click) {
        var me = this;
        menuButton.on("click", function() {
          if (btn.click(menuButton, me.refObject)) {
            me.hide(i);
          }
        });
      }
    }
  };

  p.hide = function(clickedIndex, quick) {
    console.log("hide!");
    let me = this;

    me.menuButtons.forEach(function(btn, index) {
      if (!quick) {
        setTimeout(function() {
          createjs.Tween.get(btn, {
            loop: false
          }).to({
            x: me.refObject.x,
            y: me.refObject.y
          }, 1000, createjs.Ease.getPowInOut(4));
        }, clickedIndex == index ? 300 : 0);
      }
      setTimeout(function() {
        me.removeChild(btn);

        var index = me.menuButtons.indexOf(btn);

        if (index > -1) {
          me.menuButtons.splice(index, 1);
        }
      }, quick ? 0 : 1000);
    });
  };
  window.Menu = createjs.promote(Menu, "Container");
}());
