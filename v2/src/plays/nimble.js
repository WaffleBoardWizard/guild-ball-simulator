import Play from './play'

export default class Nimble extends Play{
  constructor(character){
    super(character, "Nimble");
  }

  apply(){
    this.character.armor += 1;
  }

  remove(){
    this.character.armor -= 1;
  }
}
