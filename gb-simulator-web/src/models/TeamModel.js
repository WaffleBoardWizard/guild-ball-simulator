export  default class TeamModel{
  constructor(params){
    this.PlayerName = params.PlayerName;
    this.Characters = params.Characters;
    this.Color = params.Color;
    this.Point = params.Points || 0;
    this.Influence = params.Influence || 0;
    this.Momentum  = params.Momentum || 0;
  }
}
