import Q from 'q';
const AssetsDirectory = require.context('../assets', false);

var _AssetsToLoad = [
    'Ballista.PNG',
    "Hoist.PNG",
    "Colossus.PNG",
    "Mainspring.PNG",
    "Ratchet.PNG",
    "Hoist.PNG",
    "PinVice.png",
    "Ratchet.PNG",
    "Velocity.PNG",
    "VETVelocity.png",
    "Salvo.PNG",
    "Mother.jpeg",
    "field.jpg",
    "die.png",
    "ball.png",
    "house.png",
    "kickscatter30.png",
    "Flask.PNG",
    "Katalyst.PNG",
    "Compound.PNG",
    "Mercury.PNG",
    "Midas.PNG",
    "Naja.png",
    "Tapper.png",
    "Venin.PNG",
    "VETKatalyst.png",
    "Vitriol.png",
    "Smoke.png",
    "Calculus.PNG",
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
