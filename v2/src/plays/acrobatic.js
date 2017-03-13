import Play from './play'
import Measurements from './common/Measurements';

export default class Acrobatic extends Play{
  constructor(character){
    super(character, "Acrobatic");
  }

  apply(){
    this.game.switchState(new States.MovePiece(character.id, Measurements.Inch));
  }

  remove(){
  }
}
