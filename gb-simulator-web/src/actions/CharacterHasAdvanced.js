import Action from "@/actions/Action";

export default class CharacterHasAdvanced extends Action{
  constructor(params, game){
    super("CharacterHasAdvanced", params, 50, game);
  }

  perform(instant){
    let character = this.game.getCharacter(this.params.characterName);
    character.Turn.HasAdvanced = this.params.HasAdvanced;
  }
}
