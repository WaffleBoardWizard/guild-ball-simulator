import Q from 'q';
const AssetsDirectory = require.context('../assets', false);

var _AssetsToLoad = [
    'ballista.PNG',
    "Hoist.PNG",
    "colossus.PNG",
    "mainspring.PNG",
    "ratchet.PNG",
    "salvo.PNG",
    "field.jpg",
    "die.png",
    "ball.png",
    "house.png",
    "kickscatter30.png",
    "Flask.PNG",
    "Katalyst.png",
    "Compound.png",
    "Mercury.png",
    "Midas.png",
    "Naja.png",
    "Tapper.png",
    "Venin.png",
    "VETKatalyst.png",
    "Vitriol.png",
    "Smoke.png",
    "Calculus.png",
    "Goal.png"
  ];
export default {

  LoadAssets: function(onSuccess) {
    return Q.Promise(function(resolve, reject, notify) {
        var queue = new createjs.LoadQueue(true);
        _AssetsToLoad.forEach(function(asset) {
          var path = './' + asset;
          queue.loadFile({
            id: asset.split(".")[0],
            src: AssetsDirectory(path, false)});
          });
        queue.on("complete", function(){
          resolve(queue);
        }, this);
      });
    }
  }
