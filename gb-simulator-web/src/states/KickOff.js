import State from "./State";
import * as Actions from "@/actions";
import * as States from "../States"

export default class KickOff extends State {
  constructor(params, activeTeamId, game) {
    super("KickOff", params, activeTeamId, game);
  }

  onStart(){
  }

  onActiveTeamStart(){
    let me = this;
    let character = me.game.getCharacterThatHasBall();

    me.game.switchState(new States.MoveCharacter({
      characterName : character.Name,
      length: character.Jog,
      nextState :{
        name: "KickFromCharacter",
        params: {
          characterName: character.Name,
          afterKickState :{
             name: "SetInfluence",
             params: {
               teamId: me.game.getOpposingTeamId()
             },
             activeTeamId: me.game.getOpposingTeamId()
          }
        },
        activeTeamId: me.activeTeamId
      }
    }, me.activeTeamId, me.game));
  }

  onExit(){
  }

}
