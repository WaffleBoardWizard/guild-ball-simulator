import MathHelper from './MathHelper';

export default  class  DiceHelper{
  static rollDice(numberOfDice, goal) {
    let results = [];

    for (var i = 0; i < numberOfDice; i++) {
      results.push(MathHelper.RandomNumber(1, 6));
    }

    if (results.length == 1)
      return results[0];

    return results;
  }

  static checkDiceResult(diceResults, goal) {
    let result = 0;
    if(Number.isInteger(diceResults))
    {
      if (diceResults >= goal)
        result++;
    } else {
      diceResults.forEach(function(d) {
        if (d >= goal)
          result++;
      });
    }
    return result;
  }
}
