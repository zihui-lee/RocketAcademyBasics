var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
/*Hawker food is a convenient and affordable food option in Singapore. To help educate non-Singaporeans about hawker food, create an app that takes a hawker dish name as input, and tells users whether the dish has a "rice", "noodle", or "other" base. Some sample dishes are: "chicken rice", "roti prata", "nasi lemak", "hokkien mee", "bak kut teh", and "laksa".
For example, if a user enters "laksa", the program should output "noodle". If a user enters "roti prata", the program could output "other".
Please use the || operator.
*/
var hawkerFoodCategorisationMain = function (dishName) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  //default myOutput Value
  var myOutputValue = "Please input a dish name.";
  dishNameLowerCase = dishName.toLowerCase();
  if (
    dishNameLowerCase == "chicken rice" ||
    dishLowerCaseName == "nasi lemak"
  ) {
    myOutputValue = `You input ${dishName}. It is a Rice Meal.`;
  } else if (
    dishNameLowerCase == "laksa" ||
    dishLowerCaseName == "hokkien mee"
  ) {
    myOutputValue = `You input ${dishName}. It is a Noodles Meal.`;
  } else {
    myOutputValue = `You input ${dishName}. It is others.`;
  }
  return myOutputValue;
};

/*4D is a popular betting game in Singapore run by Singapore Pools. Rocket Academy does not endorse gambling.

Create a version of 4D where the player wins if their guess matches any of the 4 digits. The player will input a single digit, and the computer generates 4 random digits between 0 and 9. If the player-inputted digit matches any of the randomly-generated digits, the player wins.

In addition to the win/loss result, output the player guess and all randomly-generated digits so the player can see how close they were.
*/
var generateNumber = function () {
  var diceNumber = Math.floor(Math.random() * 10);
  return diceNumber;
};
var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  //input = parseInt(input, 10);
  var isInteger = Number.isInteger(input);
  var rollOne = generateNumber();
  var rollTwo = generateNumber();
  var rollThree = generateNumber();
  var rollFour = generateNumber();
  console.log(rollOne, rollTwo, rollThree, rollFour);
  var myOutputValue = "Please input a number between 0 and 9.";
  if ((input > 9 || input < 0) && isInteger) {
    myOutputValue = "Please input a number between 0 and 9.";
  } else if (
    input == rollOne ||
    input == rollTwo ||
    input == rollThree ||
    input == rollFour
  ) {
    myOutputValue = `You won! Your input is ${input} and the winning numbers are ${rollOne}, ${rollTwo}, ${rollThree}, ${rollFour}.`;
  } else {
    myOutputValue = `You lost! Your input is ${input} and the winning numbers are ${rollOne}, ${rollTwo}, ${rollThree}, ${rollFour}.`;
  }

  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
