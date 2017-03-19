import Play from './play'
import Measurements from './common/Measurements';

export default class SuperShot extends Play{
  constructor(character){
    super(character, "SuperShot");
  }

  apply(){
    this.character.kickDice += 1;
    this.character.kickLength += Measurements.Inch;
  }

  remove(){
    this.character.armor += 1;
    this.character.kickLength -= Measurements.Inch;
  }
}
