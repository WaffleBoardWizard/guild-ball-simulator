import Action from "./Action";

export default class Log extends Action{
  constructor(params, game){
    super("Log", params, 200, game);
  }

  perform(){
    this.game.gameData.Logs.push(Object.assign({}, this.params));
  }
}
