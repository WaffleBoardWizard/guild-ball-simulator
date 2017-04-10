import * as States from './states';
import Inputs from "./Inputs";

export default class Game {
  constructor(canvasId) {
    this.stage = null;
    this.assets = null;
    this.pieces = [];
    this.canvasId = canvasId;
    }

  initialize(assets) {
      //GET RID OF
      this.assets = assets;
      this.createStage(canvasId);
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

  placePieceOnTop(piece) {
    this.stage.swapChildren(piece, this.stage.getChildAt(this.stage.numChildren - 1));
  }


  createStage(canvasId) {
    this.stage = new createjs.Stage("demoCanvas");
    createjs.Touch.enable(this.stage, false, true);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", this.stage);
    this.stage.enableMouseOver(20);
  }


  bindInputsToPiece(piece) {
    piece.on("pressmove", function(evt) {
      this.pressMovePiece({
        pieceId: piece.id,
        mouseX: evt.rawX,
        mouseY: evt.rawY
      });
    }, this);

    piece.on("click", function(evt) {
      this.clickPiece({
        pieceId: piece.id
      });
    }, this);

    piece.on("mouseup", function(evt) {}, this);

    piece.on("mousedown", function(evt) {}, this);
  }

  addPieceToField(piece, x, y) {
    piece.x = x;
    piece.y = y;

    this.pieces.push(piece)
    this.bindInputsToPiece(piece);
    this.stage.addChild(piece);

    this.switchState(new States.MovePiece({
        pieceId: piece.id,
        x: x,
        y: y,
        speed: 1
      },
      null,
      this));
  }

  showMessage(message, color) {
    var me = this;
    var text = new createjs.Text(message, "64px Arial", color || "red");
    text.set({
      textAlign: "center",
      textBaseline: "middle"
    });

    //TODO figure out better way to calculate this.
    text.x = 33.33 * 18;
    text.y = 33.33 * 18;

    this.stage.addChild(text);

    createjs.Tween.get(text).to({
      alpha: 0.5
    }, 2000);

    createjs.Tween.get(text, {
      loop: false
    }).to({
      scaleX: 1.5,
      scaleY: 1.5
    }, 2000, createjs.Ease.getPowInOut(4)).call(function() {
      me.field.removeChild(text);
    })
  }


  //INPUT HANDLERS
  clickPiece(params, skipAction) {
    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "Input",
        params: params,
        input: Inputs.PIECE_CLICK,
        replaySpeed: 1
      });
    }

    this._currentState.handleInput(Inputs.PIECE_CLICK, params.pieceId);
  }

  pressMovePiece(params, skipAction) {
    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "Input",
        params: params,
        input: Inputs.PIECE_DRAG,
        replaySpeed: 10
      });
    }

    this._currentState.handleInput(Inputs.PIECE_DRAG, params.pieceId, {
      mouseX: params.mouseX,
      mouseY: params.mouseY
    });
  }

  menuButtonClick(buttonId, skipAction) {
    if (!skipAction) {
      this.actions.push({
        id: this.actions.length + 1,
        type: "Input",
        params: buttonId,
        input: Inputs.CLICK_MENU_BUTTON,
        replaySpeed: 1000
      });
    }

    this._currentState.handleInput(Inputs.CLICK_MENU_BUTTON, buttonId);
  }
  //END INPUT HANDLERS

  movePiece(piece, x, y) {
    this.switchState(new States.MovePiece({
        pieceId: piece.id,
        x: x,
        y: y,
        speed: 1000
      },
      null,
      this));
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
    this.switchState(new States[actions.state](actions.params, null, this), true);
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
            case "SetCharacterData":
              this.loadCharacters(a.params);
            default:
          }
        },
        replayTime);

      replayTime += a.replaySpeed;
    });
  }
}
