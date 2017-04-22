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
    this.fieldControl.onPieceClicked = (p) => this.onPieceClicked(p);
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

  setCharacterAsActivated(character) {
    this.vueControl.activatedCharacter = character;
  }

  removeCharacters() {
    this.fieldControl.removeCharacterPieces();
  }

  addCharacter(character, x, y) {
    this.fieldControl.addCharacter(character, x, y, this.teams[0]);
  }

  highlightCharacter(character, color) {
    this.fieldControl.illuminateCharacter(character, color);
  }

  stopHighlightingCharacter(character) {
    this.fieldControl.stopIlluminatingCharacter(character);
  }

  showInfluenceControls(team){
    let maxInfluence = 0;

    this.vueControl.charactersToSetInfluence = team.Characters;
    this.vueControl.showInflunceMenu = true;

    team.Characters.forEach(character => {
      maxInfluence += character.InfluenceStart;
    }, this);

    team.Characters.forEach(character => {
      this.fieldControl.showInfluenceControls(character.Name, maxInfluence, () => {
        let usedInfluence = 0;
        team.Characters.forEach(character => {
          usedInfluence += character.Influence;
        }, this);
        return maxInfluence - usedInfluence;
      });
    }, this);
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

  moveCharacter(character) {
    let me = this;
    return new Promise((resolve, reject) => {
      me.fieldControl.movePiece(character.Name)
        .then(resolve)
        .catch(x => console.log(x));
    });
  }

  hideCurrentTeam(){
    this.vueControl.currentTeam = null;
  }

  showInflunceMenu(value){
    this.vueControl.showInflunceMenu = value;
  }

  showConfirm(title, message, okMessage, cancelMesseage){
    let me = this;
    return new Promise(function(resolve, reject) {
      let yes = okMessage || "Yes";
      let no = cancelMesseage || "No";
      me.vueControl.confirm = {
        title : title,
        contentHTML : message,
        okText : yes,
        cancelText: no,
        onOpen: function(){},
        onClose: answer => resolve(answer == "ok")
      };

      me.vueControl.showConfirm();
    });
  }

  showDiceRollVs(firstPlayer, secondPlayer){
    let me = this;

    return new Promise(function(resolve, reject) {
      me.vueControl.showDiceRollVs(firstPlayer, secondPlayer)
        .then(resolve);
    });
  }

  showDiceRoll(message, results){
    let me = this;

    return new Promise(function(resolve, reject) {
      me.vueControl.showDiceRoll(message, results)
        .then(resolve);
    });
  }

  showPlayBook(playbookColumns, results, goal){
    let me = this;

    return new Promise(function(resolve, reject) {
      me.vueControl.showPlayBook(playbookColumns, results, goal)
        .then(resolve);
    });
  }

  selectCharacter(characters){
    let me = this;

    characters.forEach( character => this.highlightCharacter(character.Name), this);

    return new Promise(function(resolve, reject) {
        let onClick = piece =>{
          let validCharacter = _.find(characters, { Name : piece.pieceId});
          if(validCharacter){
            me.onPieceClicked = this;
            characters.forEach( character => me.stopHighlightingCharacter(character.Name));
            resolve(validCharacter);
          }
        };
        me.onPieceClicked = onClick;
    });
  }

  showCharacterMessage(character, message){
    this.fieldControl.showCharacterMessage(character.Name, message);
  }

  pushCharacter(character, distance){
    this.showCharacterMessage(character, "Push");
    return this.moveCharacter(character);
  }

  dodgeCharacter(character, distance){
    this.showCharacterMessage(character, "Dodge");
    return this.moveCharacter(character);
  }

  showMessage(message){
    this.vueControl.message = message;
  }

  clearMessage(){
    this.vueControl.message = null;
  }

  emit(action, params){
    this.vueControl.$socket.emit(action, params);
  }
}
