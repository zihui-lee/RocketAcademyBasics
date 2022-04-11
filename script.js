/*Change the dice game so that it's even easier. If the user guess is within 2 of the dice roll, they still win.*/
var rollDice = function () {
  //generate a random decimal between 0 to 6 excluding 6
  var randomDecimal = Math.random() * 6;

  //remove decimal to make integer from 0 to 5 inclusive
  var randomInteger = Math.floor(randomDecimal);

  //add 1 to make random integer be between 1 to 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var rollDiceMain = function (input) {
  //default output
  var myOutputValue = "Please enter 'odd' or 'even'.";
  //output for correct rolls
  if (
    (input == "odd" && 
    (diceNumber == 1 ||
    diceNumber == 3 ||
    diceNumber == 5)
  ) {
    myOutputValue = "You are correct.";
  } 
  else if (
    (input == "even" && 
    (diceNumber == 2 ||
    diceNumber == 4 ||
    diceNumber == 6)
  ) {
    myOutputValue = "You are correct.";
  } else {
    myOutputValue = "You are wrong!";
  }
  return myOutputValue;
};
