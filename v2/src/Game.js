import * as States from './states';
import Inputs from "./Inputs";

export default class Game {
  constructor() {
    this.stage = null;
    this.characters = [];
    this.ball = null;
    this.field = null;
    this._currentState = null;
    this.assets = null;
    this.pieces = [];
    this.actions = [];
  }

  getPieceByType(type) {
    return _.filter(this.pieces, {
      type: type
    });
  }

  getPieces(ids) {
    return _.filter(this.pieces, x => _.includes(ids, x.id));
  }

  getPiece(id) {
    return _.find(this.pieces, {
      id: id
    });
  }

  reducePiecesToId(pieces) {
    return _.map(pieces, 'id');
  }

  switchState(state, skipAction) {
    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "State",
        params: state.params,
        state: state.state,
        replaySpeed: state.replaySpeed
      });
    }

    if (this._currentState)
      this._currentState.onExit();

    this._currentState = state;
    this._currentState.onStart();
  }

  replayState(actions) {
    let state = null;
    switch (actions.state) {
      case "RollDice":
        state = States.RollDice;
        break;
      case "MovePiece":
        state = States.MovePiece;
        break;
      case "SelectPiece":
        state = States.SelectPiece;
        break;
      case "CharacterMenu":
        state = States.CharacterMenu;
        break;
      default:
    }

    this.switchState(new state(actions.params, null, this), true);
  }

  replayInput(actions) {
    let input = null;
    switch (actions.input) {
      case Inputs.PIECE_DRAG:
        input = this.pressMovePiece;
        break;
      case Inputs.PIECE_CLICK:
        input = this.clickPiece;
        break;
      case Inputs.CLICK_MENU_BUTTON:
        input = this.menuButtonClick;
        break;
      default:
    }

    input.bind(this)(actions.params, true);
  }


  replay() {
    let replayTime = 0;
    this.actions.forEach((a, i) => {
      setTimeout(() => {
          switch (a.type) {
            case "State":
              this.replayState(a)
              break;
            case "Input":
              this.replayInput(a)
              break;
            default:
          }
        },
        replayTime);

      replayTime += a.replaySpeed;
    });
  }
}
