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

  illuminateCharacter(characterName, color){
    this.getPiece(characterName).illuminate(color);
  }

  showCharacterMessage(characterName, message){
      this.getPiece(characterName).showMessage(message);
  }

  stopIlluminatingCharacter(characterName){
      this.getPiece(characterName).stopIlluminate();
  }

  updateCharacter(characterName){
    this.getPiece(characterName).updateBars();
  }

  stopIllumatingAllCharacters() {
    this.stopIlluminatingCharacters(this.characters);
  }

  stopIlluminatingCharacters(characters) {
    characters.forEach(function(character) {
      character.stopIlluminate();
    });
  }

  showInfluenceControls(characterName, maxInfluence, avaliableInfluence){
    this.getPiece(characterName).showInflunceControls(maxInfluence, avaliableInfluence);
  }

  hideInfluenceControls(characterName, maxInfluence, avaliableInfluence){
    this.getPiece(characterName).hideInfluenceControls();
  }

  createField() {
    this.field = new Controls.FieldControl(this.assets.getResult("field"));
    this.stage.addChild(this.field);
  }

  snapBallToCharacter(character) {
    this.movePiece(this.ball, character.x, character.y);
  }

  moveCharacterFromTo(characterName, fromX, fromY, toX, toY){
    createjs.Tween.get(this.getPiece(characterName), {
      loop: false
    }).to({
      x: toX * Measurements.Inch,
      y: toY  * Measurements.Inch
    },  1000, createjs.Ease.getPowInOut(4));
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
