import Game from "./Game";
import Inputs from "./Inputs";
import AssetsLoader from './helpers/AssetsLoader';
import Measurements from './common/Measurements';
import * as Controls from './controls';
import * as States from './states';
import Q from 'q';
import FontAwesomeIcons from './common/FontAwesomeIcons';
import MathHelper from './helpers/MathHelper';

export default class GuildBallGame extends Game {
  constructor(canvasId, selectedCharacter) {
    super();

    this.actions = [];

    let me = this;
    this.selectedCharacter = selectedCharacter;
    
    AssetsLoader.LoadAssets()
      .then(function(assets) {
        me.initialize(canvasId, assets);
      })
      .catch(function(ex) {
        console.log(ex);
      });


  }
  initialize(canvasId, assets) {
    this.assets = assets;
    this.createStage(canvasId);
    this.createField();
    this.createBall();
    this.addCharacters();
    this.addTerrian();
    this.activateCharacterInGroup(this.characters);
  }

  createStage(canvasId) {
    this.stage = new createjs.Stage("demoCanvas");
    createjs.Touch.enable(this.stage, false, true);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);
  }

  createField() {
    this.field = new Controls.FieldControl(this.assets.getResult("field"));
    this.stage.addChild(this.field);
  }

  createBall() {
    this.ball = new Controls.BallControl(this.assets.getResult("ball"), this.assets.getResult("kickscatter30"));

    this.addPieceToField(this.ball, Measurements.Foot / 2, Measurements.Foot / 2);
  }

  addCharacters() {
    var ballista = {
      image: this.assets.getResult("ballista"),
      baseSize: 30 * Measurements.MM
    }
    var colossus = {
      image: this.assets.getResult("colossus"),
      baseSize: 40 * Measurements.MM
    }

    this.addCharacter(ballista, Measurements.Inch * 8, Measurements.Inch * 16);
    this.addCharacter(colossus, Measurements.Foot, Measurements.Foot / 2);
  }

  addCharacter(characterProps, x, y, field) {
    let characterControl = new Controls.CharacterControl(characterProps, field);

    this.addPieceToField(characterControl, x, y);
    this.characters.push(characterControl);
  }

  addTerrian() {
    var house = {
      image: this.assets.getResult("house"),
      height: Measurements.Inch * 4,
      width: Measurements.Inch * 4
    }

    var terrianControl = new Controls.TerrianControl(house);

    this.addPieceToField(terrianControl, Measurements.Foot, Measurements.Foot);
  }

  switchState(state) {
    this._currentState = state;
  }

  bindInputsToPiece(piece) {
    piece.on("pressmove", function(evt) {
      this.pressMovePiece(piece, evt);
    }, this);

    piece.on("click", function(evt) {
      this.clickPiece(piece, evt);
    }, this);

    piece.on("mouseup", function(evt) {}, this);

    piece.on("mousedown", function(evt) {}, this);
  }

  checkDiceResult(diceResults, goal) {
    let result = false;
    diceResults.forEach(function(d) {
      if (d >= goal)
        result = true;
    });
    return result;
  }

  kickBall(character){
    let otherCharacters = this.characters.filter(x => x != character);
    let me = this;

    this.switchState(new States.SelectPiece(otherCharacters,
      function(otherCharacter) {
        this.rollDice(1).then(function(result) {
          me.snapBallToCharacter(otherCharacter);
          if (!me.checkDiceResult(result, 4)) {
            me.kickScatter(character.x, character.y, otherCharacter.x, otherCharacter.y);
          }
          me.showCharacterMenu(character);
        }).catch(function(ex) {
          console.log(ex);
        });
      }, this));
  }

  activateCharacterInGroup(characters) {
    this.switchState(new States.SelectPiece(characters, this.showCharacterMenu, this));
  }

  kickScatter(fromX, fromY, toX, toY) {
    var me = this;

    this.rollDice(2)
      .then(function(r) {
        var angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
        var distance = r[1];
        var direction = r[0];
        me.ball.rotateScatter(angle + 90);

        if (direction > 3)
          direction++;

        let coord = MathHelper.CalculateXYWithDistanceAndAngle(distance * Measurements.Inch, (22.5 * direction) + angle - 90);

        setTimeout(function() {
          me.movePiece(me.ball, coord.x + me.ball.x, coord.y + me.ball.y);
        }, 2000, this);

      })
      .catch(function(ex) {
        console.log(ex);
      });
  }
  //UI Functions
  illuminateAllCharacters() {
    this.illuminateCharacters(this.characters);
  }

  stopIllumatingAllCharacters() {
    this.stopIlluminatingCharacters(this.characters);
  }

  illuminateCharacters(characters) {
    characters.forEach(function(character) {
      character.illuminate();
    });
  }

  stopIlluminatingCharacters(characters) {
    characters.forEach(function(character) {
      character.stopIlluminate();
    });
  }

  addPieceToField(piece, x, y) {
    piece.x = x;
    piece.y = y;

    this.bindInputsToPiece(piece);
    this.field.addChild(piece);
    this.pieces.push(piece)
  }

  movePiece(piece, toX, toY) {
    createjs.Tween.get(piece, {
      loop: false
    }).to({
      x: toX,
      y: toY
    }, 1000, createjs.Ease.getPowInOut(4));
  }

  rollDice(numberOfDice) {
    var me = this;
    return Q.Promise(function(resolve, reject, notify) {

      let dice = [];
      let results = [];
      for (var i = 0; i < numberOfDice; i++) {
        var die = new Controls.DieControl(me.assets.getResult("die"));
        die.x = i * 125;
        die.y = 0;
        me.field.addChild(die);
        dice.push(die);
        var result = die.roll(1000);
        results.push(result);
      }

      setTimeout(function() {
        resolve(results);
      }, 1000);

      setTimeout(function() {
        dice.forEach(function(die) {
          me.field.removeChild(die);
        });
      }, 4000)
    });
  }

  showCharacterMenu(character) {
    var menu = this.menuFactory(character, this);
    new Controls.MenuControl(character,
        "circle",
        menu,
        character.properties.baseSize,
        this.field)
      .show();
  }

  snapBallToCharacter(character) {
    this.movePiece(this.ball, character.x, character.y);
  }

  //END UI Functions

  //INPUT HANDLERS
  clickPiece(piece, evt) {
    this._currentState.handleInput(Inputs.PIECE_CLICK, piece, evt);
  }

  pressMovePiece(piece, evt) {
    this._currentState.handleInput(Inputs.PIECE_DRAG, piece, evt);
  }
  //END INPUT HANDLERS


}
