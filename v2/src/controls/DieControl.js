
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

    this.addChild(this.sprite);
  };

  var p = createjs.extend(DieControl, createjs.Container);

  p.results = [];
  p.sprite = null;


  p.roll = function(transitionTime) {
    var result = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
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
          }
        }, 100 * i)
      }

    return result;
  };

  p.getLatestResult = function() {
    return this.results[this.results.length - 1];
  }

  p.clearResults = function() {
    this.results = [];
  };


export default createjs.promote(DieControl, "Container");
