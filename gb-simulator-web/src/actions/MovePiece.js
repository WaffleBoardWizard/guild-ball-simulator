import Action from "@/actions/Action";

export default class MovePiece extends Action{
  constructor(params, game){
    super("MovePiece", params, 500, game);
  }

  perform(instant){
    let character = this.game.getCharacter(this.params.characterName);
    if(character.x == 0 && character.y == 0)
      this.game.UI.addCharacter(character, this.params.to.x, this.params.to.y);

    this.game.UI.moveCharacterFromTo(character.Name, 0, 0, this.params.to.x, this.params.to.y, instant);

    character.x = this.params.to.x;
    character.y = this.params.to.y;
  }
}
