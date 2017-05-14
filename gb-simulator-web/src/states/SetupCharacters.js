import State from './State';
import * as States from './'
import * as Actions from "@/actions";
import * as Boundaries from '@/helpers/boundary';

export default class SetupCharacters extends State {
  constructor(params, activeTeamId, game) {
    super("SetupCharacters", params, activeTeamId, game);
  }

  onActiveTeamStart() {
    let me = this;
    let team = this.game.getTeam(this.activeTeamId);
    let characters = team.Characters;
    console.log("loading characters");
    this.game.loadTeamsCharactersOnSide(team);
    this.game.UI.showMessage("Please Setup For Kick Off");
    this.game.highlightCharacters(characters);
    let boundaries = [];

    if(team.Side == "North")
      boundaries.push( new Boundaries.Box(0, 36, 0, 10));
    else if (team.Side == "South")
      boundaries.push( new Boundaries.Box(0, 36, 26, 36));

    this.game.UI.setupCharacters(characters, boundaries).then( () => {
      characters.forEach( character => {
        me.game.addAction(new Actions.MovePiece({
          characterName: character.Name,
          to: {
            x: character.x,
            y: character.y
          }
        }, me.game), true);
      });

      me.game.addAction(new Actions.FinishSetup({teamId: me.activeTeamId}, me.game));

      if(me.params && me.params.kicking)
        me.game.switchState(new States.AssignKicker(null, me.activeTeamId, me.game));
      else{
        let opposingTeam = me.game.getOpposingTeam();
        if(opposingTeam.HasSetup)
          me.game.switchState(new States.KickOff({
            characterName : me.game.getCharacterThatHasBall().Name
          }, opposingTeam.PlayerName, me.game));
        else
          me.game.switchState(new States.SetupCharacters(null, opposingTeam.PlayerName, me.game));
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
