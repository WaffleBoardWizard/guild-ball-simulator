import Action from "@/actions/Action";

export default class SetTeamSide extends Action{
  constructor(params, game){
    super("SetTeamSide", params, 50, game);
  }

  perform(instant){
    let team = this.game.getTeam(this.params.teamId);
    team.Side = this.params.side;
  }
}
