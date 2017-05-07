import State from './State';
import * as States from './'
import * as Actions from "@/actions";

export default class SetupCharacters extends State {
  constructor(params, activeTeamId, game) {
    super("SetupCharacters", params, activeTeamId, game);
  }

  onActiveTeamStart() {
    let me = this;
    let team = this.game.getTeam(this.activeTeamId);
    let characters = team.Characters;

    this.game.UI.showMessage("Please Setup For Kick Off");
    this.game.highlightCharacters(characters);

    this.game.UI.setupCharacters(characters, null).then( () => {
      characters.forEach( character => {
        me.game.addAction(new Actions.MovePiece({
          character: character.Name,
          from: {
            x: 0,
            y: 0
          },
          to: {
            x: character.x,
            y: character.y
          }
        }, me.game));
      });

      me.game.addAction(new Actions.FinishSetup({teamId: me.activeTeamId}, me.game));

      if(me.params && me.params.kicking)
        me.game.switchState(new States.AssignKicker(null, me.activeTeamId, me.game));
      else{
        let opposingTeam = me.game.getOpposingTeam();
        if(opposingTeam.HasSetup)
          me.game.switchState(new States.MoveCharacter({
            characterName : me.game.getCharacterThatHasBall().Name,
            nextState : "KickOff"
          }, me.game.getOpposingTeamId(), me.game));
        else
          me.game.switchState(new States.SetupCharacters(null, me.game.getOpposingTeamId(), me.game));
      }
    })
    .catch( x => console.log(x));
  }

  onNonActiveTeamStart() {
    this.game.UI.showMessage("Please wait...");
  }

  onActiveTeamExit(){
    let team = this.game.getTeam(this.activeTeamId);
    let characters = team.Characters;

    this.game.stopHilightingCharacters(characters);
  }
  onExit() {
    this.game.UI.clearMessage();
  }
}
