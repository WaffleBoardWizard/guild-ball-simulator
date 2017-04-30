import Action from "./Action";

export default class FinishSetup extends Action{
  constructor(params, game){
    super("FinishSetup", params, 0, game);
  }

  perform(instant){
    let team = this.game.getTeam(this.params.teamId);
    team.HasSetup = true;
  }
}
