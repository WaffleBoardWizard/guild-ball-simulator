import Action from "./Action";

export default class MoveBall extends Action{
  constructor(params, game){
    super("MoveBall", params, 500, game);
  }

  perform(instant){
    this.game.UI.moveBall(this.params.to.x, this.params.to.y, instant);
    this.game.gameData.Ball.x = this.params.to.x;
    this.game.gameData.Ball.y = this.params.to.y;

  }
}
