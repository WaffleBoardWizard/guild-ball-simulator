import State from "./State";

export default class RecieveKickChoice extends State {
  constructor(params, game) {
    super("RecieveKickChoice", params, game);
  }

  onStart() {
    this.game.UI.showMessage("Coin Flip");

    if(this.params.team == this.game.player){
      this.game.UI.showConfirm("Recieve", "Would you like to recieve?")
        .then(resolve)
        .catch( e => console.log(e))
    }
  }

  onExit() {
    this.game.UI.clearMessage();
  }

  handleInput(input, pieceId) {
  }
}
