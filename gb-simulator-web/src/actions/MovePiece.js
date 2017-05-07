import Action from "@/actions/Action";

export default class MovePiece extends Action{
  constructor(params, game){
    super("MovePiece", params, 500, game);
  }

  perform(instant){
    this.game.UI.moveCharacterFromTo(this.params.character, this.params.from.x, this.params.from.y, this.params.to.x, this.params.to.y, instant);
  }
}
