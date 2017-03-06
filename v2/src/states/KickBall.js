import State from "./State";
import Inputs from "../Inputs";
import MenuControl from "../controls/MenuControl";
import FontAwesomeIcons from '../common/FontAwesomeIcons';

export default class SelectCharacterState extends State{
  constructor(characters, game) {
    super(game);
    this.game.illuminateCharacters(characters);
  }

  menuFactory(character) {
    return [{
        Name: "Confirm",
        Icon: FontAwesomeIcons.check,
        click: function(btn, displayObject) {
          return true;
        }
      }, {
        Name: "Kick",
        Icon: FontAwesomeIcons.undo,
        click: function(btn, displayObject) {
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
  };

  handleInput(input, character){
    var menu = this.menuFactory(character);

    switch (input) {
      case Inputs.CHARACTER_SELECTED:
        this.game.stopIllumatingAllCharacters();
        new MenuControl(character, "circle", menu, character.properties.baseSize, this.game.field).show();
        break;
      default:
    }
  }
}
