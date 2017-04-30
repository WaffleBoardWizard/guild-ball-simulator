import Action from "./Action";

export default class SetTeamMomentum extends Action{
  constructor(params, game){
    super("SetTeamMomentum", params, 500, game);
  }

  perform(instant){
    let team = this.game.getTeam(this.params.teamId);
    team.Momentum = this.params.momentum;
  }
}
