import State from './State';
import * as States from './'
import * as Actions from "@/actions";
import MathHelper from '@/Helpers/MathHelper';
import DiceHelper from '@/Helpers/DiceHelper';

export default class RollKickScatter extends State {
  constructor(params, activeTeamId, game) {
    super("RollKickScatter", params, activeTeamId, game);
  }

  onActiveTeamStart(){
    let me = this;
    let direction = DiceHelper.rollDice(1);
    let distance = DiceHelper.rollDice(1);

    this.game.addLog({
      direction: direction,
      distance: distance,
    }, 'KickScatterRollLog');

    let character = this.game.getCharacter(this.params.characterName);
    let angle = Math.atan2(this.game.gameData.Ball.y - character.y, this.game.gameData.Ball.x- character.x) * 180 / Math.PI;

    if(direction > 3)
      direction++;

    let coord = MathHelper.CalculateXYWithDistanceAndAngle(distance, (22.5 * direction) + angle - 90);
    let currentBallX = this.game.gameData.Ball.x;
    let currentBallY = this.game.gameData.Ball.y;
    let kickAction = new Actions.MoveBall({
      to: {
        x: coord.x + currentBallX,
        y: coord.y + currentBallY
      }
    }, this.game);

    kickAction.perform();
    if(me.params.allowReroll){
      me.game.UI.showConfirm("Reroll", "Would you like to reroll?")
        .then( confirm =>{
          if(confirm)
          {
            new Actions.MoveBall({
              to: {
                x: currentBallX,
                y: currentBallY
              }
            }, this.game).perform();

            setTimeout(()=>{
              me.params.allowReroll = false
              me.game.switchState(new States.RollKickScatter(this.params, this.activeTeamId, this.game), true);
            }, 500);
          }
          else{
            me.game.addAction(kickAction, true);
            this.nextState();
          }
        })
        .catch( e => console.log(e))
    } else {
      me.game.addAction(kickAction, true);
      this.nextState();
    }

  }

  nextState(){
    this.game.switchState(new States[this.params.afterKickState.name](this.params.afterKickState.params, this.params.afterKickState.activeTeamId, this.game));
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
