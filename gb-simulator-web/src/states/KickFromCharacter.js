import State from './State';
import * as States from './'
import * as Actions from "@/actions";

export default class KickFromCharacter extends State {
  constructor(params, activeTeamId, game) {
    super("KickFromCharacter", params, activeTeamId, game);
  }

  onStart(){

  }

  onActiveTeamStart() {
    let me = this;
    let character = this.game.getCharacter(this.params.characterName);
    let team = this.game.getTeam(this.activeTeamId);

    this.game.UI.snapBallToCharacter(character);

    this.game.UI.kickBallFromCharacter(character, character.KickLength)
      .then(ballCoords =>{
        me.game.addAction(new Actions.MoveBall({
          to: {
            x: ballCoords.x,
            y: ballCoords.y
          }
        }, me.game), true);

        if(team.Momentum > 0){
          me.game.switchState(new States.BonusTime({
            action: "Kick",
            nextState: {
              name: "RollKickForSuccess",
              params: {
                characterName : character.Name
              },
              activeTeamId: me.activeTeamId
            }
          }, me.activeTeamId, me.game));
        } else{
          me.game.switchState(new States.RollKickForSuccess(
            {
              characterName : me.params.characterName,
              afterKickState: me.params.afterKickState
            }, me.activeTeamId, me.game), true);
        }
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
