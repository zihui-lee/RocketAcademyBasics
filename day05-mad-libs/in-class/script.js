//generate random index from an array
var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

//starting modes
var mode = "inputMode";
var adjectivesBank = [];

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  var myOutputValue = "";
  //mode: adding adjectives
  if (mode == "inputMode" && input != "create") {
    adjectivesBank.push(input);
    myOutputValue = `Your adjectives: ${adjectivesBank}`;
    console.log(`Current mode: ${mode}
Adjectives: ${adjectivesBank}`);
  } else if (input == "create") {
    var randomAdjective = adjectivesBank[getRandomIndex(adjectivesBank.length)];
    console.log(`Random adjective: ${randomAdjective}`);
    myOutputValue = `WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdjective} wife.`;
    mode = "create";
  }
  return myOutputValue;
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var myOutputValue = "";
  //mode: adding adjectives
  if (mode == "inputMode" && input != "create") {
    adjectivesBank.push(input);
    myOutputValue = `Your adjectives: ${adjectivesBank}`;
    console.log(`Current mode: ${mode}
Adjectives: ${adjectivesBank}`);
  } else if (input == "create") {
    var randomAdjective = adjectivesBank[getRandomIndex(adjectivesBank.length)];
    console.log(`Random adjective: ${randomAdjective}`);
    myOutputValue = `WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdjective} wife.`;
    mode = "create";
  }
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "";
  //mode: adding multiple adjectives
  if (mode == "inputMode" && input != "create") {
    //split the multiple words
    var splitAdj = input.split(" ");
    // push each word into the adjectives bank array separately
    for (var i = 0; i < splitAdj.length; i += 1) {
      adjectivesBank.push(splitAdj[i]);
    }
    myOutputValue = `Your adjectives: ${adjectivesBank}`;
    console.log(`Current mode: ${mode}
Adjectives: ${adjectivesBank}`);
  } else if (input == "create") {
    var randomAdjective = adjectivesBank[getRandomIndex(adjectivesBank.length)];
    myOutputValue = `WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdjective} wife.`;
    mode = "create";
  }
  return myOutputValue;
};

//starting modes
var mode = "inputNounMode";
var adjectivesBank = [];
var nounsBank = [];

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "";
  //mode: adding multiple nouns
  if (mode == "inputNounMode" && input != "create") {
    //split the multiple words
    var splitNoun = input.split(" ");
    // push each word into the noun bank array separately
    for (var i = 0; i < splitNoun.length; i += 1) {
      nounsBank.push(splitNoun[i]);
    }
    myOutputValue = `Your nouns: ${nounsBank}<br> Now input your adjectives!`;
    console.log(`Current mode: ${mode}
Nouns: ${nounsBank}`);
    mode = "inputAdjMode";
  }
  //mode: adding multiple adjectives
  else if (mode == "inputAdjMode" && input != "create") {
    var splitAdj = input.split(" ");
    // push each word into the adjectives bank array separately
    for (var i = 0; i < splitAdj.length; i += 1) {
      adjectivesBank.push(splitAdj[i]);
    }
    myOutputValue = `Your adjectives: ${adjectivesBank}`;
    console.log(`Current mode: ${mode}
Adjectives: ${adjectivesBank}`);
  } else if (input == "create") {
    var randomNoun = nounsBank[getRandomIndex(nounsBank.length)];
    var randomAdjective = adjectivesBank[getRandomIndex(adjectivesBank.length)];
    myOutputValue = `WOW!" he said EXCITEDLY as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdjective} wife.`;
    mode = "create";
  }
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
