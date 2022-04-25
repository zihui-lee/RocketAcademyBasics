//pop up
function PopUp(hideOrshow) {
  if (hideOrshow == "hide")
    document.getElementById("ac-wrapper").style.display = "none";
  else document.getElementById("ac-wrapper").removeAttribute("style");
}

//to force scroll from top upon page reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//pop up delay
window.onload = function () {
  setTimeout(function () {
    PopUp("show");
  });
};

//game mode
var gameMode = "default";

//player and computer's hand
var playerHand = [];
var computerHand = [];

//game deck
var deck = [];

//pop up results
function PopUpWinResult(hideOrshow) {
  if (hideOrshow == "hide")
    document.getElementById("ac-wrapper-win-result").style.display = "none";
  else
    document.getElementById("ac-wrapper-win-result").removeAttribute("style");
}

function PopUpLoseResult(hideOrshow) {
  if (hideOrshow == "hide")
    document.getElementById("ac-wrapper-lose-result").style.display = "none";
  else
    document.getElementById("ac-wrapper-lose-result").removeAttribute("style");
}

function PopUpTieResult(hideOrshow) {
  if (hideOrshow == "hide")
    document.getElementById("ac-wrapper-tie-result").style.display = "none";
  else
    document.getElementById("ac-wrapper-tie-result").removeAttribute("style");
}

//<-----------------------------------------helper functions-------------------------------------------------->
//make deck helper function
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["Diamonds", "Hearts", "Clubs", "Spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "Ace";
      } else if (cardName == 11) {
        cardName = "Jack";
      } else if (cardName == 12) {
        cardName = "Queen";
      } else if (cardName == 13) {
        cardName = "King";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

//shuffle deck helper function
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

//create new, shuffled deck
var createShuffledNewDeck = function () {
  var newDeck = makeDeck();
  var shuffledNewDeck = shuffleCards(newDeck);
  return shuffledNewDeck;
};

//calculate hand value
var calculateHandValue = function (handArray) {
  var handValue = 0;
  for (var i = 0; i < handArray.length; i += 1) {
    if (
      handArray[i].name == "Jack" ||
      handArray[i].name == "Queen" ||
      handArray[i].name == "King"
    ) {
      handValue += 10;
    } else if (handArray[i].name == "Ace") {
      handValue += 11;
    } else {
      handValue = handValue + handArray[i].rank;
    }
    if (handValue > 21 && handArray[i].name == "Ace") {
      handValue -= 10;
    }
  }
  return handValue;
};

//helper function to calculate value of last card drawn
var calculateLastDrawnCard = function (handArray) {
  var handValue = 0;
  if (
    handArray[handArray.length - 1].name == "Jack" ||
    handArray[handArray.length - 1].name == "Queen" ||
    handArray[handArray.length - 1].name == "King"
  ) {
    handValue += 10;
  } else if (handArray[handArray.length - 1].name == "Ace") {
    handValue += 11;
  } else {
    handValue = handValue + handArray[handArray.length - 1].rank;
  }
  if (
    calculateHandValue(handArray) > 21 &&
    handArray[handArray.length - 1].name == "Ace"
  ) {
    handValue -= 10;
  }

  return handValue;
};

//helper function to show player's hand in output
var outputPlayerHandFX = function (handArray) {
  var outputPlayerHandArray = [];
  for (var i = 0; i < handArray.length; i += 1) {
    outputPlayerHandArray.push(`${handArray[i].name} of ${handArray[i].suit}`);
  }
  return outputPlayerHandArray.join(", "); // this is a string because the join function outputs a string
};

//helper function to show computer's hand in output
var outputComHandFX = function (handArray) {
  var outputComHandArray = [];
  for (var i = 0; i < handArray.length; i += 1) {
    outputComHandArray.push(`${handArray[i].name} of ${handArray[i].suit}`);
  }
  return outputComHandArray.join(", "); // this is a string because the join function outputs a string
};

//helper function to check fo blackjack
var checkForBlackjack = function (handArray) {
  var isBlackjack =
    (calculateHandValue(handArray) == 21 && handArray[0].name == "Ace") ||
    (calculateHandValue(handArray) == 21 && handArray[1].name == "Ace");
  return isBlackjack;
};

//<-------------------------------------------------main function------------------------------------------>

var main = function (input) {
  var myOutputValue = "";
  //setting game modes that require user input
  if (input == "start") {
    gameMode = "start";
  } else if (input == "hit") {
    gameMode = "player hit";
  } else if (input == "stand") {
    gameMode = "player ends turn";
  } else if (input == "compare") {
    gameMode = "compare results";
  }
  //1.0 Game Starts - 1st click --> player and computer to draw 2 cards each
  if (gameMode == "start") {
    deck = createShuffledNewDeck();
    //1.1 2 cards dealt to player and computer
    playerHand.push(deck.pop());
    playerHand.push(deck.pop());
    computerHand.push(deck.pop());
    computerHand.push(deck.pop());

    //calculate player's hand value
    var currPlayerHandValue = calculateHandValue(playerHand);
    console.log(playerHand, currPlayerHandValue);
    console.log(gameMode);

    //output value as player's cards
    myOutputValue = `You have drawn ${outputPlayerHandFX(playerHand)}.<br>
    The total value of your hand is ${currPlayerHandValue}.<br>`;
    // check for blackjack
    if (checkForBlackjack(playerHand) == true) {
      myOutputValue =
        myOutputValue +
        `Congrats! You have gotten a Blackjack!<br>
      Click the 'STAND' button to continue.`;
      gameMode = "player ends turn";
      console.log(gameMode);
    } else {
      myOutputValue = myOutputValue + `<br>Do you want to hit or stand?`;
      gameMode = "awaiting input";
      console.log(gameMode);
    }
  }

  //2.0 Player decides to hit
  else if (gameMode == "player hit") {
    //2.1 Player draws new card, push into his hand array
    playerHand.push(deck.pop());
    //2.1.1 convert object to string to call out in output
    var newCardDrawn = playerHand[playerHand.length - 1];
    var newCard = [];
    //2.1.2 push into new array above
    newCard.push(`${newCardDrawn.name} of ${newCardDrawn.suit}`);
    currPlayerHandValue = calculateHandValue(playerHand);
    myOutputValue = `You have drawn ${newCard}.<br>
    You are currently holding ${outputPlayerHandFX(playerHand)}.<br>`;
    console.log(playerHand, currPlayerHandValue);
    //2.2 Determine hand value status
    //2.2.1 more than 21 --> lose
    if (currPlayerHandValue > 21) {
      myOutputValue =
        myOutputValue +
        `The total value of your hand is ${currPlayerHandValue}.<br><br>
        Unfortunately, your total value exceeded 21.<br>
        Click 'STAND' button to continue.`;
      //disable hit button after hitting 21
      document.getElementById("hit-button").disabled = true;
      gameMode = "player ends turn";
      console.log(gameMode);
    }

    //2.2.2 equals to 21 --> done
    else if (currPlayerHandValue == 21) {
      myOutputValue =
        myOutputValue +
        `Congrats! You have achieved the value of 21. <br>
        Please click the 'STAND' button for dealer's turn.`;
      //disable hit button after hitting 21
      document.getElementById("hit-button").disabled = true;
      gameMode = "player ends turn";
      console.log(gameMode);
    }

    ///2.2.3 less than 21 --> can choose to hit or stand
    else {
      myOutputValue =
        myOutputValue +
        `<br>The total value of your hand is ${currPlayerHandValue}.<br>Do you want to hit or stand?`;
      gameMode = "awaiting input";
      console.log(gameMode);
    }
  }

  //3.0 Computer's turn -- > player ends turn or player stands
  else if (gameMode == "player ends turn") {
    //calculate computer's hand value
    var currComHandValue = calculateHandValue(computerHand);
    //3.1 Loop to draw one card if current hand value is less than 17
    if (currComHandValue < 17) {
      while (currComHandValue < 17) {
        computerHand.push(deck.pop());
        currComHandValue =
          currComHandValue + calculateLastDrawnCard(computerHand);
      }
    } else {
      currComHandValue = calculateHandValue(computerHand);
    }
    myOutputValue = `Dealer has drawn ${outputComHandFX(computerHand)}.<br>
     The total value of dealer's hand is ${currComHandValue}.<br><br>
     Double-click the 'STAND' button to see results!`;
    console.log(computerHand, currComHandValue);
    console.log(gameMode);
  }

  //4.0 Compare results
  else if (gameMode == "compare results") {
    currPlayerHandValue = calculateHandValue(playerHand);
    currComHandValue = calculateHandValue(computerHand);
    myOutputValue = `Your cards: ${outputPlayerHandFX(playerHand)}<br>
    Your total hand value: ${currPlayerHandValue}<br><br>
    Dealer's cards: ${outputComHandFX(computerHand)}<br>
    Dealer's total hand value: ${currComHandValue}<br><br>`;
    console.log(checkForBlackjack(playerHand), checkForBlackjack(computerHand));
    // 4.1 both busted
    if (currPlayerHandValue > 21 && currComHandValue > 21) {
      myOutputValue += `It is a tie!`;
      setTimeout(function () {
        PopUpTieResult("show");
      });
    }
    // 4.2 both did not bust
    else if (currPlayerHandValue <= 21 && currComHandValue <= 21) {
      // 4.2.1 player has blackjack
      if (
        checkForBlackjack(playerHand) == true &&
        checkForBlackjack(computerHand) == false
      ) {
        myOutputValue += `You have gotten a Blackjack! You have won the game!`;
        setTimeout(function () {
          PopUpWinResult("show");
        });
      }
      // 4.2.2 dealer has blackjack
      else if (
        checkForBlackjack(playerHand) == false &&
        checkForBlackjack(computerHand) == true
      ) {
        myOutputValue += `Dealer has gotten a Blackjack! You have lost the game!`;
        setTimeout(function () {
          PopUpLoseResult("show");
        });
      }
      // 4.2.3 both have blackjacks
      else if (
        checkForBlackjack(playerHand) == true &&
        checkForBlackjack(computerHand) == true
      ) {
        myOutputValue += `Both of you have Blackjacks! It is a tie!`;
        setTimeout(function () {
          PopUpTieResult("show");
        });
      }
      // 4.2.4 both have same value but no blackjacks
      else if (
        playerHand == computerHand &&
        checkForBlackjack(playerHand) == false &&
        checkForBlackjack(computerHand) == false
      ) {
        myOutputValue += `It is a tie!`;
        setTimeout(function () {
          PopUpTieResult("show");
        });
      }
      // 4.2.5 no blackjacks and player > dealer
      else if (
        checkForBlackjack(playerHand) == false &&
        checkForBlackjack(computerHand) == false &&
        currPlayerHandValue > currComHandValue
      ) {
        myOutputValue += `You have won the game!`;
        setTimeout(function () {
          PopUpWinResult("show");
        });
      }
      // 4.2.6  no blackjacks and player < dealer
      else if (
        checkForBlackjack(playerHand) == false &&
        checkForBlackjack(computerHand) == false &&
        currPlayerHandValue < currComHandValue
      ) {
        myOutputValue += `You have lost the game!`;
        setTimeout(function () {
          PopUpLoseResult("show");
        });
      }
    }

    // 4.3 either one busted --> player busted
    else if (currPlayerHandValue > 21 && currComHandValue <= 21) {
      myOutputValue += `You have lost the game!`;
      setTimeout(function () {
        PopUpLoseResult("show");
      });
    }
    // 4.4 either one busted --> dealer busted
    else if (currPlayerHandValue <= 21 && currComHandValue > 21) {
      myOutputValue += `You have won the game!`;
      setTimeout(function () {
        PopUpWinResult("show");
      });
    }
  }

  return myOutputValue;
};
