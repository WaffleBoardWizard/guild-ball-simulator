import Action from "@/actions/Action";

export default class AddCharacterToField extends Action{
  constructor(params, game){
    super("AddCharacterToField", params, 0, game);
  }

  perform(instant){
    let character = this.game.getCharacter(this.params.characterName);
    this.game.UI.addCharacter(character, this.params.x, this.params.y);
    character.x = this.params.x;
    character.y = this.params.y;
  }
}
