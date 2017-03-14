import Measurements from '../common/Measurements';

export default class CharacterModel{
  constructor(params){
    this.Name = params.Name;
    this.MeleeZone = params.MeleeZone;
    this.Jog = params.jog;
    this.Sprint = params.sprint;
    this.TAC = params.tac;
    this.KickDice = params.kickDice;
    this.KickLength = params.kickLength;
    this.Defense = params.defense;
    this.Armor = params.armor;
    this.InfluenceStart = params.InfluenceStart;
    this.InfluenceMax = params.InfluenceMax;
    this.Keywords = params.Keywords;
    this.MaxHealth = this.CurrentHP = params.Health;
    this.IcySponge = params.IcySponge;
    this.Size = params.Size * Measurements.MM;
    this.Image = params.Name + "png";

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
