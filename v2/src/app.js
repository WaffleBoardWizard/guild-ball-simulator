import $ from 'jquery';
//import createjs from './lib/createjs.min.js';
import proton from './lib/proton.min.js';
import FieldControl from './controls/FieldControl';
import Measurement from './common/Measurements';
var stage, field, ball, proton;
var dragger;
var foot = 400;
var inch = foot / 12;
var assetsToLoad = [
  'ballista.png',
  "colossus.png",
  "hoist.png",
  "mainspring.png",
  "ratchet.png",
  "salvo.png",
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
    field = new FieldControl();
    stage.addChild(field);
    //createProton();
    //loadGame();
  });
}

function loadAssets(onSuccess) {
  var assetsLoaded = 0;
  assetsToLoad.forEach(function(asset) {
    var image = new Image();
    var path = './assets/' + asset;
    console.log('./assets/ballista.png')
    image.src =  path;
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

$(document).ready(init);
