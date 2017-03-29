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
import CharacterData from './mockdata/characters';
import CharacterModel from './models/CharacterModel';
import TeamModel from './models/TeamModel';
import vex from 'vex-js';
import Conditions from './Conditions';
import Plays from './Plays';
import TeamData from './mockdata/Teams';


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
    this.loadTeams();
    this.addCharacters();
    this.addTerrian();
    this.saveCharacterData();
    this.addGoals();
    this.currentTeam = this.teams[0];
    this.team = this.teams[0];

    this.showMessage(this.currentTeam.PlayerName + "'s Turn");

    // this.switchState(new States.SetInfluence({ teamId : "Andrew"}, function() {
    //   this.switchState(new States.SetInfluence({ teamId : "Joe"}, function() {
    //      this.activateCharacterInGroup(this.reducePiecesToId(this.getTeamCharacters(this.currentTeam.PlayerName)));
    //   }, this));
    // }, this));

    this.activateCharacterInGroup(this.reducePiecesToId(this.getTeamCharacters(this.currentTeam.PlayerName)));
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
    this.ball = new Controls.BallControl(this.assets.getResult("ball"));

    this.addPieceToField(this.ball, Measurements.Foot / 2, Measurements.Foot / 2);
  }

  loadTeams(){
      TeamData.forEach( t => this.teams.push(new TeamModel(t)), this);
  }

  addCharacters() {
    this.teams.forEach( (team, i) =>{
      team.Characters.forEach((characterName, j) =>{
        var character = this.getCharacter(characterName);
        team.Influence += character.InfluenceStart;
        var model = new CharacterModel(character, team.PlayerName);
        this.addCharacter(model, Measurements.Inch * (j + 1) * 3, (Measurements.Inch * 8) * (i + 1));
      }, this);
    }, this);
  }

  addCharacter(character, x, y, field) {
    let characterControl = new Controls.CharacterControl(character, this.assets.getResult(character.Name.replace(" ", "")));

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

  addGoals() {
    let awayGoal = new Controls.GoalControl(this.assets.getResult("Goal"));
    this.addPieceToField(awayGoal, (Measurements.Foot * 3) / 2, 5 * Measurements.Inch, Measurements.Inch);
    this.goals.push(awayGoal);

    let homeGoal = new Controls.GoalControl(this.assets.getResult("Goal"));
    this.addPieceToField(homeGoal, (Measurements.Foot * 3) / 2, (Measurements.Foot * 3) - (5 * Measurements.Inch), Measurements.Inch);
    this.goals.push(homeGoal);
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
    let goalIds = this.reducePiecesToId(this.goals);
    let me = this;

    this.switchState(new States.KickBall({
        charactersId: otherCharacterIds.concat(goalIds)
      },
      function(kickParams) {
        if (kickParams.type == "piece") {
          let otherCharacter = this.getPiece(kickParams.pieceId);
          this.rollDice(character.character.KickDice, 4).then(function(results) {
            me.snapBallToCharacter(otherCharacter);

            if (!me.checkDiceResult(results, 4))
              me.kickScatter(character.x, character.y, otherCharacter.x, otherCharacter.y);

            me.activateCharacterInGroup(me.reducePiecesToId(me.getPieceByType("character")));
          }).catch(function(ex) {
            console.log(ex);
          });
        } else if (kickParams.type == "field") {
          me.kickScatter(character.x, character.y, me.ball.x, me.ball.y);
        }
      }, this));
  }

  attackPlayer(character) {
    let otherCharacterIds = this.reducePiecesToId(this.characters.filter(x => x != character));
    let me = this;

    this.switchState(new States.SelectPiece(otherCharacterIds,
      otherCharacterId => {
        let otherCharacter = this.getPiece(otherCharacterId);
        this.showConfirm("Bonus Time?").then(function(bonusTime) {
            let diceToRoll = character.character.TAC;

            if (bonusTime)
              diceToRoll++;

            me.rollDice(diceToRoll, otherCharacter.character.Defense).then(results => {
                var hits = me.checkDiceResult(results, otherCharacter.character.Defense);
                hits -= otherCharacter.character.Armor;
                me.choosePlaybook(character.character, hits).then(actions => {
                    me.applyActions(character, otherCharacter, actions);
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

  performPlay(character, play) {

    character.character.Influence -= Number(play.metaData.Cost);
    switch (play.action.Type) {
      case "Attack":
        this.performAttackPlay(character, play);
        break;
      case "Aura":
        this.performAuraPlay(character, play);
        break;
      case "Buff":
        this.performBuffPlay(character, play);
        break;
      default:
    }
  }

  performBuffPlay(character, play) {
    if (play.action.Target == "Self") {
      play.action.Modifiers.forEach(modifer => character.character.modifyCharacterStat(modifer.Stat, modifer.Value));
      this.activateCharacterInGroup(this.reducePiecesToId(this.getPieceByType("character")));
    }
    if (play.action.Target == "Friendly") {
      let otherCharacterIds = this.reducePiecesToId(this.characters.filter(x => x != character));
      this.switchState(new States.SelectPiece(otherCharacterIds, otherCharacterId => {
        let otherCharacter = this.getPiece(otherCharacterId);
        if(play.action.Modifiers)
          play.action.Modifiers.forEach(modifer => otherCharacter.character.modifyCharacterStat(modifer.Stat, modifer.Value));

        this.activateCharacterInGroup(this.reducePiecesToId(this.getPieceByType("character")));
      }, this));
    }
  }

  performAuraPlay(character, play) {
    play.action.Auras.forEach(aura => character.character.addAura(aura));
    this.activateCharacterInGroup(this.reducePiecesToId(this.getPieceByType("character")));
  }

  performAttackPlay(character, play) {
    let otherCharacterIds = this.reducePiecesToId(this.characters.filter(x => x != character));
    let me = this;
    if (play.action.Target == "Enemy") {
      this.switchState(new States.SelectPiece(otherCharacterIds, otherCharacterId => {
        let otherCharacter = this.getPiece(otherCharacterId);
        let cost = Number(play.metaData.Cost);
        let diceToRoll = cost;

        me.rollDice(diceToRoll, otherCharacter.character.Defense).then(results => {
          var hits = me.checkDiceResult(results, otherCharacter.character.Defense);

          if (hits > 0) {
            if(play.action.Modifiers)
            play.action.Modifiers.forEach(modifer => {
              otherCharacter.character.modifyCharacterStat(modifer.Stat, modifer.Value)
            });

            me.applyActions(character, otherCharacter, play.action.Actions);
          }
          else{
            me.activateCharacterInGroup(me.reducePiecesToId(me.getPieceByType("character")));
          }
        })
        .catch(function(ex) {
          console.log(ex);
        });
      }, this));
    } else if (play.action.Target == "Self") {
      me.applyActions(character, null, play.action.Actions);
    }
  }

  applyActions(character, otherCharacter, actions) {
    let me = this;
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
    var kd = _.find(actions, {
      Name: "Knock Down"
    });

    if (kd)
      me.addConditionToCharacter(otherCharacter.character, "Knocked Down");

    var nextState = function() {
      if (states.length == 0 || otherCharacter.character.isTakenOut()){
        me.activateCharacterInGroup(me.reducePiecesToId(me.getPieceByType("character")));
        return;
      }

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
            message: "Push",
            speed: 1
          }, nextState, me))
          break;
        case "Dodge":
          states.push(new States.MovePiece({
            pieceId: character.id,
            x: character.x,
            y: character.y,
            message: "Dodge",
            speed: 1
          }, nextState, me))
          break;
        default:
      }
    });

    nextState();
  }

  choosePlaybook(character, hits) {
    let me = this;

    return Q.Promise(function(resolve, reject) {
      console.log(hits);
      me.showPlayBook(character, hits).then(actions => {
        if (character.PlayBookColumns.length < hits) {
          hits -= character.PlayBookColumns.length
          me.choosePlaybook(character, hits).then(nextActions => {
            actions = actions.concat(nextActions);
            resolve(actions);
          });
        } else {
          resolve(actions);
        }
      });
    });
  }

  activateCharacterInGroup(charactersIds) {
    this.switchState(new States.SelectPiece(charactersIds, this.showCharacterMenu, this));
  }

  showCharacterMenu(characterid) {
    this.switchState(new States.CharacterMenu(characterid, null, this));
  }

  kickScatter(fromX, fromY, toX, toY) {
    let me = this;
    let angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
    me.ball.drawScatter(angle);

    this.rollDice(2, 7)
      .then(function(results) {
        let direction = results[0];
        let distance = results[1];

        me.ball.highlighScatterLine(direction);

        if (direction > 3)
          direction++;

        let coord = MathHelper.CalculateXYWithDistanceAndAngle(distance * Measurements.Inch, (22.5 * direction) + angle - 90);


        setTimeout(function() {
          me.movePiece(me.ball, coord.x + me.ball.x, coord.y + me.ball.y);
          me.ball.removeScatter();
        }, 2000, this);

      })
      .catch(function(ex) {
        console.log(ex);
      });
  }

  getCondition(name) {
    return _.find(Conditions, {
      Name: name
    });
  }

  getPlay(name) {
    return _.find(Plays, {
      Name: name
    });
  }

  getTeamCharacters(team){
    var pieces = this.getPieceByType("character");

    return _.filter(pieces, x => x.character.Team == team );
  }

  addConditionToCharacter(character, name) {
    var condition = this.getCondition(name);
    character.addCondition(condition);
  }

  getCharacter(characterName) {
    return _.find(CharacterData, {
      Name: characterName
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
      let html = '';
      let actionId = 0;
      character.PlayBookColumns.forEach((c, i) => {
        html += '<div class="playbook-column">';
        c.PlaybookResults.forEach((r, j) => {
          actions.push(r.PlaybookResultActions);
          html += '<div action="' + actionId++ + '" class="playbook-result ' + (i < hits ? "enabled" : "disabled") + ' ' + (r.Momentous ? "momentous" : "") + '">';
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

  showCharacterPlays(character) {
    let me = this;
    return Q.Promise(function(resolve, reject, notify) {
      let html = '<div class="ui cards">';
      let playid = 0;
      let plays = [];

      character.CharacterPlays.forEach((p, i) => {
        let play = me.getPlay(p.Name);
        plays.push({
          metaData: p,
          action: play
        });

        html += '<div class="character-play card" play="' + playid++ + '">';
        html += '<div class="content">';
        html += '<div class="character-play-name header">' + p.Name + "</div>";
        html += '<div class="character-play-description description">' + p.Description + "</div>";
        html += '</div>';
        html += '</div>';

      });

      html += '</div>';
      vex.dialog.open({
        message: 'Select a Character Play',
        input: html,
        buttons: [],
        callback: function(data) {},
        afterOpen: function() {
          $(".character-play").click((evt) => {
            var pId = $(evt.currentTarget).attr("play");
            var play = plays[Number(pId)];
            this.close();
            resolve(play);
          })
        }
      });
    });
  }

  showMessage(message, color){
    var me = this;
    var text = new createjs.Text(message, "64px Arial", color || "red");
    text.set({
      textAlign: "center",
      textBaseline: "middle"
    });

    text.x = Measurements.Inch * 18;
    text.y = Measurements.Inch * 18;

    this.field.addChild(text);

    createjs.Tween.get(text).to({alpha: 0.5}, 2000);

    createjs.Tween.get(text, {
      loop: false
    }).to({
      scaleX: 1.5,
      scaleY: 1.5
    }, 2000, createjs.Ease.getPowInOut(4)).call(function(){
      me.field.removeChild(text);
    })
  }

  showButton(text){
    let btn = new Controls.TextButton(text, "white", "green", 20);
    btn.x = Measurements.Inch;
    btn.y = Measurements.Inch;

    this.field.addChild(btn);

    return btn;
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
