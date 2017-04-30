import State from "./State";
import Inputs from "../Inputs"
import * as Actions from "../Actions"
import * as States from "../States"

export default class MoveCharacter extends State {
  constructor(params, activeTeamId, game) {
    super("MoveCharacter", params, activeTeamId, game, 1000);

  }

  onStart(){
  }

  onActiveTeamStart(){
    let me = this;
    let character = this.game.getCharacter(me.params.characterName);
    this.game.UI.snapBallToCharacter(character);

    this.game.UI.moveCharacter(character).promise.then( r =>{
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
      }, me.game));

      if(me.params.nextState){
        me.game.switchState(new States[me.params.nextState]({ characterName : me.params.characterName }, me.activeTeamId, me.game));
      }
    });
  }

  onExit(){
  }

}
