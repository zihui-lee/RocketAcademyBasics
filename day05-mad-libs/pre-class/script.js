// Store guesses in a global array that persists across Submits.
var guesses = [];

//roll dice function
var rollDice = function () {
  //Generate a decimal from 0 to 6, inclusive of 0 and exclusive of 6
  var randomDecimal = Math.random() * 6;

  //remove decimal with floor operation --> convert to integer between 0 to 5
  var randomInteger = Math.floor(randomDecimal);

  //add 1 to get valid dice rolls of 1 to 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var followArraysMain = function (input) {
  // Add the user's guess to the guesses array.
  guesses.push(input);

  // Generate a random dice number.
  var randomDiceNumber = rollDice();

  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  var myOutputValue = "You lose. Your guesses: " + guesses;

  // If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == input) {
    myOutputValue = "You win. Your guesses: " + guesses;
  }
  // Return output value.
  console.log(`User: ${input}, Computer: ${randomDiceNumber}`);
  return myOutputValue;
};

// Initialise an empty names array
var names = [];

var followArraysLoopsMain = function (input) {
  // Set a boolean value found to a default value of false
  var found = false;

  // Loop over the names array, and set found to true if the input name already
  // exists in the names array
  var index = 0;

  for (var index = 0; index < names.length; index += 1) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
  }

  // If no duplicate name was found, add the input name to the names array
  if (!found) {
    names.push(input);
  }

  // Return the full array of names
  var myOutputValue = "All names: " + names;
  return myOutputValue;
};
