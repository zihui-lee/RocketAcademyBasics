/*
Use loops to create an app that draws emojis into the grey box.
The user will enter a number of characters to display on the screen.
*/
var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var myOutputValue = "";
  //declare counter
  var counter = 1;
  //while loop to run until input
  while (counter <= input) {
    // Add 1 🚀 to the output for every loop iteration.
    myOutputValue += "🚀";
    counter += 1;
    console.log(counter);
  }

  return myOutputValue;
};

/*The user will enter the dimensions of a square to display on the screen.
Use a loop within a loop and the <br /> HTML tag in your output to create the square.
 */
var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var myOutputValue = "";
  //declare row counter
  var counterRow = 1;
  //row counter while loop
  while (counterRow <= input) {
    //declare column counter
    var counterCol = 1;
    //column counter while loop
    while (counterCol <= input) {
      //add 1 🚀 to column counter
      myOutputValue += "🚀";
      counterCol += 1;
    }
    //add 1 🚀 to row counter
    myOutputValue += "<br>";
    counterRow += 1;
  }
  return myOutputValue;
};

/*The user will enter the dimensions of a triangle to display on the screen.‌
Use a loop within a loop and the <br /> HTML tag in your output to create the triangle.
 */
var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = "";
  //declare row counter
  var counterRow = 1;
  //row counter while loop
  while (counterRow <= input) {
    //declare column counter
    var counterCol = 1;
    //column counter while loop
    while (counterCol <= counterRow) {
      //add 1 🚀 to column counter
      myOutputValue += "🚀";
      counterCol += 1;
    }

    //add 1 <br> to row counter
    myOutputValue += "<br>";
    counterRow += 1;
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
