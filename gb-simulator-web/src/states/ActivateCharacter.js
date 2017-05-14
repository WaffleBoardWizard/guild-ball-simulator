import State from './State';
import * as States from './';

export default class ActivateCharacter extends State {
  constructor(params, activeTeamId, game) {
    super("ActivateCharacter", params, activeTeamId, game, 0);
    this.characterName = params.characterName;
    this.character = this.game.getCharacter(params.characterName);
  }

  onActiveTeamStart(){
    console.log(this.character.Sprint)
    let me = this;
    let actions = [
      {
        Name: "Jog",
        action: function(){
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
        disabled : me.character.Turn.advanced,
        cost: 0
      },
      {
        Name: "Sprint",
        action: function(){
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
        disabled : me.character.Turn.advanced || me.character.influence < 1,
        cost : 1
      },
      {
        Name: "Attack",
        action: function(){
          me.game.UI.selectCharacter(me.game.teams[1].Characters)
            .then( selectedCharacter => me.game.attackPlayer(me.character, selectedCharacter))
            .catch( x => console.log(x));
        },
        disabled : me.character.influence < 1,
        cost : 1
      },
      {
        Name: "Charge",
        action: function(){
          me.game.UI.moveCharacter(me.character)
          .then( r => console.log(r))
          .catch( e => console.log(e));
        },
        disabled : me.character.influence < 2,
        cost : 2
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
      }
    ]
    this.game.setCharacterAsActivated(this.character);
    this.game.highlightCharacters([this.character], "green");
    this.game.showCharacterActions(this.character, actions);
  }

  onExit(){
  }
}
