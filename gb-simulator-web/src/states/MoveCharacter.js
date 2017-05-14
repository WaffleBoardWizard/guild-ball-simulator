import State from "./State";
import * as Actions from "@/actions";
import * as States from "../States"
import * as Boundaries from '@/helpers/boundary';

export default class MoveCharacter extends State {
  constructor(params, activeTeamId, game) {
    super("MoveCharacter", params, activeTeamId, game, 1000);

  }

  onStart(){
  }

  onActiveTeamStart(){
    let me = this;
    let character = this.game.getCharacter(me.params.characterName);
    let boundaries = [];

    this.game.UI.snapBallToCharacter(character);

    this.game.UI.advanceCharacter(character, this.params.length).then( movements =>{
      movements.forEach(m =>{
        me.game.addAction(new Actions.MovePiece({
          characterName: character.Name,
          from: {
            x: 0,
            y: 0
          },
          to: {
            x: m.x,
            y: m.y
          }
        }, me.game), true);
      });

      if(me.params.nextState){{
        me.params.nextState.params = me.params.nextState.params || {};
        me.game.switchState(new States[me.params.nextState.name](me.params.nextState.params, me.params.nextState.activeTeamId, me.game));
      }
      }
    });
  }

  onExit(){
  }

}
