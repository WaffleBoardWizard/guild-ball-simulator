import Action from "@/actions/Action";

export default class SetCharacterInfluence extends Action{
  constructor(params, game){
    super("SetCharacterInfluence", params, 50, game);
  }

  perform(instant){
    let character = this.game.getCharacter(this.params.characterName);
    character.Influence = this.params.Influence;
  }
}
