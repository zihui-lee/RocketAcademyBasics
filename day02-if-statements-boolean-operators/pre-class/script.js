/*Write a program that takes in as input the number of expected guests for a party, and outputs the number of oranges required to make enough Orange Juice for all guests.
To begin, assume:
It takes 4 oranges to make a glass of orange juice. 
Each guest will drink 2 glasses of Orange Juice on average. 
Subsequently, edit the functions written such that it takes in both the number of guests as well as the number of glasses per guest as input, and produces the same output: oranges required.
*/
var orangeJuiceMain = function (noOfGuests) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var noOfOrangesPerGlass = 4;
  var noOfGlassesPerGuest = 2;
  var noOfOrangesRequired =
    noOfGuests * noOfOrangesPerGlass * noOfGlassesPerGuest;
  return `The number of oranges required for ${noOfGuests} guests is ${noOfOrangesRequired}.`;
};

/*Estimate the price of painting the interior of your home. The user will enter a dollar amount of paint per litre and the app will calculate how much it will cost.
To begin, assume that:
 Each room in your 6-room house has the same area to be painted: 3m x 3m. 
Paint will cover 300 square meters per litre. 
You want to apply 2 coats of paint.
Edit the function(s) such that the number of rooms, and the number of coats to be painted are also variables that are taken in as input.
*/
var paintMain = function (dollarAmountofPaintPerLitre, noOfRooms, noOfCoats) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var area = 3 * 3;
  var areaPerLitre = 300;
  var price =
    (dollarAmountofPaintPerLitre * area * noOfRooms * noOfCoats) / 300;
  return `The cost of paint would be $${price}.`;
};

var rollDice = function () {
  //Generate a decimal from 0 to 6, inclusive of 0 and exclusive of 6
  var randomDecimal = Math.random() * 6;

  //remove decimal with floor operation --> convert to integer between 0 to 5
  var randomInteger = Math.floor(randomDecimal);

  //add 1 to get valid dice rolls of 1 to 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = `You just rolled a ${randomDiceNumber}!`;
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  //set a default value
  var myOutputValue = "hello world";
  if (
    input == "neat noodles" ||
    input == "awesome ayam" ||
    input == "delicious dumplings"
  ) {
    myOutputValue = "in your area";
  } else if (input == "im jisoo im ok") {
  }
  //return myOutputValue as output
  return myOutputValue;
};

var rollDice = function () {
  //Generate a decimal from 0 to 6, inclusive of 0 and exclusive of 6
  var randomDecimal = Math.random() * 6;

  //remove decimal with floor operation --> convert to integer between 0 to 5
  var randomInteger = Math.floor(randomDecimal);

  //add 1 to get valid dice rolls of 1 to 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = `You have input ${input}. Your guess is wrong. The correct number is ${randomDiceNumber}.`;
  //if input matches the correct, then return correct answer.
  if (input == randomDiceNumber) {
    var myOutputValue = `You have input ${input}. Your guess is correct!`;
  }
  return myOutputValue;
};

/*Update our dice game logic such that the user wins if the dice roll is 2 times the guess, e.g. a guess of 1 and roll of 2, a guess of 2 and roll of 4, etc. To win this updated game for a 6-sided dice, the user should only guess numbers between 1 and 3, but the game does not restrict what the user can guess.
 */
var rollDice = function () {
  //generate a random decimal between 0 to 6 excluding 6
  var randomDecimal = Math.random() * 6;

  //remove decimal to make integer from 0 to 5 inclusive
  var randomInteger = Math.floor(randomDecimal);

  //add 1 to make random integer be between 1 to 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  //set default output
  var myOutputValue = `You have input ${input}. The dice number rolled is ${diceNumber}. Your guess is wrong.`;

  if (input == diceNumber / 2) {
    var myOutputValue = `You have input ${input}. Your dice number rolled is ${diceNumber}. Your guess is correct!`;
  } else if (input == diceNumber / 3) {
    var myOutputValue = `You have input ${input}. Your dice number rolled is ${diceNumber}. You are close!`;
  } else {
    var myOutputValue = `You are wrong!`;
  }
  return myOutputValue;
};
