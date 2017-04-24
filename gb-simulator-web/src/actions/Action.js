export default class Action{
  constructor(name, params, replaySpeed, game){
    this.name = name;
    this.params = params
    this.replaySpeed =  replaySpeed;
    this.game = game;
  }

  perform(){

  }

  toJson(){
    return JSON.stringify(this);
  }
}
