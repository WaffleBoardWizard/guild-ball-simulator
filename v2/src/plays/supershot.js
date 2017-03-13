import Play from './play'

export default class SuperSh extends Play{
  constructor(character){
    super(character, "Acrobatic");
  }

  apply(){
    this.game.switchState(new States.MovePiece(character.id, Measurements.Inch));
  }

  remove(){
  }
}
