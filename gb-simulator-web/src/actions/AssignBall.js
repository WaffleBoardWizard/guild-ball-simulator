import Action from "./Action";

export default class AssignBall extends Action{
  constructor(params, game){
    super("AssignBall", params, 200, game);
  }

  perform(instant){
    let character = this.game.getCharacter(this.params.characterId);
    character.HasBall = true;

    if(!instant)
      this.game.UI.showCharacterMessage(character, "Has Ball");
  }
}
