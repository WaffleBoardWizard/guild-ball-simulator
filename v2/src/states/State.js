export default class State{
  constructor(state, params, game, replaySpeed){
    this.game = game;
    this.state = state;
    this.params = params
    this.replaySpeed =  replaySpeed;
  }

  onStart(){

  }

  onExit(){

  }

  handleInput(input, params){
  }
}
