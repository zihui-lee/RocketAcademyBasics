var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardMain = function (input) {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardQueenWinnerMain = function (input) {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardHandsMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/*Implement the chat bot described above, that asks a yes/no/maybe question and can respond to a user's response of "yes", "no", or "maybe".*/

var answersAndResponses = {
  yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
  no: "Oh ok, just normally happy ;)",
  maybe: "It seems the very thought of coding makes people happy!"
};

var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var myOutputValue = answersAndResponses[input];
  return myOutputValue;
};

/*Extend the capabilities of the chat bot by storing question and answer text in the same object, like the following.*/

var questionAndAnswerSets = [
  {
    question:
      "Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)",
    answers: {
      yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
      no: "Oh ok, just normally happy ;)",
      maybe: "It seems the very thought of coding makes people happy!"
    }
  },
  {
    question:
      "Do you enjoy coding most during the day, night, or both? (day/night/both)",
    answers: {
      day:
        "Ah yes, when the sun is high in the sky, I can feel its energy too.",
      night: "Under the calm and gentle moon, I also find my focus.",
      both: "Indeed, I could code 24/7 if I didn't have to sleep!"
    }
  }
];

//game mode in order to alternate
var mode = "trigger question 1";
var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var myOutputValue = "";

  //display question 1 upon first click
  if (mode == "trigger question 1") {
    myOutputValue = questionAndAnswerSets[0].question;
    mode = "user input answer 1";
    // user to enter first answer
  } else if (mode == "user input answer 1") {
    myOutputValue = questionAndAnswerSets[0].answers[input];
    mode = "trigger question 2";
    //display question 2 upon next click
  } else if (mode == "trigger question 2") {
    myOutputValue = questionAndAnswerSets[1].question;
    mode = "user input answer 2";
    // user eo tner second answer
  } else {
    myOutputValue = questionAndAnswerSets[1].answers[input];
  }
  return myOutputValue;
};

/*Add a new chat bot question that asks for the user's name and responds with a sentence containing the user's name. After greeting the user, the chat bot proceeds with the question from previous exercises.*/

//starting mode
var mode = "start";
var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var myOutputValue = "";

  //ask for username upon first click
  if (mode == "start") {
    myOutputValue = `Hello! What is your name?`;
    mode = "trigger question 1";
  }
  //display question 1 after username
  else if (mode == "trigger question 1") {
    myOutputValue = `Hello ${input}! ${questionAndAnswerSets[0].question}`;
    mode = "user input answer 1";
    // user to enter first answer
  } else if (mode == "user input answer 1") {
    myOutputValue = questionAndAnswerSets[0].answers[input];
    mode = "trigger question 2";
    //display question 2 upon next click
  } else if (mode == "trigger question 2") {
    myOutputValue = questionAndAnswerSets[1].question;
    mode = "user input answer 2";
    // user eo tner second answer
  } else {
    myOutputValue = questionAndAnswerSets[1].answers[input];
  }
  return myOutputValue;
};

/*Update the chat bot to ask for the user's age after their name. The chat bot's response will differ based on the user's age. For example, we can respond with different outputs if the user is under 20, between 20-60, and above 60.*/

//starting mode
var mode = "start";
var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var myOutputValue = "";

  //ask for username upon first click
  if (mode == "start") {
    myOutputValue = `Hello! What is your name?`;
    mode = "age";
  }
  //ask for age
  else if (mode == "age") {
    myOutputValue = `Hello ${input}! How old are you?`;
    mode = "age question";
  } else if (mode == "age question") {
    //age < 20
    if (input < 20) {
      myOutputValue = `You are so young! ${questionAndAnswerSets[0].question}`;
    } else if (input >= 20 || input <= 60) {
      myOutputValue = `Having the time of your life I see! ${questionAndAnswerSets[0].question}`;
    } else {
      myOutputValue = `What a wise age! ${questionAndAnswerSets[0].question}`;
    }
    mode = "user input answer 1";

    // user to enter first answer
  } else if (mode == "user input answer 1") {
    myOutputValue = questionAndAnswerSets[0].answers[input];
    mode = "trigger question 2";
    //display question 2 upon next click
  } else if (mode == "trigger question 2") {
    myOutputValue = questionAndAnswerSets[1].question;
    mode = "user input answer 2";
    // user eo tner second answer
  } else {
    myOutputValue = questionAndAnswerSets[1].answers[input];
  }
  return myOutputValue;
};

/*Update our chat bot answer set array to be an object whose keys are answer set IDs and values are answer sets. Also add a nextQuestion key to each answer set object, whose value is always an answer set ID, enabling us to chain question sequences in a named manner. This doesn't add new functionality beyond ordering questions using an array, but it sets up the next exercise Dynamic Chat Bot.*/

var questionAndAnswerSets = {
  hasBeenCoding: {
    question:
      "Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)",
    answers: {
      yes: `Wow! Me too! I've been working on the Blackjack project. Makes my day!`,
      no: "Oh ok, just normally happy ;)",
      maybe: "It seems the very thought of coding makes people happy!"
    },
    nextQuestionId: "timeOfDay"
  },
  timeOfDay: {
    question:
      "Do you enjoy coding most during the day, night, or both? (day/night/both)",
    answers: {
      day:
        "Ah yes, when the sun is high in the sky, I can feel its energy too.",
      night: "Under the calm and gentle moon, I also find my focus.",
      both: "Indeed, I could code 24/7 if I didn't have to sleep!"
    },
    nextQuestionId: "weather"
  },
  weather: {
    question: "Are you most productive when it's sunny or raining? (sun/rain)",
    answers: {
      sun: "The sun warms my heart and powers me to code.",
      rain: "The rain washes away my distractions and allows me to focus."
    },
    nextQuestionId: "hasBeenCoding"
  }
};

//will skip this question
var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/*Update our chat bot to choose a next question based on the answer that the user gives. This next question's ID can be stored in the object that corresponds to the user's answer. See the following sample answer set collection for inspiration. Note that some questions have nextQuestionId nested within specific answers, and other question have nextQuestionId fixed for the question.*/

var questionAndAnswerSets = {
  hasBeenCoding: {
    question:
      "Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)",
    answers: {
      yes: {
        response:
          "Wow! Me too! I've been working on the Blackjack project. Makes my day!",
        nextQuestionId: "timeOfDay"
      },
      no: {
        response: "Oh ok, just normally happy ;)",
        nextQuestionId: "happiness"
      }
    }
  },
  timeOfDay: {
    question:
      "Do you enjoy coding most during the day, night, or both? (day/night/both)",
    answers: {
      day:
        "Ah yes, when the sun is high in the sky, I can feel its energy too.",
      night: "Under the calm and gentle moon, I also find my focus.",
      both: "Indeed, I could code 24/7 if I didn't have to sleep!"
    },
    nextQuestionId: "weather"
  },
  weather: {
    question: "Are you most productive when it's sunny or raining? (sun/rain)",
    answers: {
      sun: "The sun warms my heart and powers me to code.",
      rain: "The rain washes away my distractions and allows me to focus."
    },
    nextQuestionId: "hasBeenCoding"
  },
  happiness: {
    question: "Do arrays or objects make you happier? (arrays/objects)",
    answers: {
      arrays: "I knew it, arrays are my favourite too.",
      objects: "You're good at coding- objects are hard!"
    },
    nextQuestionId: "timeOfDay"
  }
};

//game modes
var mode = "start";
var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = "";
  if (mode == "start") {
    //trigger question 1
    myOutputValue = questionAndAnswerSets["hasBeenCoding"].question;
    mode = "user input first answer";
  } else if (mode == "user input first answer") {
    myOutputValue =
      questionAndAnswerSets["hasBeenCoding"].answers[input].response;
  }
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
