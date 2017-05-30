import State from './State';
import * as States from './';
import * as Actions from "@/actions";

export default class ActivateCharacter extends State {
  constructor(params, activeTeamId, game) {
    super("ActivateCharacter", params, activeTeamId, game, 0);
    this.characterName = params.characterName;
    this.character = this.game.getCharacter(params.characterName);
  }

  onActiveTeamStart(){
    let c = this.game.getEnemyCharactersInRangeOfCharacter(this.character, this.character.MeleeZone + this.character.Sprint);

    console.log(c);
    let me = this;
    let actions = [
      {
        Name: "Jog",
        action: function(){
          me.game.addAction(new Actions.CharacterHasAdvanced({characterName: me.character.Name, HasAdvanced : true}, me.game));

          me.game.switchState(new States.MoveCharacter({
            characterName : me.character.Name,
            length: me.character.Jog,
            nextState :{
              name: "ActivateCharacter",
              params: {
                characterName: me.character.Name
              },
              activeTeamId: me.activeTeamId
            }
          }, me.activeTeamId, me.game));
        },
        disabled : me.character.Turn.HasAdvanced,
        cost: 0,
        range: me.character.Jog
      },
      {
        Name: "Sprint",
        action: function(){
          me.game.addAction(new Actions.CharacterHasAdvanced({characterName:  me.character.Name, HasAdvanced : true}, me.game));
          me.game.addAction(new Actions.SetCharacterInfluence({characterName:  me.character.Name, Influence :  me.character.Influence - 1}, me.game));

          me.game.switchState(new States.MoveCharacter({
            characterName : me.character.Name,
            length: me.character.Sprint,
            nextState :{
              name: "ActivateCharacter",
              params: {
                characterName: me.character.Name
              },
              activeTeamId: me.activeTeamId
            }
          }, me.activeTeamId, me.game));
        },
        disabled : me.character.Turn.HasAdvanced || me.character.influence < 1,
        cost : 1,
        range: me.character.Sprint
      },
      {
        Name: "Attack",
        action: function(){
          let charactersInRange = me.game.getEnemyCharactersInRangeOfCharacter(me.character, me.character.MeleeZone);

          me.game.UI.selectCharacter(charactersInRange)
            .then( selectedCharacter =>
              {
                //TODO: Calculate Cost, Characters like Ghast can take up to two to attack
                me.game.addAction(new Actions.SetCharacterInfluence({characterName:  me.character.Name, Influence :  me.character.Influence - 1}, me.game));
                if(me.game.getCurrentTeam().Momentum > 0){
                  me.game.switchState(new States.BonusTime({
                    action: "Attack",
                    nextState: {
                      name: "RollAttack",
                      params: {
                        attackingCharacterName : me.params.attackingCharacterName,
                        defendingCharacterName : me.params.defendingCharacterName
                      },
                      activeTeamId: me.activeTeamId
                    }
                  }, me.activeTeamId, me.game));
                } else{

                me.game.switchState(new States.RollAttack({
                    attackingCharacterName : me.params.attackingCharacterName,
                    defendingCharacterName : me.params.defendingCharacterName,
                    bonusTime : false
                },me.activeTeamId, me.game));
              }
              })
            .catch( x => console.log(x));
        },
        disabled : me.character.influence < 1 ||
                  me.game.getEnemyCharactersInRangeOfCharacter(me.character, me.character.MeleeZone).length == 0,
        cost : 1,
        range: me.character.MeleeZone
      },
      {
        Name: "Charge",
        action: function(){
          me.game.UI.moveCharacter(me.character)
          .then( r => console.log(r))
          .catch( e => console.log(e));
        },
        disabled :me.character.Turn.HasAdvanced ||
                  me.character.Influence < 2  ||
                  me.game.getEnemyCharactersInRangeOfCharacter(me.character, me.character.MeleeZone + me.character.Sprint).length == 0,
        cost : 2,
        range: me.character.Sprint + me.character.MeleeZone
      },
      {
        Name: "Character Plays",
        action: function(){
          me.character.Health += 4;
        },
        disabled : true,
        cost : '?'
      },
      {
        Name: "Traits",
        action: function(){
          me.character.Health += 4;
        },
        disabled : false,
        cost : '?'
      },
      {
        Name: "Take a Breather Lad!",
        action: function(){
          me.character.Health += 4;
        },
        disabled : false,
        cost : '?'
      },
      {
        Name: "Come On Mate!",
        action: function(){
          me.character.Health += 4;
        },
        disabled : false,
        cost : '?'
      },
      {
        Name: "Finish Activation",
        action: () =>{
          me.game.addAction(new Actions.setCharacterAsActivated({characterName: me.character.Name, Activated : true}, me.game));

        },
        disabled : false,
        cost : null
      }

    ]

    //this.game.setCharacterAsActivated(this.character);
    this.game.UI.showCharacterActions(this.character, actions);
  }

  onExit(){
  }
}
