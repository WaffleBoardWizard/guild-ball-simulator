import $ from 'jquery';
import proton from'./lib/proton.min.js';
import CharacterControl from './controls/CharacterControl';
import FieldControl from './controls/FieldControl';
import Measurements from './common/Measurements';
const AssetsDirectory = require.context('./assets', false);

var stage, field, ball;
var dragger;
var foot = 400;
var inch = foot / 12;
var assetsToLoad = [
  'ballista.PNG',
  "hoist.PNG",
  "colossus.PNG",
  "mainspring.PNG",
  "ratchet.PNG",
  "salvo.PNG",
  "field.jpg",
  "die.png",
  "ball.png",
  "house.png"
];

var characterImages = [
  "ballista",
  "colossus",
  "hoist",
  "mainspring",
  "ratchet",
  "salvo"
];

var assets = {};

function init(){
  loadAssets(function() {
    stage = new createjs.Stage("demoCanvas");
    stage.preventSelection = false;
    createjs.Touch.enable(stage, false, true);
    field = new FieldControl(assets.field);
    stage.addChild(field);
    addCharacters(field);
    stage.update();
    //createProton();
    //loadGame();
  });
}


function loadAssets(onSuccess) {
  var assetsLoaded = 0;
  assetsToLoad.forEach(function(asset) {
    var image = new Image();
    var path = './' + asset;
    image.src =  AssetsDirectory(path, false);
    var me = this;
    image.onload = function() {
      var imageName = asset.split(".")[0];
      assets[imageName.toLowerCase()] = event.target;
      if (++assetsLoaded == assetsToLoad.length) {
        onSuccess();
      }
    }
  });
}

function addCharacters(field){
   var ballista = {
     image : assets.ballista,
     baseSize : Measurements.Inch
   }
   var characterControl = new CharacterControl(ballista);
   characterControl.x = inch;
   characterControl.y = inch;

   field.addChild(characterControl);
}
$(document).ready(init);
