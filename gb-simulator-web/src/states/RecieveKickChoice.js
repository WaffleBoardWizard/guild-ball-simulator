import State from "./State";
import * as States from "./";

export default class RecieveKickChoice extends State {
  constructor(params, game) {
    super("RecieveKickChoice", params, game);
  }

  onStart() {
    let me = this;

    this.game.UI.showMessage("Coin Flip");

    if(this.params.team == this.game.player){
      this.game.UI.showConfirm("Recieve", "Would you like to recieve?")
        .then( x => {
            if(x){
                me.game.switchState( new States.SetupCharacters({team : me.params.team}, me.game));
            } else {
                me.game.switchState( new States.SetupCharacters({team : me.params.team}, me.game));
            }
        })
        .catch( e => console.log(e))
    }
  }

  onExit() {
    this.game.UI.clearMessage();
  }

  handleInput(input, pieceId) {
  }
}
