import State from './State';
import * as States from './'
import * as Actions from "@/actions";

export default class Template extends State {
  constructor(params, activeTeamId, game) {
    super("Template", params, activeTeamId, game);
  }

  onStart(){

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
