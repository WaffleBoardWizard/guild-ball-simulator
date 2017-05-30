import Conditions from './Conditions';
import Plays from './Plays';
import CharacterModel from './models/CharacterModel';
import * as States from './States';
import * as Actions from "@/actions";
import MathHelper from '@/Helpers/MathHelper';
import DiceHelper from '@/Helpers/DiceHelper';

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

    this.catchUpOnActions(this.gameData.Actions).then(x => {
      me.switchStateFromServer(me.gameData.CurrentState);
    });
  }

  ///TEAM HELPERS
  getCurrentTeamID(){
      return this.playerTeam.PlayerName;
  }

  getCurrentTeam(){
    return this.playerTeam;
  }

  getOpposingTeam() {
    let me = this;
    return _.find(this.gameData.Teams, team => team.PlayerName != me.player);
  }

  getOpposingTeamId() {
    return this.getOpposingTeam().PlayerName;
  }

  addMomentumToTeam(team, momentumToAdd){
    this.addAction(new Actions.SetTeamMomentum({
      teamId: team.PlayerName,
    }, this));
    momentum: team.Momentum  + momentumToAdd
  }

  clearTeamsMomentum(team){
      this.addAction(new Actions.SetTeamMomentum({
        teamId: team.PlayerName,
        momentum: 0
      }, this))
  }
  clearTeamsCharacterTurnData(team){
    let me = this;

    team.Characters.forEach(character => {
        me.addAction(new Actions.ClearCharacterTurnData({
          characterName : character.Name
        }, this));
    });
  }

  clearTeamsTurnData(){
    let me = this;

    this.teams.forEach( team => {
        me.clearTeamsMomentum(team);
        me.clearTeamsCharacterTurnData(team);
    });
  }
  //END OF TEAM helpers

  //ACTION HELPERS
  incrementCurrentPlayersAction() {
    this.playerTeam.CurrentAction += 1;
    console.log(this.playerTeam.CurrentAction + " <<<<<<<< Current Action");
    this.UI.emit("updateCurrentAction", {
      player: this.player,
      currentAction: this.playerTeam.CurrentAction
    });
  }

  addAction(action, instant) {
    action.perform(instant);
    this.incrementCurrentPlayersAction();

    let copyAction = Object.assign({}, action);
    delete copyAction.game;
    this.UI.emit("addAction", copyAction);
  }


    performAction(action) {
      let me = this;
      if (action.id > this.playerTeam.CurrentAction) {
        if (!this.performingAction) {
         this.performingAction = true;
          console.log(action.id);
          console.log(this.playerTeam.CurrentAction);
          console.log(action.action.params);


          console.log("=========================");
          console.log("PERFORMING ACITON");
          console.log(action.action.name);
          console.log("=========================");

          this.incrementCurrentPlayersAction();

          new Actions[action.action.name](action.action.params, this).perform();

          setTimeout(() => {
            console.log("catching up")
            if (me.backlogActions){
              console.log(me.backlogActions);
              me.catchUpOnActions( me.backlogActions, true);
              me.backlogActions = [];
            }
            me.performingAction = false;
          }, action.action.replaySpeed);

        } else {
          console.log("cannot perform action adding to back log")
          console.log(action.action);
          if (!me.backlogActions)
            me.backlogActions = [];
          me.backlogActions.push(action.action);
        }
      }
    }

    catchUpOnActions(actions, skipIndexCheck) {
      let me = this;

      return new Promise(function(resolve, reject) {
        let missingActions = actions.slice(me.playerTeam.CurrentAction + 1);
        let totalTime = 0;

        actions.forEach((action, index) => {
          let copyAction = Object.assign({}, action);

          if (skipIndexCheck || index > me.playerTeam.CurrentAction) {
            console.log(totalTime)
            setTimeout(() => {
              console.log("Firing ");
              me.incrementCurrentPlayersAction();
              new Actions[copyAction.name](copyAction.params, me).perform();
            }, totalTime);
            totalTime += copyAction.replaySpeed;
          } else {
            new Actions[copyAction.name](copyAction.params, me).perform(true);
          }
        }, me);

        setTimeout(resolve, totalTime);
      });
    }
    /// END OF ACTION helpers

  // LOG HELPERS
  addInfoLog(message) {
    this.addLog({
      Message: message
    }, 'info');
  }

  addLog(params, type) {
    let action = new Actions.Log({
      Params: params,
      Type: type,
      CreatedOn: new Date()
    }, this);

    this.addAction(action);
  }
  // END OF LOG HELPERS


  loadTeamsCharactersOnSide(team) {
    let i = 0;
    var y = 0;
    if (team.Side == "North")
      y = 3;
    else
      y = 34;

    team.Characters.forEach(c => {
      let x = (i++ * 3) + 11;
      this.UI.addCharacter(c, x, y);

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

  getEnemyCharactersInRangeOfCharacter(character, range){
      let characters = this.getOpposingTeam().Characters.filter( c =>{
         return this.getDistanceBetweenTwoCharacters(character, c) <= range
      });
      return characters;
  }

  getDistanceBetweenTwoCharacters(character1, character2){
    let character1BaseRadius = (character1.Size / 25.4) / 2;
    let character2BaseRadius = (character2.Size / 25.4) / 2;
    let distance = MathHelper.pythagorean(Math.abs(character1.x - character2.x), Math.abs(character1.y - character2.y));

    return  (distance - (character1BaseRadius + character2BaseRadius));
  }

  //CHARACTER/TEAM/DATA HELPERS
  getTeam(playerName) {
    return _.find(this.teams, {
      PlayerName: playerName
    });
  }

  getCharacter(characterName) {
    return _.find(this.teams[0].Characters.concat(this.teams[1].Characters), {
      Name: characterName
    });
  }

  getCharacterThatHasBall() {
    return _.find(this.teams[0].Characters.concat(this.teams[1].Characters), {
      HasBall: true
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

  // END CHARACTER/TEAM/DATA HELPERS

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

  applyActions(attacker, defender, actions) {
    let me = this;
    let damageActions = _.filter(actions, {
      Damage: true
    });
    let damage = _.reduce(damageActions, (sum, a) => sum += a.DamageValue, 0);
    if (damage) {
      defender.Health -= damage;
    }

    let nonDamageActions = _.filter(actions, {
      Damage: false
    });
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

  switchState(state, doNotEmit) {
    let me = this;
    console.log(state.state);
    console.log(state.id);


    if (!doNotEmit) {
      console.log("============");
      console.log("EMITING");
      console.log(state.state);
      console.log("============");

      this.UI.emit("switchState", {
        Name: state.state,
        Params: state.params,
        activeTeamId: state.activeTeamId,
        id: state.id
      });
    }

    if (this._currentState) {
      this._currentState.onExit();

      if (this.player == this._currentState.activeTeamId)
        this._currentState.onActiveTeamExit();
      else
        this._currentState.onNonActiveTeamExit();
    }

    this._currentState = state;

    this._currentState.onStart();

    if (this.player == this._currentState.activeTeamId) {
      this._currentState.onActiveTeamStart();


    } else
      this._currentState.onNonActiveTeamStart();

  }

  switchStateFromServer(state) {
    if (!this._currentState || state.id != this._currentState.id)
      this.switchState(new States[state.Name](state.Params || state.params, state.activeTeamId, this), true);
  }

}
