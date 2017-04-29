import State from "./State";

export default class StartingGame extends State {
  constructor(params, activeTeamId, game) {
    super("StartingGame", params, activeTeamId, game, 500);
  }

  onStart() {
    this.game.UI.showMessage("Waiting for Other Players...");
  }

  onExit() {
    this.game.UI.clearMessage();
  }
}
