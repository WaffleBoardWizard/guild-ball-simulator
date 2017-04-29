import State from './State';
import * as States from './'
import * as Actions from "../actions";

export default class SetupCharacters extends State {
  constructor(params, activeTeamId, game) {
    super("SetupCharacters", params, activeTeamId, game);
  }

  onActiveTeamStart() {
    let me = this;
    let team = this.game.getTeam(this.params.team);
    let characters = team.Characters;

    this.game.UI.showMessage("Please Setup For Kick Off");
    this.game.highlightCharacters(characters);

    characters.forEach(character => {
      this.game.UI.moveCharacter(character).then(r => {
        character.x = r.x;
        character.y = r.y;

        me.game.addAction(new Actions.MovePiece({
          character: character.Name,
          from: {
            x: 0,
            y: 0
          },
          to: {
            x: r.x,
            y: r.y
          }
        }));
      }).catch(e => console.log(e));
    }, this);
  }

  onNonActiveTeamStart() {
    this.game.UI.showMessage("Please wait...");
  }

  onExit() {
    this.game.UI.clearMessage();
  }
}
