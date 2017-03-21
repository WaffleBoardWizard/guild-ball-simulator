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
      this.character.character.Size,
      this.game.field);
  }

  onStart() {
    this.menu.show();
  }

  onExit() {
    if (this.menu.isOpen)
      this.menu.hide(null, true);
  }

  handleInput(input, buttonId) {
    switch (input) {
      case Inputs.CLICK_MENU_BUTTON:
        let btn = _.find(this.menuButtons, {
          id: buttonId
        });
        if (btn) {
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
        action: function() {
          let activateCharacters = scope.activateCharacterInGroup.bind(scope, scope.reducePiecesToId(scope.getPieceByType("character")));
          scope.switchState(new States.MovePiece({
            pieceId: character.id,
            x: character.x,
            y: character.y,
            speed: 1,
            message: "Jog",
          }, activateCharacters, scope));
        }
      }, {
        id: 2,
        Name: "Kick",
        Icon: FontAwesomeIcons.undo,
        click: function() {
          scope.menuButtonClick(2);
        },
        action: function() {
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
      },
      {
        id: 4,
        Name: "Attack",
        Icon: FontAwesomeIcons.fighterjet,
        click: function() {
          scope.menuButtonClick(4);
        },
        action: function() {
          scope.attackPlayer(character);
        }
      },
      {
        id: 5,
        Name: "Character Plays",
        Icon: FontAwesomeIcons.map,
        click: function() {
          scope.menuButtonClick(5);
        },
        action: function() {
          scope.showCharacterPlays(character.character)
            .then( p => console.log(p))
            .catch( ex => console.log(ex));
        }
      }
    ];
  }
}
