import Game from "./Game";
import Inputs from "./Inputs";
import AssetsLoader from './helpers/AssetsLoader';
import Measurements from './common/Measurements';
import * as Controls from './controls';
import Q from 'q';
import FontAwesomeIcons from './common/FontAwesomeIcons';
import _ from 'lodash';

export default class GameBoard extends Game {
  constructor(canvasId, events) {
    super();
    let me = this;
    this.goals = [];
    this.ball = null;
    this.field = null;
    this.awayGoal = null;
    this.homeGoal = null;
    this.characters = [];
  }

  initialize(canvasId, assets) {
    let me = this;
    return Q.Promise(function(resolve, reject, notify) {

      AssetsLoader.LoadAssets()
        .then(function(assets) {
          me.assets = assets;
          me.createStage(canvasId);
          me.createField();
          me.createBall();
          me.addTerrian();
          me.addGoals();
          resolve();
        })
        .catch(function(ex) {
          console.log(ex);
          reject(ex);
        });
    });
  }

  createBall() {
    this.ball = new Controls.BallControl(this.assets.getResult("ball"));
    this.addPieceToField(this.ball, Measurements.Foot / 2, Measurements.Foot / 2);
  }

  addCharacter(character, x, y) {
    let characterControl = new Controls.CharacterControl(character, this.assets.getResult(character.Name.replace(" ", "")));
    this.addPieceToField(characterControl, x * Measurements.Inch, y * Measurements.Inch);
    this.characters.push(characterControl);
  }

  addTerrian() {
    var house = {
      image: this.assets.getResult("house"),
      height: Measurements.Inch * 4,
      width: Measurements.Inch * 4
    }
    var terrianControl = new Controls.TerrianControl(house);
    this.addPieceToField(terrianControl, Measurements.Foot * 2, Measurements.Foot * 2);
  }

  addGoals() {
    this.awayGoal = new Controls.GoalControl(this.assets.getResult("Goal"));
    this.addPieceToField(this.awayGoal, (Measurements.Foot * 3) / 2, 5 * Measurements.Inch, Measurements.Inch);
    this.goals.push(this.awayGoal);

    this.homeGoal = new Controls.GoalControl(this.assets.getResult("Goal"));
    this.addPieceToField(this.homeGoal, (Measurements.Foot * 3) / 2, (Measurements.Foot * 3) - (5 * Measurements.Inch), Measurements.Inch);
    this.goals.push(this.homeGoal);
  }

  //UI Functions
  illuminateAllCharacters() {
    this.illuminateCharacters(this.characters);
  }

  illuminateCharacter(characterName, color) {
    this.getPiece(characterName).illuminate(color);
  }

  showCharacterMessage(characterName, message) {
    this.getPiece(characterName).showMessage(message);
  }

  stopIlluminatingCharacter(characterName) {
    this.getPiece(characterName).stopIlluminate();
  }

  updateCharacter(characterName) {
    let piece = this.getPiece(characterName)
    if(piece)
      piece.update();
  }

  stopIllumatingAllCharacters() {
    this.stopIlluminatingCharacters(this.characters);
  }

  stopIlluminatingCharacters(characters) {
    characters.forEach(function(character) {
      character.stopIlluminate();
    });
  }

  showInfluenceControls(characterName, maxInfluence, avaliableInfluence) {
    this.getPiece(characterName).showInflunceControls(maxInfluence, avaliableInfluence);
  }

  hideInfluenceControls(characterName, maxInfluence, avaliableInfluence) {
    this.getPiece(characterName).hideInfluenceControls();
  }

  createField() {
    this.field = new Controls.FieldControl(this.assets.getResult("field"));
    this.stage.addChild(this.field);
  }

  snapBallToCharacter(character) {
    let piece = this.getPiece(character.Name);
    this.ball.x = piece.x;
    this.ball.y = piece.y + Measurements.Inch;
  }

  getBallCoordinates() {
    return {
      x: this.ball.x / Measurements.Inch,
      y: this.ball.y / Measurements.Inch
    }
  }

  allowBallToMove(characterName, boundaries) {
    let me = this;
    let character = this.getPiece(characterName);
    let pressMoveListener = this.ball.on("pressmove", onMove, this);
    let clickListener = this.ball.on("click", onClick, this);


    function onMove(evt) {
      if(!boundaries
        || _.find(boundaries, x => x.InBoundary((evt.rawX) / Measurements.Inch, (evt.rawY) / Measurements.Inch))){
          this.ball.x = evt.rawX;
          this.ball.y = evt.rawY;

          let angle = Math.atan2(this.ball.y - character.y, this.ball.x - character.x) * 180 / Math.PI;
          this.ball.removeScatter();
          this.ball.drawScatter(angle);
        }
    };

    function onClick(evt) {
    };

    onClick.bind(this)();

    return function() {
      me.ball.off("pressmove", pressMoveListener);
      me.ball.off("click", clickListener);
    }
  }

  moveBall(x, y, instant) {
    if (instant) {
      this.ball.x = x * Measurements.Inch;
      this.ball.y = y * Measurements.Inch;
    } else {
      createjs.Tween.get(this.ball, {
        loop: false
      }).to({
        x: x * Measurements.Inch,
        y: y * Measurements.Inch
      }, 1000, createjs.Ease.getPowInOut(4));
    }
  }

  moveCharacterFromTo(characterName, fromX, fromY, toX, toY, instant) {
    if (instant) {
      let character = this.getPiece(characterName);
      character.x = toX * Measurements.Inch;
      character.y = toY * Measurements.Inch;
    } else {
      createjs.Tween.get(this.getPiece(characterName), {
        loop: false
      }).to({
        x: toX * Measurements.Inch,
        y: toY * Measurements.Inch
      }, 500, createjs.Ease.getPowInOut(4));
    }
  }

  removeCharacterPieces() {
    this.getPieceByType("character")
      .forEach(c => {
        _.remove(this.pieces, {
          id: c.id
        });
        this.field.removeChild(c)
      }, this);
  }



  //END UI Functions
}
