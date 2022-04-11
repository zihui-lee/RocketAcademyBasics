//set the starting modes
var mode = "player 1 rolls dice";
var player1DiceRolls = [];
var player2DiceRolls = [];
var playersCombinedNumbers = [];
var player1Score = 0;
var player2Score = 0;

//generate dice roll 1
var rollDice1 = function () {
  //Generate a decimal from 0 to 6, inclusive of 0 and exclusive of 6
  var randomDecimal = Math.random() * 6;

  //remove decimal with floor operation --> convert to integer between 0 to 5
  var randomInteger = Math.floor(randomDecimal);

  //add 1 to get valid dice rolls of 1 to 6 inclusive
  var diceNumber = randomInteger + 1;
  return diceNumber;
};
//generate dice roll 2
var rollDice2 = function () {
  //Generate a decimal from 0 to 6, inclusive of 0 and exclusive of 6
  var randomDecimal2 = Math.random() * 6;

  //remove decimal with floor operation --> convert to integer between 0 to 5
  var randomInteger2 = Math.floor(randomDecimal2);

  //add 1 to get valid dice rolls of 1 to 6 inclusive
  var diceNumber2 = randomInteger2 + 1;
  return diceNumber2;
};

var main = function (input) {
  var myOutputValue = "";
  //1.0 first mode: player 1 rolls dice
  if (mode == "player 1 rolls dice") {
    var diceRoll1 = rollDice1();
    var diceRoll2 = rollDice2();
    //push dice roll entries into player 1's array
    player1DiceRolls.push(diceRoll1, diceRoll2);
    myOutputValue = `Player 1️⃣, you rolled <b>${diceRoll1}</b> for Dice One and <b>${diceRoll2}</b> for Dice Two. <br> Choose the order of the dice by entering '1' for Dice One and '2' for Dice Two.`;
    //to display in console log the most recent 2 rolls 2
    console.log(
      `Player 1's Dice Rolls: ${
        player1DiceRolls[player1DiceRolls.length - 2]
      }, ${player1DiceRolls[player1DiceRolls.length - 1]}`
    );
    mode = "player 1 picks order";
  }
  //2.0 second mode: player 1 chooses order of dice
  else if (mode == "player 1 picks order") {
    //2.1 player 1's first option: player 1 chooses dice roll 1 as first numberal
    if (input == 1) {
      //concatenate and transform into number
      var player1Number1 = Number(
        `${player1DiceRolls[player1DiceRolls.length - 2]}${
          player1DiceRolls[player1DiceRolls.length - 1]
        }`
      );
      myOutputValue = `Player 1️⃣, you have chosen Dice One first. <br> Your number is <b>${player1Number1}</b>.`;
      //save player 1's combined number in array
      playersCombinedNumbers.push(player1Number1);
      //to display most recent player 1's number
      console.log(
        `Player 1's number: ${
          playersCombinedNumbers[playersCombinedNumbers.length - 1]
        }`
      );
      mode = "player 2 rolls dice";
    }
    //2.2 player 1's second option: player 1 chooses dice roll 2 as first numberal
    else if (input == 2) {
      //concatenate and transform into number
      var player1Number2 = Number(
        `${player1DiceRolls[player1DiceRolls.length - 1]}${
          player1DiceRolls[player1DiceRolls.length - 2]
        }`
      );
      myOutputValue = `Player 1️⃣, you have chosen Dice Two first. <br> Your number is <b>${player1Number2}</b>.`;
      //save player 1's combined number in array
      playersCombinedNumbers.push(player1Number2);
      //to display most recent player 1's number
      console.log(
        `Player 1's number: ${
          playersCombinedNumbers[playersCombinedNumbers.length - 1]
        }`
      );
      mode = "player 2 rolls dice";
    } else {
      myOutputValue = `⚠️Error! Please enter only '1' or '2'.⚠️`;
    }
  }
  //3.0 third mode: player 2 rolls dice
  else if (mode == "player 2 rolls dice") {
    var diceRoll1 = rollDice1();
    var diceRoll2 = rollDice2();
    //push dice roll entries into player 1's array
    player2DiceRolls.push(diceRoll1, diceRoll2);
    myOutputValue = `Welcome Player 2️⃣. <br> You rolled <b>${diceRoll1}</b> for Dice One and <b>${diceRoll2}</b> for Dice Two. <br> Choose the order of the dice by entering '1' for Dice One and '2' for Dice Two.`;
    console.log(
      `Player 2's Dice Rolls: ${
        player2DiceRolls[player2DiceRolls.length - 2]
      }, ${player2DiceRolls[player2DiceRolls.length - 1]}`
    );
    mode = "player 2 picks order";
  }
  //4.0 fourth mode: player 2 chooses order of dice
  else if (mode == "player 2 picks order") {
    //4.1 player 2's first option: player 2 chooses dice roll 1 as first numberal
    if (input == 1) {
      //concatenate and transform into number
      var player2Number1 = Number(
        `${player2DiceRolls[player2DiceRolls.length - 2]}${
          player2DiceRolls[player2DiceRolls.length - 1]
        }`
      );
      myOutputValue = `Player 2️⃣, you have chosen Dice One first. <br> Your number is <b>${player2Number1}.</b>`;
      //save player 2's combined number in array
      playersCombinedNumbers.push(player2Number1);
      console.log(
        `Player 2's number: ${
          playersCombinedNumbers[playersCombinedNumbers.length - 1]
        }`
      );
      mode = "comparing player 1 and 2";
    }
    //4.2 player 2's second option: player 2 chooses dice roll 2 as first numberal
    else if (input == 2) {
      //concatenate and transform into number
      var player2Number2 = Number(
        `${player2DiceRolls[player2DiceRolls.length - 1]}${
          player2DiceRolls[player2DiceRolls.length - 2]
        }`
      );
      myOutputValue = `Player 2️⃣, you have chosen Dice Two first. <br> Your number is <b>${player2Number2}.</b>`;
      //save player 2's combined number in array
      playersCombinedNumbers.push(player2Number2);
      console.log(
        `Player 2's number: ${
          playersCombinedNumbers[playersCombinedNumbers.length - 1]
        }`
      );
      mode = "comparing player 1 and 2";
    } else {
      myOutputValue = `⚠️Error! Please enter only '1' or '2'.⚠️`;
    }
  }
  //5.0 fifth mode: comparing player 1 and 2's combined numbers and determining win
  else {
    //5.1 Scenario 1: if player 1's combined number is higher
    if (
      playersCombinedNumbers[playersCombinedNumbers.length - 2] >
      playersCombinedNumbers[playersCombinedNumbers.length - 1]
    ) {
      player1Score += 1;
      myOutputValue = `Player 1️⃣'s number is <b>${
        playersCombinedNumbers[playersCombinedNumbers.length - 2]
      }</b> and Player 2️⃣'s number is <b>${
        playersCombinedNumbers[playersCombinedNumbers.length - 1]
      }</b>. <br> Congrats Player 1️⃣ for winning this round!🎉🎊 <br> Click 'Next' to start the next round of game. <br><br> 
      🏆<u><b>Leaderboard</u></b>🏆<br>
      Player 1️⃣: ${player1Score}<br>
      Player 2️⃣: ${player2Score}`;
      mode = "player 1 rolls dice";
    }
    //5.2 Scenario 2: if player 2's combined number is higher
    else {
      player2Score += 1;
      myOutputValue = `Player 1️⃣'s number is ${
        playersCombinedNumbers[playersCombinedNumbers.length - 2]
      } and Player 2️⃣'s number is ${
        playersCombinedNumbers[playersCombinedNumbers.length - 1]
      }. <br> Congrats Player 2️⃣ for winning this round!🎉🎊 <br> Click 'Submit' to start the next round of game. <br><br> 
      🏆<u><b>Leaderboard</u></b>🏆<br>
      Player 1️⃣: ${player1Score}<br>
      Player 2️⃣: ${player2Score}`;
      mode = "player 1 rolls dice";
    }
  }
  return myOutputValue;
};
