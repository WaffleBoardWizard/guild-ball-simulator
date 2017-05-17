import State from './State';
import * as States from './'
import * as Actions from "@/actions";
import DiceHelper from '@/Helpers/DiceHelper';

export default class RollAttack extends State {
  ///params = attackingCharacterName, defendingCharacterName, bonusTime?
  constructor(params, activeTeamId, game) {
    super("RollAttack", params, activeTeamId, game, true);
  }

  onStart(){

  }

  onActiveTeamStart() {
    let character = this.game.getCharacter(this.params.attackingCharacterName);
    let numberOfDice = character.TAC;

    if(this.params.bonusTime)
      numberOfDice++;

    let results = DiceHelper.rollDice(numberOfDice);

    me.game.switchState(new States.AssignKicker({
        attackingCharacterName : me.params.attackingCharacterName,
        defendingCharacterName : me.params.defendingCharacterName,
        diceResults : results
    },
    me.activeTeamId,
    me.game));
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
