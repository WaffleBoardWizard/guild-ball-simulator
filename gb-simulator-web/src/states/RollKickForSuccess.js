import State from './State';
import * as States from './'
import * as Actions from "@/actions";

export default class RollKickForSuccess extends State {
  constructor(params, activeTeamId, game) {
    super("RollKickForSuccess", params, activeTeamId, game);
  }

  onStart(){

  }

  onActiveTeamStart() {
    let character = this.game.getCharacter(this.params.characterName);
    let kickDice = character.KickDice;
    let success = 4;

    if(this.params.bonusTime)
      kickDice++

    let results = this.game.rollDice(kickDice);

    this.game.addLog({
      results : results,
      success : 4,
      message : "Kick Ball"
    }, 'DiceRollLog');

    this.game.switchState(new States.RollKickScatter({
      allowReroll : this.game.checkDiceResult(results, success),
      characterName: this.params.characterName,
      afterKickState: this.params.afterKickState
    }, this.activeTeamId, this.game), true);
  }

  onNonActiveTeamStart() {
  }

  onActiveTeamExit(){
  }

  onNonActiveTeamExit(){

  }

  onExit() {
  }
}
