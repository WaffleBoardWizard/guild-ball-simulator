import State from "./State";

export default class StartingGame extends State {
  constructor(params, game) {
    super("StartingGame", params, game, 500);
  }

  onStart() {
    this.game.UI.showMessage("Waiting for Other Players...");
  }

  onExit() {
    this.game.UI.clearMessage();
  }

  handleInput(input, pieceId) {
  }
}
