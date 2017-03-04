import proton from'./lib/proton.min.js';
import CharacterControl from './controls/CharacterControl';
import FieldControl from './controls/FieldControl';
import TerrianControl from './controls/TerrianControl';
import BallControl from './controls/BallControl';
import Measurements from './common/Measurements';
import AssetsLoader from './helpers/AssetsLoader';

var stage, field, ball, assets;
var dragger;

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
  AssetsLoader.LoadAssets()
  .then(function(q){
    assets = q;
    stage = new createjs.Stage("demoCanvas");
    stage.preventSelection = false;
    createjs.Touch.enable(stage, false, true);
    field = new FieldControl(assets.getResult("field"));
    stage.addChild(field);
    addCharacters(field);
    addTerrian(field);
    addBall(field, assets.getResult("ball"));
    stage.update();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tick);
    //createProton();
    //loadGame();
  })
  .catch(function(ex){
    console.log(ex);
  });
}

function addCharacters(field){
   var ballista = {
     image : assets.getResult("ballista"),
     baseSize : 30 * Measurements.MM
   }
   var colossus = {
     image: assets.getResult("colossus"),
     baseSize : 40 * Measurements.MM
   }

   addCharacter(ballista, Measurements.Inch * 2, Measurements.Inch * 2, field);
   addCharacter(colossus, Measurements.Foot, Measurements.Foot/2, field);
}

function addCharacter(characterProps, x, y, field){
  let characterControl = new CharacterControl(characterProps, field);
  characterControl.x = x;
  characterControl.y =y;

  characterControl.on("click",
  function(evt) {
    $('.ui.basic.modal')
      .modal('show');
      characterControl.selectCharacter();
    });

  field.addChild(characterControl);
}

function addTerrian(field){
  var house = {
    image : assets.getResult("house"),
    height: Measurements.Inch * 4,
    width: Measurements.Inch * 4
  }
  var terrianControl = new TerrianControl(house);
  terrianControl.x = Measurements.Foot;
  terrianControl.y = Measurements.Foot;

  field.addChild(terrianControl);
}

function addBall(field, ballImage){
  var ball = new BallControl(ballImage);
  ball.x = Measurements.Foot / 2;
  ball.y = Measurements.Foot / 2;

  field.addChild(ball);
}

function tick() {
  stage.update();
}

$(document).ready(init);
