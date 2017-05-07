import State from "./State";
import * as Actions from "@/actions";
import * as States from "../States"

export default class KickOff extends State {
  constructor(params, activeTeamId, game) {
    super("KickOff", params, activeTeamId, game, 1000);
  }

  onStart(){
  }

  onActiveTeamStart(){
    let me = this;
    let character = this.game.getCharacter(me.params.characterName);
    this.game.UI.snapBallToCharacter(character);
    this.game.UI.kickBallFromCharacter(character)
      .then(ballCoords =>{
        me.game.addAction(new Actions.MoveBall({
          to: {
            x: ballCoords.x,
            y: ballCoords.y
          }
        }, me.game));

        if(me.game.playerTeam.Momentum > 0){
          me.game.switchState(new States.BonusTime({
            action: "Kick",
            nextState: {
              name: "RollKickDice",
              params: {
                characterName : me.params.characterName
              }
            }
          }, me.activeTeamId, me.game));
        } else{
          me.game.switchState(new States.RollKickForSuccess(
            {
              characterName : me.params.characterName,
              afterKickState: {
                name: "SetInfluence",
                params: {
                  teamId: me.game.getOpposingTeamId()
                },
                activeTeamId: me.game.getOpposingTeamId()
              }
            }, me.activeTeamId, me.game));
        }
      });
  }

  onExit(){
  }

}
