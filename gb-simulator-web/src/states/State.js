export default class State{
  //do not emit used when states do not ask for user input
  constructor(state, params, activeTeamId, game, doNotEmit){
    this.id = Math.floor(Math.random() * 10000000000);
    this.game = game;
    this.state = state;
    this.params = params
    this.activeTeamId = activeTeamId;
    this.doNotEmit = doNotEmit;
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
