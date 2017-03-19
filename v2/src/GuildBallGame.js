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
import vex from 'vex-js';

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
    vex.registerPlugin(require('vex-dialog'))
    vex.defaultOptions.className = 'vex-theme-os';

    this.assets = assets;
    this.createStage(canvasId);
    this.createField();
    this.createBall();
    this.addCharacters();
    this.addTerrian();
    this.saveCharacterData();
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
    data.forEach(function(c, i) {
      var model = new CharacterModel(c);
      this.addCharacter(model, Measurements.Inch * (i + 1) * 3, Measurements.Inch * 12);
    }, this);
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

    this.addPieceToField(terrianControl, Measurements.Foot * 2, Measurements.Foot * 2);
  }



  bindInputsToPiece(piece) {
    piece.on("pressmove", function(evt) {
      this.pressMovePiece({
        pieceId: piece.id,
        mouseX: evt.rawX,
        mouseY: evt.rawY
      });
    }, this);

    piece.on("click", function(evt) {
      this.clickPiece({
        pieceId: piece.id
      });
    }, this);

    piece.on("mouseup", function(evt) {}, this);

    piece.on("mousedown", function(evt) {}, this);
  }

  checkDiceResult(diceResults, goal) {
    let result = 0;
    diceResults.forEach(function(d) {
      if (d >= goal)
        result++;
    });
    return result;
  }

  kickBall(character) {
    let otherCharacterIds = this.reducePiecesToId(this.characters.filter(x => x != character));
    let me = this;

    this.switchState(new States.SelectPiece(otherCharacterIds,
      function(otherCharacterId) {
        let otherCharacter = this.getPiece(otherCharacterId);
        this.rollDice(character.character.KickDice, 4).then(function(results) {
          me.snapBallToCharacter(otherCharacter);

          if (!me.checkDiceResult(results, 4))
            me.kickScatter(character.x, character.y, otherCharacter.x, otherCharacter.y);

          me.activateCharacterInGroup(me.reducePiecesToId(me.getPieceByType("character")));
        }).catch(function(ex) {
          console.log(ex);
        });
      }, this));
  }

  attackPlayer(character) {
    let otherCharacterIds = this.reducePiecesToId(this.characters.filter(x => x != character));
    let me = this;

    this.switchState(new States.SelectPiece(otherCharacterIds,
      function(otherCharacterId) {
        let otherCharacter = this.getPiece(otherCharacterId);
        this.showConfirm("Bonus Time?").then(function(bonusTime) {
            let diceToRoll = character.character.TAC;

            if (bonusTime)
              diceToRoll++;

            me.rollDice(diceToRoll, otherCharacter.character.Defense).then(function(results) {
                var hits = me.checkDiceResult(results, otherCharacter.character.Defense)
                hits -= otherCharacter.character.Armor;

                me.showPlayBook(character.character, hits).then(actions => {
                  let states = [];
                  let damageActions = _.filter(actions, {
                    Damage: true
                  });
                  let damage = _.reduce(damageActions, (sum, a) => sum += a.DamageValue, 0);
                  if (damage) {
                    me.switchState(new States.ModifyCharacterHealth({
                      characterId: otherCharacter.id,
                      hits: damage
                    }, null, me));
                  }

                  let nonDamageActions = _.filter(actions, {
                    Damage: false
                  });

                  var nextState = function() {
                    if (states.length == 0)
                      me.activateCharacterInGroup(me.reducePiecesToId(me.getPieceByType("character")));

                    var state = states.pop();
                    me.switchState(state);
                  };

                  nonDamageActions.forEach(a => {
                    switch (a.Name) {
                      case "Push":
                        states.push(new States.MovePiece({
                          pieceId: otherCharacter.id,
                          x: otherCharacter.x,
                          y: otherCharacter.y,
                          message : "Push",
                          speed: 1
                        }, nextState, me))
                        break;
                      case "Dodge":
                        states.push(new States.MovePiece({
                          pieceId: character.id,
                          x: character.x,
                          y: character.y,
                          message : "Dodge",
                          speed: 1
                        }, nextState, me))
                        break;
                      default:
                    }
                  });

                  nextState();
                })
                .catch(function(ex) {
                  console.log(ex);
                });
              })
              .catch(function(ex) {
                console.log(ex);
              });
          })
          .catch(function(ex) {
            console.log(ex);
          });
      }, this));
  }

  activateCharacterInGroup(charactersIds) {
    this.switchState(new States.SelectPiece(charactersIds, this.showCharacterMenu, this));
  }

  showCharacterMenu(characterid) {
    this.switchState(new States.CharacterMenu(characterid, null, this));
  }

  kickScatter(fromX, fromY, toX, toY) {
    let me = this;
    this.rollDice(2, 7)
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
        pieceId: piece.id,
        x: x,
        y: y,
        speed: 1
      },
      null,
      this));
  }

  movePiece(piece, x, y) {
    this.switchState(new States.MovePiece({
        pieceId: piece.id,
        x: x,
        y: y,
        speed: 1000
      },
      null,
      this));
  }

  rollDice(numberOfDice, goal) {
    var me = this;
    return Q.Promise(function(resolve, reject, notify) {
      let results = [];

      for (var i = 0; i < numberOfDice; i++) {
        results.push(MathHelper.RandomNumber(1, 6));
      }

      me.switchState(new States.RollDice({
        results,
        goal
      }, function() {
        resolve(results);
      }, me));
    });
  }

  snapBallToCharacter(character) {
    this.movePiece(this.ball, character.x, character.y);
  }

  getCharacter(characterName) {
    return _.find(data, {
      Name: characterName
    });
  }

  showConfirm(message) {
    return Q.Promise(function(resolve, reject, notify) {
      vex.dialog.confirm({
        message: message,
        callback: resolve,
      })
    });
  }

  showPlayBook(character, hits) {
    return Q.Promise(function(resolve, reject, notify) {

      let actions = [];

      var html = '';
      let actionId = 0;
      character.PlayBookColumns.forEach((c, i) => {
        html += '<div class="playbook-column">';
        c.PlaybookResults.forEach((r, j) => {
          actions.push(r.PlaybookResultActions);
          html += '<div action="' + actionId++ + '" class="playbook-result ' + (i <= hits ? "enabled" : "disabled") + ' ' + (r.Momentous ? "momentous" : "") + '">';
          r.PlaybookResultActions.forEach(a => {
            html += '<span class="playbook-result-action">' + a.Action.Abbreviation + '</span>';
          });
          html += '</div>';
        });
        html += '</div>';
      });

      vex.dialog.open({
        message: 'Select a playbook result.',
        input: html,
        buttons: [],
        callback: function(data) {},
        afterOpen: function() {
          $(".playbook-result.enabled").click((evt) => {
            var a = $(evt.currentTarget).attr("action");
            var acts = actions[Number(a)];
            this.close();
            resolve(acts.map(action => action.Action));
          })
        }
      });
    });
  }

  //END UI Functions

  //INPUT HANDLERS
  clickPiece(params, skipAction) {
    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "Input",
        params: params,
        input: Inputs.PIECE_CLICK,
        replaySpeed: 1
      });
    }

    this._currentState.handleInput(Inputs.PIECE_CLICK, params.pieceId);
  }

  pressMovePiece(params, skipAction) {
    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "Input",
        params: params,
        input: Inputs.PIECE_DRAG,
        replaySpeed: 10
      });
    }

    this._currentState.handleInput(Inputs.PIECE_DRAG, params.pieceId, {
      mouseX: params.mouseX,
      mouseY: params.mouseY
    });
  }

  menuButtonClick(buttonId, skipAction) {
    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "Input",
        params: buttonId,
        input: Inputs.CLICK_MENU_BUTTON,
        replaySpeed: 1000
      });
    }

    this._currentState.handleInput(Inputs.CLICK_MENU_BUTTON, buttonId);
  }
  //END INPUT HANDLERS

  saveCharacterData() {
    var characters = this.getPieceByType("character").map(c => c.data());
    this.actions.push({
      id: this.actions.length + 1,
      type: "SetCharacterData",
      params: characters,
      replaySpeed: 1
    });
  }

  loadCharacters(characters) {
    this.removeCharacterPieces();

    characters.forEach(c => {
      var model = new CharacterModel(JSON.parse(c.characterData));
      this.addCharacter(model, c.x, c.y)
    }, this);
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
}
