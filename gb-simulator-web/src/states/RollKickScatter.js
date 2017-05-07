import State from './State';
import * as States from './'
import * as Actions from "@/actions";
import MathHelper from '@/Helpers/MathHelper';

export default class RollKickScatter extends State {
  constructor(params, activeTeamId, game) {
    super("RollKickScatter", params, activeTeamId, game);
  }

  onStart(){
    let direction = this.game.rollDice(1);
    let distance = this.game.rollDice(1);

    this.game.addLog({
      direction: direction,
      distance: distance,
    }, 'KickScatterRollLog');

    let character = this.game.getCharacter(this.params.characterName);
    let angle = Math.atan2(this.game.gameData.Ball.y - character.y, this.game.gameData.Ball.x- character.x) * 180 / Math.PI;

    if(direction > 3)
      direction++;

    let coord = MathHelper.CalculateXYWithDistanceAndAngle(distance, (22.5 * direction) + angle - 90);


    this.game.addAction(new Actions.MoveBall({
      to: {
        x: coord.x + this.game.gameData.Ball.x,
        y: coord.y + this.game.gameData.Ball.y
      }
    }, this.game));

    this.game.switchState(new States[this.params.afterKickState.name](this.params.afterKickState.params, this.params.afterKickState.activeTeamId, this.game));

  }

  onActiveTeamStart() {

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
