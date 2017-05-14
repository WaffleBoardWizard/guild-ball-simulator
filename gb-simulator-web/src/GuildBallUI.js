import MathHelper from '@/Helpers/MathHelper';
import * as Boundaries from '@/helpers/boundary';

export default class GuildBallUI {
  constructor(fieldControl, vueControl) {
    this.fieldControl = fieldControl;
    this.vueControl = vueControl;
    this._currentState = null;
    this.actions = [];
    this.teams = [];
    this.onPieceClicked = null;
    this.initialize();
  }

  initialize() {
    this.bindEventHandlers();
  }

  bindEventHandlers() {
    this.fieldControl.onPieceClicked = (p) => {
      if(this.onPieceClicked)
        this.onPieceClicked(p);
    };
  }

  loadTeams(teams) {
    this.teams = teams;
  }

  showFieldMessage(message) {
    this.fieldControl.showMessage(message);
  }

  showConfirm(message) {
    return Q.Promise(function(resolve, reject, notify) {
      var resposne = confirm(message);
      if (resposne)
        resolve;
    });
  }

  showButton(text) {
    let btn = $('<button class="ui primary button">' + text + '</button>');
    this.clearMenuButtons();
    $("#menu").append(btn);

    return btn;
  }

  clearMenuButtons() {
    $("#menu").empty();
  }


  setCharacterAsActivated(character) {
    this.vueControl.activatedCharacter = character;
  }

  removeCharacters() {
    this.fieldControl.removeCharacterPieces();
  }

  addCharacter(character, x, y) {
    this.fieldControl.addCharacter(character, x, y);
  }

  highlightCharacters(characters, color){
    characters.forEach( c => this.highlightCharacter(c.Name, color));
  }

  highlightCharacter(character, color) {
    this.fieldControl.illuminateCharacter(character, color);
  }

  stopHighlightingCharacters(characters){
    characters.forEach( c => this.stopHighlightingCharacter(c.Name));
  }

  stopHighlightingCharacter(character) {
    this.fieldControl.stopIlluminatingCharacter(character);
  }

  setInfluence(team) {
    let me = this;
    return new Promise(function(resolve, reject) {
      let maxInfluence = 0;
      me.vueControl.charactersToSetInfluence = team.Characters;
      me.vueControl.showInflunceMenu = true;
      me.vueControl.currentTeam = team;
      me.highlightCharacters(team.Characters);

      me.vueControl.next = x =>{
        me.vueControl.showInflunceMenu = false;
        me.vueControl.currentTeam = null;

        me.stopHighlightingCharacters(team.Characters);
        team.Characters.forEach(character => {
          me.fieldControl.hideInfluenceControls(character.Name);
        });

        resolve();
      };

      team.Characters.forEach(character => {
        maxInfluence += character.InfluenceStart;
      }, this);

      team.Characters.forEach(character => {
        me.fieldControl.showInfluenceControls(character.Name, maxInfluence, () => {
          let usedInfluence = 0;
          team.Characters.forEach(character => {
            usedInfluence += character.Influence;
          }, this);
          return maxInfluence - usedInfluence;
        });
      }, me);
    });
  }

  hideInfluenceControls() {
    this.vueControl.showInflunceMenu = false;
    this.vueControl.charactersToSetInfluence.forEach(character =>
      this.fieldControl.hideInfluenceControls(character.Name), this);
  }

  updateCharacter(character) {
    this.fieldControl.updateCharacter(character);
  }

  setCurrentTeam(team) {
    this.vueControl.currentTeam = team;
  }

  showCharacterActions(character, actions) {
    this.vueControl.activatedCharacter = character;
    this.vueControl.actions = actions;
  }

  confirmActivation(character) {
    let me = this;
    me.vueControl.confirmActivationCharacter = character;
    var promise = new Promise((resolve, reject) => {
      me.vueControl.confirmActivation = () => {
        me.vueControl.confirmActivationCharacter = null;
        resolve(true);
      }
    });

    return promise;
  }

  moveBall(x, y, instant) {
    this.fieldControl.moveBall(x, y, instant);
  }

  advanceCharacter(character, length) {

    let me = this;
    let movePromise = null;

    length = Number(length);
    
    return new Promise(function(resolve, reject) {
      let movements = [];
      let remainingLength = length;


      me.vueControl.showMovementControl = true;
      me.vueControl.movementControl.movementLeft = length;
      me.vueControl.movementControl.movementUsed = 0;
      me.vueControl.movementControl.undo = () => {
        let m = movements.pop();
        let lastMovement = movements[movements.length - 1];
        remainingLength += m.distance;

        me.fieldControl.moveCharacterFromTo(character.Name, 0, 0, lastMovement.x, lastMovement.y, true);
        me.vueControl.movementControl.movementLeft = remainingLength.toFixed(2);
        me.vueControl.movementControl.movementUsed = (length - remainingLength).toFixed(2);

        let boundaries = [];

        boundaries.push(new Boundaries.Radius(lastMovement.x, lastMovement.y, remainingLength, ((character.Size / 2 ) * 0.0393701)));

        me.fieldControl.removeOverlays();
        me.fieldControl.drawOverlays(boundaries);
      };


      let onMove = r => {
        let startX = 0;
        let startY = 0;

        let x = r ? r.x : character.x;
        let y = r ? r.y : character.y;

        if(movements.length == 0){
          startX = character.x;
          startY = character.y;
        } else {
          let lastMovement = movements[movements.length - 1];
          startX = lastMovement.x;
          startY = lastMovement.y;
        }

        if(r){
          let distance = MathHelper.pythagorean(Math.abs(x - startX), Math.abs(y - startY));
          remainingLength -= distance;
          me.vueControl.movementControl.movementLeft = remainingLength.toFixed(2);
          me.vueControl.movementControl.movementUsed = (length - remainingLength).toFixed(2);;
          movements.push({x, y, distance});

        } else {
          movements.push({x, y, distance : 0});
        }


        let boundaries = [];
        boundaries.push(new Boundaries.Radius(x, y, remainingLength, ((character.Size / 2 ) * 0.0393701)));

        me.fieldControl.removeOverlays();
        me.fieldControl.drawOverlays(boundaries);


        movePromise = me.fieldControl.movePiece(character.Name, boundaries);
        movePromise
          .promise
          .then(onMove)
          .catch(e => console.log(e));
      };

      onMove();

      me.vueControl.next = () => {
        me.vueControl.showMovementControl = false;
        me.vueControl.movementControl.movementLeft = 0;
        me.vueControl.movementControl.movementUsed = 0;
        me.fieldControl.removeOverlays();
        movePromise.cancel();
        resolve(movements);
      }
    });
  }

  hideCurrentTeam() {
    this.vueControl.currentTeam = null;
  }

  showInflunceMenu(value) {
    this.vueControl.showInflunceMenu = value;
  }

  showConfirm(title, message, okMessage, cancelMesseage) {
    let me = this;
    return new Promise(function(resolve, reject) {
      let yes = okMessage || "Yes";
      let no = cancelMesseage || "No";
      me.vueControl.confirm = {
        title: title,
        contentHTML: message,
        okText: yes,
        cancelText: no,
        onOpen: function() {},
        onClose: answer => resolve(answer == "ok")
      };

      me.vueControl.showConfirm();
    });
  }

  showDiceRollVs(firstPlayer, secondPlayer) {
    let me = this;

    return new Promise(function(resolve, reject) {
      me.vueControl.showDiceRollVs(firstPlayer, secondPlayer)
        .then(resolve);
    });
  }

  showDiceRoll(message, results) {
    let me = this;

    return new Promise(function(resolve, reject) {
      me.vueControl.showDiceRoll(message, results)
        .then(resolve);
    });
  }

  showPlayBook(playbookColumns, results, goal) {
    let me = this;

    return new Promise(function(resolve, reject) {
      me.vueControl.showPlayBook(playbookColumns, results, goal)
        .then(resolve);
    });
  }

  selectCharacter(characters) {
    let me = this;

    characters.forEach(character => this.highlightCharacter(character.Name), this);

    return new Promise(function(resolve, reject) {
      let onClick = piece => {
        let validCharacter = _.find(characters, {
          Name: piece.pieceId
        });
        if (validCharacter) {
          me.vueControl.confirmActivationCharacter = validCharacter;
        }
      };

      me.onPieceClicked = onClick;

      me.vueControl.confirmActivation = () => {
        characters.forEach(character => me.stopHighlightingCharacter(character.Name));
        resolve(me.vueControl.confirmActivationCharacter);
        me.onPieceClicked = null;
        me.vueControl.confirmActivationCharacter = null;
        me.vueControl.confirmActivation = null;
      }
    });
  }

  setupCharacters(characters, boundaries) {
    let me = this;
    let promises = [];
    return new Promise(function(resolve, reject) {

      me.fieldControl.drawOverlays(boundaries);

      characters.forEach((character, index) => {
        let prom = null;

        let onMove = r => {
          if (r) {
            character.x = r.x,
              character.y = r.y;
          }
          promises[index] = me.fieldControl.movePiece(character.Name, boundaries);

          promises[index]
            .promise
            .then(onMove)
            .catch(e => console.log(e));
        };

        onMove();
      });

      me.vueControl.next = () => {
        me.fieldControl.removeOverlays();
        promises.forEach(prom => prom.cancel());
        resolve();
      }
    });
  }

  kickBallFromCharacter(character) {
    let me = this;

    return new Promise(function(resolve, reject) {
      let boundaries = [];
      boundaries.push(new Boundaries.Radius(character.x, character.y, character.KickLength, .5));

      me.fieldControl.removeOverlays();
      me.fieldControl.drawOverlays(boundaries);

      var cancel = me.fieldControl.allowBallToMove(character.Name, boundaries);

      me.vueControl.next = () => {
        cancel();
        resolve(me.fieldControl.getBallCoordinates());
      }
    });
  }

  snapBallToCharacter(character) {
    this.fieldControl.snapBallToCharacter(character);
  }

  showCharacterMessage(character, message) {
    this.fieldControl.showCharacterMessage(character.Name, message);
  }

  pushCharacter(character, distance) {
    this.showCharacterMessage(character, "Push");
    return this.moveCharacter(character);
  }

  dodgeCharacter(character, distance) {
    this.showCharacterMessage(character, "Dodge");
    return this.moveCharacter(character);
  }

  moveCharacterFromTo(character, fromX, fromY, toX, toY, instant) {
    this.fieldControl.moveCharacterFromTo(character, fromX, fromY, toX, toY, instant);
  }

  showMessage(message) {
    this.vueControl.message = message;
  }

  clearMessage() {
    this.vueControl.message = null;
  }

  emit(action, params) {
    this.vueControl.$socket.emit(action, params);
  }
}
