import Measurements from '../common/Measurements';

export default class CharacterModel{

  constructor(params){
    this.Name = params.Name;
    this.MeleeZone = params.MeleeZone;
    this.Jog = params.Jog;
    this.Sprint = params.Sprint;
    this.TAC = params.TAC;
    this.KickDice = params.KickDice;
    this.KickLength = params.KickLength;
    this.Defense = params.Defense;
    this.Armor = params.Armor;
    this.InfluenceStart = params.InfluenceStart;
    this.InfluenceMax = params.InfluenceMax;
    this.Keywords = params.Keywords;
    this.MaxHealth = params.Health || params.MaxHealth;
    this.CurrentHP = params.Health || params.CurrentHP;
    this.IcySponge = params.IcySponge;
    this.Size = params.Size;
    this.Image = params.Name + "png";

    this.tempModifiers = [];

    this.PlayBookColumns = params.PlayBookColumns;


    this.Conditions = [];

    this.onHealthChangeEventHandlers = [];
    this.onConditionsChangeEventHandlers =[];
  }

  heal(amount){
    this.CurrentHP += amount;
    this.fireOnHealthChange();
  }

  damage(amount){
    this.CurrentHP -= amount;
    this.fireOnHealthChange(-amount);
  }

  isTakenOut(){
    return this.CurrentHP < 1;
  }

  setHp(hp){
    this.CurrentHP = hp;
    this.fireOnHealthChange();
  }

  addOnHealthChange(func){
    this.onHealthChangeEventHandlers.push(func);
  }

  addOnConditionsChangeChange(func){
    this.onConditionsChangeEventHandlers.push(func);
  }

  addCondition(condition){
    console.log(this);
    this.Conditions.push(condition);
    this.applyConditionsModifiers(condition);
    this.fireOnConditionAdded(condition);
    console.log(this);
  }

  applyConditionsModifiers(condition){
    condition.Modifiers.forEach( m => this.modifyCharacterStat( m.Stat, m.Value), this);
  }

  modifyCharacterStat(name, value){
    debugger;
    this[name] += value;
  }

  fireOnHealthChange(change){
    this.onHealthChangeEventHandlers.forEach(function(func){
      func(change);
    }, this);
  }

  fireOnConditionAdded(condition){
    this.onConditionsChangeEventHandlers.forEach(function(func){
      func(condition);
    }, this);
  }

}
