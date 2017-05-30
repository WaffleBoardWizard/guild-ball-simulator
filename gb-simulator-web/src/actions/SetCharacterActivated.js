import Action from "@/actions/Action";

export default class SetCharacterActivated extends Action{
  constructor(params, game){
    super("SetCharacterActivated", params, 50, game);
  }

  perform(instant){
    let character = this.game.getCharacter(this.params.characterName);
    character.Turn.Activated = this.params.Activated;
  }
}
