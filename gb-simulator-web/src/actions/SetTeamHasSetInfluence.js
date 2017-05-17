import Action from "@/actions/Action";

export default class SetTeamHasSetInfluence extends Action{
  constructor(params, game){
    super("SetTeamHasSetInfluence", params, 50, game);
  }

  perform(instant){
    let team = this.game.getTeam(this.params.teamId);
    team.HasSetInfluence = this.params.HasSetInfluence;
  }
}
