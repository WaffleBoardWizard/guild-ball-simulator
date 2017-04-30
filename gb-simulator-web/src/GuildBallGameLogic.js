import Conditions from './Conditions';
import Plays from './Plays';
import CharacterModel from './models/CharacterModel';
import * as States from './States';
import * as Inputs from './Inputs';
import * as Actions from "./actions";
import MathHelper from './helpers/MathHelper';

export default class GuildBallGameLogic {
  constructor(ui, gameData, player) {
    this.UI = ui;
    this._currentState = null;
    this.gameData = gameData;
    this.teams = gameData.Teams;
    this.player = player;
    this.playerTeam = this.getTeam(this.player);
    this.activatedCharacter = null;
    this.currentTeam = null;
    this.actions = [];
    this.futureStates = [];
    this.initialize();
  }

  initialize() {
    let me = this;

    this.bindEventHandlers();
    this.loadCharacters();

    //this.attackPlayer(this.teams[0].Characters[0], this.teams[0].Characters[1]);
    //me.rollDiceAndShow(6);
    //this.UI.showPlayBook(this.teams[0].Characters[0].PlayBookColumns, this.rollDice(6));
    //
    // this.switchState(new States.SetInfluence({
    //   teamId: this.teams[0].PlayerName
    // }, this));
    //
    // this.futureStates.push(new States.SetInfluence({
    //   teamId: this.teams[1].PlayerName
    // }, this));

    this.catchUpOnActions(this.gameData.Actions).then(x => {
      me.switchStateA(me.gameData.CurrentState);
    });
  }

  bindEventHandlers() {
    this.UI.onPieceClicked = this.PieceClicked.bind(this);
  }

  getOpposingTeam(){
    let me = this;

    return _.find(this.gameData.Teams, team => team.PlayerName != me.player);
  }

  getOpposingTeamId(){
    return this.getOpposingTeam().PlayerName;
  }

  incrementCurrentPlayersAction(){
    this.UI.emit("updateCurrentAction", {
      player : this.player,
      currentAction : ++this.playerTeam.CurrentAction
    });
  }
  addAction(action) {
    action.perform();
    this.incrementCurrentPlayersAction();

    let copyAction = Object.assign({}, action);
    delete copyAction.game;

    this.UI.emit("addAction", copyAction);
  }

  addInfoLog(message){
    this.addLog({
      Message: message
    }, 'info');
  }

  addLog(params, type) {
    let action = new Actions.Log({
      Params: params,
      Type : type,
      CreatedOn: new Date()
    }, this);

    this.addAction(action);
  }

  performAction(action) {
    if (action.id > this.playerTeam.CurrentAction) {
      new Actions[action.action.name](action.action.params, this).perform();
    }
  }

  catchUpOnActions(actions) {
    let me = this;

    return new Promise(function(resolve, reject) {
      let missingActions = actions.slice(me.playerTeam.CurrentAction + 1);
      let totalTime = 0;

      actions.forEach((action, index) => {
        if(index > me.playerTeam.CurrentAction){
         setTimeout(() => {
            me.incrementCurrentPlayersAction();
            new Actions[action.name](action.params, me).perform();
          }, totalTime);
          totalTime += action.replaySpeed;
        } else{
          new Actions[action.name](action.params, me).perform(true);
        }
      }, me);

      setTimeout(resolve, totalTime);
    });
  }

  switchTeam() {
    let team = this.teams.indexOf(this.currentTeam) == 0
      ? this.teams[1]
      : this.teams[0];
    this.setCurrentTeam(team);
  }

  activateCurrentTeamsPlayers() {
    this.switchState((new States.ChooseCharacterToActivate({}, this.currentTeam.PlayerName, this)));
  }

  showCharacterActions(character, actions) {
    this.UI.showCharacterActions(character, actions);
  }

  loadCharacters() {
    this.UI.removeCharacters();
    let i = 2;
    this.teams.forEach(team => {
      team.Characters.forEach(c => {
        let x = c.x || i;
        let y = c.y || i;
        this.UI.addCharacter(c, x, y);
        i += 2;
      }, this);
    }, this);
  }

  momentnumDiceRoll() {
    let team1Result = this.rollDice(1);
    let team2Result = this.rollDice(1);

    this.UI.showDiceRollVs({
      Name: this.teams[0].PlayerName,
      Modifer: this.teams[0].Momentum,
      Roll: team1Result
    }, {
      Name: this.teams[1].PlayerName,
      Modifer: this.teams[1].Momentum,
      Roll: team2Result
    }).then(x => console.log(x));
  }

  rollDiceAndShow(numberOfDice) {
    let results = this.rollDice(numberOfDice);
    this.UI.showDiceRoll("Dice Roll", results).then(x => console.log(x));
  }

  next(validated) {

    if (this.futureStates.length > 0) {
      let me = this;
      if (!validated && this._currentState.validateExit) {
        this._currentState.validateExit().then(validated => {
          if (validated)
            me.next(true)
        });
        return;
      }

      let nextState = this.futureStates.shift();
      this.switchState(nextState, null, true);
    } else {
      this.switchTeam();
      this.activateCurrentTeamsPlayers();
    }

  }

  getTeam(playerName) {
    return _.find(this.teams, {PlayerName: playerName});
  }

  getCharacter(characterName) {
    return _.find(this.teams[0].Characters.concat(this.teams[1].Characters), {Name: characterName});
  }

  getCharacterThatHasBall() {
    return _.find(this.teams[0].Characters.concat(this.teams[1].Characters), {HasBall: true});
  }

  highlightCharacters(characters, color) {
    characters.forEach(character => {
      this.UI.highlightCharacter(character.Name, color);
    }, this);
  }

  stopHilightingCharacters(characters) {
    characters.forEach(character => {
      this.UI.stopHighlightingCharacter(character.Name);
    }, this);
  }

  setCurrentTeam(team) {
    this.currentTeam = team;
    this.UI.setCurrentTeam(team);
  }

  allowTeamToSetInfluence(team) {
    this.UI.showInfluenceControls(team);
  }

  hideInfluenceControls(team) {
    this.UI.hideCurrentTeam();
    this.UI.showInflunceMenu(false);
    this.UI.hideInfluenceControls();
  }

  setCharacterAsActivated(character) {
    this.UI.setCharacterAsActivated(character);
  }

  finishActivation() {
    this.activatedCharacter.turn.activated = true;
    this.activateCurrentTeamsNotActivatedPlayers();
  }

  addCharactersToField() {
    this.teams.forEach((team, i) => {
      team.Characters.forEach((characterName, j) => {
        let character = this.getCharacter(characterName);
        team.Influence += character.InfluenceStart;
        var model = new CharacterModel(character, team.PlayerName);
        this.addCharacter(model, Measurements.Inch * (j + 1) * 3, (Measurements.Inch * 8) * (i + 1));
      }, this);
    }, this);
  }

  rollDice(numberOfDice, goal) {
    let results = [];

    for (var i = 0; i < numberOfDice; i++) {
      results.push(MathHelper.RandomNumber(1, 6));
    }
    //TODO MOVE THIS OUT
    // me.switchState(new States.RollDice({
    //   results,
    //   goal
    // }, function() {
    //   resolve(results);
    // }, me));

    if (results.length == 1)
      return results[0];

    return results;
  };

  getCondition(name) {
    return _.find(Conditions, {Name: name});
  }

  getPlay(name) {
    return _.find(Plays, {Name: name});
  }

  getTeamCharacters(team) {
    var pieces = this.getPieceByType("character");

    return _.filter(pieces, x => x.character.Team == team);
  }

  saveCharacterData() {
    var characters = this.getPieceByType("character").map(c => c.data());
    this.actions.push({
      id: this.actions.length + 1,
      type: "SetCharacterData",
      params: characters,
      replaySpeed: 1
    });
  }

  kickScatter(fromX, fromY, toX, toY) {
    let me = this;
    let angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI;
    me.ball.drawScatter(angle);

    this.rollDice(2, 7).then(function(results) {
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

    }).catch(function(ex) {
      console.log(ex);
    });
  }

  activateCurrentCharacter() {
    this.activateCharacterInGroup([this.activatedCharacter.id]);
  }

  activateCurrentTeamsNotActivatedPlayers() {
    let characters = this.getTeamCharacters(this.currentTeam.PlayerName);
    characters = _.filter(characters, c => !c.character.turn.activated);
    this.activateCharacterInGroup(this.reducePiecesToId(characters));
  }

  activateCharacterInGroup(charactersIds) {
    this.switchState(new States.SelectPiece(charactersIds, this.setCharacterAsActivated, this));
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

  applyActions(attacker, defender, actions) {
    let me = this;
    //let states = [];
    let damageActions = _.filter(actions, {Damage: true});
    let damage = _.reduce(damageActions, (sum, a) => sum += a.DamageValue, 0);
    if (damage) {
      defender.Health -= damage;
      // me.switchState(new States.ModifyCharacterHealth({
      //   characterId: otherCharacter.id,
      //   hits: damage
      // }, null, me));
    }

    let nonDamageActions = _.filter(actions, {Damage: false});
    //
    // var kd = _.find(actions, {
    //   Name: "Knock Down"
    // });

    // if (kd)
    //   me.addConditionToCharacter(otherCharacter.character, "Knocked Down");

    var nextAction = function() {
      let a = nonDamageActions.pop();
      switch (a.Name) {
        case "Push":
          me.UI.pushCharacter(defender, 1).then(nextAction).catch(e => console.log(e));
          break;
        case "Dodge":
          me.UI.dodgeCharacter(attacker, 1).then(nextAction).catch(e => console.log(e));
          break;
        default:
      }
    };

    nextAction();
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
      this.activateCurrentCharacter();
    }
    if (play.action.Target == "Friendly") {
      let otherCharacterIds = this.reducePiecesToId(this.characters.filter(x => x != character));
      this.switchState(new States.SelectPiece(otherCharacterIds, otherCharacterId => {
        let otherCharacter = this.getPiece(otherCharacterId);
        if (play.action.Modifiers)
          play.action.Modifiers.forEach(modifer => otherCharacter.character.modifyCharacterStat(modifer.Stat, modifer.Value));

        this.activateCurrentCharacter();
      }, this));
    }
  }

  performAuraPlay(character, play) {
    play.action.Auras.forEach(aura => character.character.addAura(aura));
    this.activateCurrentCharacter();
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
            if (play.action.Modifiers)
              play.action.Modifiers.forEach(modifer => {
                otherCharacter.character.modifyCharacterStat(modifer.Stat, modifer.Value)
              });

            me.applyActions(character, otherCharacter, play.action.Actions);
          } else {
            me.activateCurrentCharacter();
          }
        }).catch(function(ex) {
          console.log(ex);
        });
      }, this));
    } else if (play.action.Target == "Self") {
      me.applyActions(character, null, play.action.Actions);
    }
  }

  attackPlayer(attacker, defender) {
    let me = this;
    return new Promise(function(resolve, reject) {
      me.UI.showPlayBook(attacker.PlayBookColumns, me.rollDice(attacker.TAC), defender.Defense).then(result => {
        me.applyActions(attacker, defender, _.map(result.PlaybookResultActions, a => a.Action));
        console.log(result.PlaybookResultActions);
      });
    });
  }

  // attackPlayer(character) {
  //   let otherCharacterIds = this.reducePiecesToId(this.characters.filter(x => x != character));
  //   let me = this;
  //
  //   this.switchState(new States.SelectPiece(otherCharacterIds,
  //     otherCharacterId => {
  //       let otherCharacter = this.getPiece(otherCharacterId);
  //       this.showConfirm("Bonus Time?").then(function(bonusTime) {
  //           let diceToRoll = character.character.TAC;
  //
  //           if (bonusTime)
  //             diceToRoll++;
  //
  //           me.rollDice(diceToRoll, otherCharacter.character.Defense).then(results => {
  //               var hits = me.checkDiceResult(results, otherCharacter.character.Defense);
  //               hits -= otherCharacter.character.Armor;
  //               me.choosePlaybook(character.character, hits).then(actions => {
  //                   me.applyActions(character, otherCharacter, actions);
  //                 })
  //                 .catch(function(ex) {
  //                   console.log(ex);
  //                 });
  //             })
  //             .catch(function(ex) {
  //               console.log(ex);
  //             });
  //         })
  //         .catch(function(ex) {
  //           console.log(ex);
  //         });
  //     }, this));
  // }

  kickBall(character) {
    let otherCharacterIds = this.reducePiecesToId(this.characters.filter(x => x != character));
    let goalIds = this.reducePiecesToId(this.goals);
    let me = this;

    this.switchState(new States.KickBall({
      charactersId: otherCharacterIds.concat(goalIds)
    }, function(kickParams) {
      if (kickParams.type == "piece") {
        let otherCharacter = this.getPiece(kickParams.pieceId);
        this.rollDice(character.character.KickDice, 4).then(function(results) {
          me.snapBallToCharacter(otherCharacter);

          if (!me.checkDiceResult(results, 4))
            me.kickScatter(character.x, character.y, otherCharacter.x, otherCharacter.y);

          me.activateCurrentCharacter();
        }).catch(function(ex) {
          console.log(ex);
        });
      } else if (kickParams.type == "field") {
        me.kickScatter(character.x, character.y, me.ball.x, me.ball.y);
      }
    }, this));
  }

  checkDiceResult(diceResults, goal) {
    let result = 0;
    diceResults.forEach(function(d) {
      if (d >= goal)
        result++;
      }
    );
    return result;
  }


  switchState(state, doNotEmit, validated) {
    let me = this;

    if (!doNotEmit) {
      this.UI.emit("switchState", {
        Name: state.state,
        Params: state.params,
        activeTeamId: state.activeTeamId,
        id: state.id
      });
    }

    if (this._currentState) {
      if (!validated && this._currentState && this._currentState.validateExit) {
        this._currentState.validateExit().then(validated => {
          if (validated)
            me.switchState(state, null, true)
        });

        return;
      }

      this._currentState.onExit();

      if (this.player == this._currentState.activeTeamId)
        this._currentState.onActiveTeamExit();
      else
        this._currentState.onNonActiveTeamExit();
    }

    this._currentState = state;

    this._currentState.onStart();

    if (this.player == this._currentState.activeTeamId)
      this._currentState.onActiveTeamStart();
    else
      this._currentState.onNonActiveTeamStart();

    }

  switchStateA(state) {
    console.log(this._currentState);
    console.log(state);
    if(!this._currentState || state.id != this._currentState.id)
      this.switchState(new States[state.Name](state.Params || state.params, state.activeTeamId, this), true);
  }

  replayState(actions) {
    this.switchState(new States[actions.state](actions.params, null, this), true);
  }

  replayInput(actions) {
    let input = null;
    switch (actions.input) {
      case Inputs.PIECE_DRAG:
        input = this.pressMovePiece;
        break;
      case Inputs.PIECE_CLICK:
        input = this.clickPiece;
        break;
      case Inputs.CLICK_MENU_BUTTON:
        input = this.menuButtonClick;
        break;
      default:
    }

    input.bind(this)(actions.params, true);
  }

  PieceClicked(params, skipAction) {
    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "Input",
        params: params,
        input: Inputs.PIECE_CLICK,
        replaySpeed: 1
      });
    }

    //this._currentState.handleInput("PIECE_CLICKED", params.pieceId);
  }
}
