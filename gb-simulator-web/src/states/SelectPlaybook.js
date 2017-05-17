import State from './State';
import * as States from './'
import * as Actions from "@/actions";

export default class SelectPlaybook extends State {
  ///params = attackingCharacterName, defendingCharacterName, diceResults
  constructor(params, activeTeamId, game) {
    super("SelectPlaybook", params, activeTeamId, game);

  }

  onStart(){

  }

  onActiveTeamStart() {
    let me = this;
    let attacker = this.game.getCharacter(this.params.attackingCharacterName);
    let defender = this.game.getCharacter(this.params.defendingCharacterName);

    this.UI.showPlayBook(attacker.PlayBookColumns, this.params.diceResults, defender.Defense).then(result => {
      me.game.applyActions(attacker, defender, _.map(result.PlaybookResultActions, a => a.Action));
    });
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
