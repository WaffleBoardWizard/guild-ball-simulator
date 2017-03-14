import Game from "./Game";
import Inputs from "./Inputs";
import AssetsLoader from './helpers/AssetsLoader';
import Measurements from './common/Measurements';
import * as Controls from './controls';
import * as States from './states';
import Q from 'q';
import FontAwesomeIcons from './common/FontAwesomeIcons';
import MathHelper from './helpers/MathHelper';
import _ from 'lodash';
import data from './mockdata/characters';
import CharacterModel from './models/CharacterModel';

export default class GuildBallGame extends Game {
  constructor(canvasId) {
    super();

    let me = this;

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
    this.activateCharacterInGroup(this.reducePiecesToId(this.getPieceByType("character")));
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
    var flaskData = this.getCharacter("Flask");
    var flaskModel = new CharacterModel(flaskData);
    this.addCharacter(flaskModel, Measurements.Inch * 8, Measurements.Inch * 16);
  }

  addCharacter(character, x, y, field) {
    let characterControl = new Controls.CharacterControl(character, this.assets.getResult(character.Name));

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



  bindInputsToPiece(piece) {
    piece.on("pressmove", function(evt) {
      this.pressMovePiece({ pieceId : piece.id, mouseX : evt.rawX, mouseY : evt.rawY});
    }, this);

    piece.on("click", function(evt) {
      this.clickPiece({ pieceId : piece.id });
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
    let otherCharacterIds = this.reducePiecesToId(this.characters.filter(x => x != character));
    let me = this;

    this.switchState(new States.SelectPiece(otherCharacterIds,
      function(otherCharacterId) {
        let otherCharacter = this.getPiece(otherCharacterId);
        this.rollDice(1).then(function(results) {
            me.snapBallToCharacter(otherCharacter);

            if(!me.checkDiceResult(results, 4))
                me.kickScatter(character.x, character.y, otherCharacter.x, otherCharacter.y);

            me.showCharacterMenu(character.id);

        }).catch(function(ex) {
          console.log(ex);
        });
      }, this));
  }

  activateCharacterInGroup(charactersIds) {
    this.switchState(new States.SelectPiece(charactersIds, this.showCharacterMenu, this));
  }

  showCharacterMenu(characterid){
    this.switchState(new States.CharacterMenu(characterid, null, this));
  }

  kickScatter(fromX, fromY, toX, toY) {
    let me = this;
    this.rollDice(2)
      .then(function(results) {
        let angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
        let direction = results[0];
        let distance = results[1];
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

    this.pieces.push(piece)
    this.bindInputsToPiece(piece);
    this.field.addChild(piece);

    this.switchState(new States.MovePiece({
      pieceId : piece.id,
      x : x,
      y : y,
      speed: 1},
      null,
      this));
  }

  movePiece(piece, x, y) {
    this.switchState(new States.MovePiece({
      pieceId : piece.id,
      x : x,
      y : y,
      speed: 1000},
      null,
      this));
  }

  rollDice(numberOfDice) {
    var me = this;
    return Q.Promise(function(resolve, reject, notify) {
      let results = [];
      for (var i = 0; i < numberOfDice; i++) {
        results.push(MathHelper.RandomNumber(1, 6));
      }
      me.switchState(new States.RollDice(results, function(success){
        resolve(results);
      }, me));
    });
  }

  snapBallToCharacter(character) {
    this.movePiece(this.ball, character.x, character.y);
  }

  getCharacter(characterName){
    return _.find(data, { Name : characterName });
  }

  //END UI Functions

  //INPUT HANDLERS
  clickPiece(params, skipAction) {
    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "Input",
        params: params,
        input:  Inputs.PIECE_CLICK,
        replaySpeed : 1
      });
    }

    this._currentState.handleInput(Inputs.PIECE_CLICK, params.pieceId);
  }

  pressMovePiece(params, skipAction) {
    console.log("Test");

    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "Input",
        params: params,
        input:  Inputs.PIECE_DRAG,
        replaySpeed : 10
      });
    }

    this._currentState.handleInput(Inputs.PIECE_DRAG, params.pieceId, { mouseX : params.mouseX, mouseY : params.mouseY});
  }

  menuButtonClick(buttonId, skipAction) {
    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "Input",
        params: buttonId,
        input:  Inputs.CLICK_MENU_BUTTON,
        replaySpeed : 1000
      });
    }

    this._currentState.handleInput(Inputs.CLICK_MENU_BUTTON, buttonId);
  }
  //END INPUT HANDLERS


}
