import State from "./State";
import Inputs from "../Inputs"
import * as Controls from '../controls';

export default class MovePiece extends State{
  constructor(params,callback, game) {
    super("RollDice", params, game, 1500);

    if(callback)
      this.callback = callback.bind(game);

    let dice = [];

    params.results.forEach(function(result, i){
      var die = new Controls.DieControl(this.game.assets.getResult("die"));
      die.x = i * 125;
      die.y = 0;
      this.game.field.addChild(die);
      dice.push(die);
      die.roll(result, 1000, result >= params.goal);
    }, this);

    if(this.callback)
      setTimeout(() => callback(params.results) ,1500);

    setTimeout(() =>
      dice.forEach(function(die) {
        this.game.field.removeChild(die);
      }, this)
      , 4000);
  }

  handleInput(input, pieceId, evt){
  }
}
