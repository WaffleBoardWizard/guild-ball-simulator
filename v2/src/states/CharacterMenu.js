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

    let menu = this.menuFactory(this.character, this.game);

    this.menu = new Controls.MenuControl(this.character,
        "circle",
        menu,
        this.character.properties.baseSize,
        this.game.field);
  }

  onStart() {
    this.menu.show();
  }

  onExit() {
    this.menu.hide();
  }

  handleInput(input, pieceId) {
  }

  menuFactory(character, scope) {
    return [{
        Name: "Confirm",
        Icon: FontAwesomeIcons.check,
        click: function(btn, displayObject) {
          let showmenu = scope.showCharacterMenu.bind(scope, character.id);
          scope.switchState(new States.MovePiece({ pieceId : character.id,  x : character.x, y : character.y},
            showmenu,
            scope));
          return true;
        }
      }, {
        Name: "Kick",
        Icon: FontAwesomeIcons.undo,
        click: function(btn, displayObject) {
          scope.kickBall(character);
          return true;
        }
      },
      {
        Name: "Undo",
        Icon: FontAwesomeIcons.check,
        click: function(btn, displayObject) {
          return true;
        }
      }
    ];
  }
}
