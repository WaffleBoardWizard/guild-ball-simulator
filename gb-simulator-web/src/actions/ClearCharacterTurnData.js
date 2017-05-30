import Action from "@/actions/Action";

export default class ClearCharacterTurnData extends Action{
  constructor(params, game){
    super("ClearCharacterTurnData", params, 50, game);
  }

  perform(instant){
    let character = this.game.getCharacter(this.params.characterName);
    character.Turn = {};
  }
}
