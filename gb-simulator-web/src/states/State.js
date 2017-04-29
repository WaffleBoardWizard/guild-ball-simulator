export default class State{
  constructor(state, params, activeTeamId, game){
    this.id = Math.floor(Math.random() * 10000000000);
    this.game = game;
    this.state = state;
    this.params = params
    this.activeTeamId = activeTeamId;
  }
  onStart(){
  }

  onActiveTeamStart(){
  }

  onNonActiveTeamStart(){
  }

  onExit(){
  }

  onActiveTeamExit(){
  }

  onNonActiveTeamExit(){
  }
}
