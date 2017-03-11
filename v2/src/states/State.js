export default class State{
  constructor(state, game){
    this.game = game;
    this.state = state;
  }
  handleInput(input, params){
  }

  save(input, params){
    this.game.SaveAction(input,params);
  }
}
