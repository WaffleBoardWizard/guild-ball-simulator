export default class CharacterModel{
  constructor(params){
    this.name = params.name;
    this.meleeZone = params.meleeZone;
    this.jog = params.jog;
    this.sprint = params.sprint;
    this.tac = params.tac;
    this.kickDice = params.kickDice;
    this.kickLength = params.kickLength;
    this.defense = params.defense;
    this.armor = params.armor;
    this.influenceGenerating = params.influenceGenerating;
    this.influenceMax = params.influenceMax;
    this.tags = params.tags;
    this.maxHP = this.currentHP = params.maxHp;
    this.icySponge = params.icySponge;
    this.baseSize = params.baseSize;
    this.image = params.image;

    this.tempModifiers = [];
  }

  heal(amount){
    this.currentHP += amount;
  }

  damage(amount){
    this.currentHP -= amount;
  }

  isTakenOut(){
    return this.currentHP < 1;
  }

  setHp(hp){
    this.currentHP = hp;
  }

}
