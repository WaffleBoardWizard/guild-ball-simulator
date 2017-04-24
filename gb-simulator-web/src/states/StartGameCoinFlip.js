import State from './State';
import * as States from './'
export default class StartGameCoinFlip extends State {
  constructor(params, game) {
    super("StartGameCoinFlip", params, game);
  }

  onStart() {
    let me = this;

    this.game.UI.showMessage("Coin Flip");

    if(this.game.player == "Andrew"){
      let team1Result = this.game.rollDice(1);
      let team2Result = this.game.rollDice(1);

      this.game.UI.showDiceRollVs(
      {
          Name : this.game.teams[0].PlayerName,
          Modifer: this.game.teams[0].Momentum,
          Roll : team1Result
      },
      {
        Name : this.game.teams[1].PlayerName,
        Modifer: this.game.teams[1].Momentum,
        Roll : team2Result
      }).then( x => {
        let team = null
        if( team1Result > team2Result){
          team = this.game.teams[0].PlayerName;
          me.game.addLog(this.game.teams[0].PlayerName + ' has won initiative');
        }
        else{
          team = this.game.teams[1].PlayerName;
          me.game.addLog(this.game.teams[1].PlayerName + ' has won initiative');
        }

        me.game.switchState(new States.RecieveKickChoice({team : team}, me.game))
      });
    }
  }

  onExit() {
    this.game.UI.clearMessage();
  }

  handleInput(input, pieceId) {
  }
}