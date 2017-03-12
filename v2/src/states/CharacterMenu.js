import * as States from './';
import State from "./State";
import Inputs from "../Inputs";
import MenuControl from "../controls/MenuControl";
import FontAwesomeIcons from '../common/FontAwesomeIcons';
import * as Controls from '../controls';

export default class CharacterMenu extends State {
  constructor(characterId, callback, game) {
    super("CharacterMenu", characterId, game, 2000);
    this.characterId = characterId;
    this.character = this.game.getPiece(characterId);

    this.menuButtons = this.menuFactory(this.character, this.game);

    this.menu = new Controls.MenuControl(this.character,
        "circle",
        this.menuButtons,
        this.character.properties.baseSize,
        this.game.field);
  }

  onStart() {
    this.menu.show();
  }

  onExit() {
    if(this.menu.isOpen)
      this.menu.hide(null, true);
  }

  handleInput(input, buttonId) {
    switch (input) {
      case Inputs.CLICK_MENU_BUTTON:
      debugger
        let btn = _.find(this.menuButtons, {id : buttonId});
        if(btn){
          this.menu.hide(buttonId - 1);
          btn.action();
        }
        break;
      default:
    }
  }

  menuFactory(character, scope) {
    return [{
        id: 1,
        Name: "Confirm",
        Icon: FontAwesomeIcons.check,
        click: function() {
          scope.menuButtonClick(1);
        },
        action: function(){
          let showmenu = scope.showCharacterMenu.bind(scope, character.id);
          scope.switchState(new States.MovePiece({ pieceId : character.id,  x : character.x, y : character.y, speed: 1}, showmenu, scope));
        }
      }, {
        id: 2,
        Name: "Kick",
        Icon: FontAwesomeIcons.undo,
        click: function() {
          scope.menuButtonClick(2);
        },
        action : function(){
          scope.kickBall(character);
        }
      },
      {
        id: 3,
        Name: "Undo",
        Icon: FontAwesomeIcons.check,
        click: function() {
          scope.menuButtonClick(3);
        }
      }
    ];
  }
}
