
function DieControl(DIE_IMAGE) {
    this.Container_constructor();
    let spriteSheet = new createjs.SpriteSheet({
      framerate: 30,
      "images": [DIE_IMAGE],
      "frames": {
        "regX":0,
        "height": DIE_IMAGE.height,
        "regY": 0,
        "width": DIE_IMAGE.width / 6
      },
      // define two animations, run (loops, 1.5x speed) and jump (returns to run):
      "animations": {
        "roll": [1, 6, "roll", .5]
      }
    });

    this.sprite = new createjs.Sprite(spriteSheet);
    //this.regY = this.regX = (DIE_IMAGE.width / 2);

    this.addChild(this.sprite);
  };

  var p = createjs.extend(DieControl, createjs.Container);

  p.results = [];
  p.sprite = null;
  p.illuminateCircle = null;

  p.roll = function(result, transitionTime, highlight) {
    let me = this;
    let iterations = transitionTime / 100;
    this.results.push(result);

      for(let i = 0; i < iterations; i++){
        setTimeout(function(){
          let random = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
          me.sprite.gotoAndStop(random - 1);
          if(i == iterations - 1){
            me.sprite.stop();
            me.sprite.gotoAndStop(result - 1);
            if(highlight)
              me.highlight();
          }
        }, 100 * i)
      }
  };

  p.highlight = function() {
    // this.illuminateCircle = new createjs.Shape();
    // this.illuminateCircle.graphics.beginFill("blue").drawRect(0, 0, 100, 100)
    // this.illuminateCircle.alpha = .5;
    // this.addChildAt(this.illuminateCircle, this.sprite);
    // var me = this;
    createjs.Tween.get(this, {
      loop: true
    }).to({
      scaleX: 1.5,
      scaleY: 1.5
    }, 1000, createjs.Ease.getPowInOut(4)).to({
      scaleX: 1,
      scaleY: 1
    }, 1000, createjs.Ease.getPowInOut(4));
  }

  p.getLatestResult = function() {
    return this.results[this.results.length - 1];
  }

  p.clearResults = function() {
    this.results = [];
  };


export default createjs.promote(DieControl, "Container");
