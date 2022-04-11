var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;
  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);
  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = "you lose";
  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }
  return myOutputValue;
};
//track previous dice roll value
var prevDiceRoll = 0;

var lastRollMain = function (input) {
  // Create a version of the dice game that tells the user what their previous dice roll was.
  var myOutputValue = "";
  var randomDiceNumber = rollDice();
  console.log(
    `The previous dice roll is ${prevDiceRoll}. The current computer dice roll is ${randomDiceNumber}.`
  );
  //set the output for subsequent rolls
  if (prevDiceRoll != 0) {
    if (randomDiceNumber == input) {
      myOutputValue = `Your last roll was ${prevDiceRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
      prevDiceRoll = randomDiceNumber;
    } else {
      myOutputValue = `Your last roll was ${prevDiceRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
      prevDiceRoll = randomDiceNumber;
    }
    //set the output for 1st time rolls
  } else {
    if (randomDiceNumber == input) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
      prevDiceRoll = randomDiceNumber;
    } else {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
      prevDiceRoll = randomDiceNumber;
    }
  }
  return myOutputValue;
};
//global var for keeping count
var noOfWins = 0;
var noOfLosses = 0;
var totalRolls = noOfWins + noOfLosses;
var winningPercentage = Math.floor((noOfWins / totalRolls) * 100);

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = "";
  var randomDiceNumber = rollDice();
  //winning scenario for 1st time rolls
  if (noOfWins == 0 && noOfLosses == 0) {
    if (input == randomDiceNumber) {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
      noOfWins = noOfWins + 1;
      totalRolls = noOfWins + noOfLosses;
      winningPercentage = Math.floor((noOfWins / totalRolls) * 100);
    }
    //losing scenario for 1st time rolls
    else {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
      noOfLosses = noOfLosses + 1;
      totalRolls = noOfWins + noOfLosses;
      winningPercentage = Math.floor((noOfWins / totalRolls) * 100);
    }
  } else {
    //winning scenario for 2nd and above rolls
    if (input == randomDiceNumber) {
      noOfWins = noOfWins + 1;
      totalRolls = noOfWins + noOfLosses;
      winningPercentage = Math.floor((noOfWins / totalRolls) * 100);
      myOutputValue = `You win ${winningPercentage}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. You win!`;
    }
    //losing scenario for 2nd and above rolls
    else {
      noOfLosses = noOfLosses + 1;
      totalRolls = noOfWins + noOfLosses;
      winningPercentage = Math.floor((noOfWins / totalRolls) * 100);
      myOutputValue = `You win ${winningPercentage}% of the time. You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
    }
  }
  console.log(
    `The random dice number is ${randomDiceNumber}. The no. of wins is ${noOfWins}. The no. of losses is ${noOfLosses}. The total no. of rolls is ${totalRolls}.`
  );
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// we set the initial state of mode
var mode = "green";
// depending on the input, we will toggle mode states between green/blue
var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }

  return myOutputValue;
};

//set initial state of mode
var mode = "red";
//depending on input, can toggle mode states between red/green/blue
var redModeMain = function (input) {
  if (input == "redmode") {
    mode = "red";
  } else if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }
  var myOutputValue = "Red red red";
  // reassign the value of myOutPut Value when mode is blue or green
  if (mode == "green") {
    myOutputValue =
      "A fool sees not the same tree that a wise man sees. -William Blake";
  } else if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }
  return myOutputValue;
};
