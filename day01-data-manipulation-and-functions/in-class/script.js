var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var formulaFtoC = ((input - 32) * 5) / 9;
  var myOutputValue = formulaFtoC;
  return `${input} degrees in Fahrenheit is ${myOutputValue}.`;
};
/*The user will enter the length (in km) of a planned road trip in his brand new Ferrari. Write a program that outputs the total fuel cost (in $) of the road trip.
A new Ferrari is able to travel 9 miles/litre of fuel. Fuel costs $2.20/litre. Use the approach below to solve the problem.
*/
var roadTripCostMain = function (lengthInKm) {
  var lengthInMiles = lengthInKm * 0.62;
  var milesPerLitre = 9;
  var costPerLitre = 2.2;
  var costPerMile = costPerLitre / milesPerLitre;
  var totalCost = costPerMile * lengthInMiles;
  return `The road trip will cost $${totalCost.toFixed(2)}.`;
};

/*The user enjoyed his road trip so much that he decided to do another road trip again but he wishes to compare the cost of travelling via train against the cost of travelling via his Ferrari. 
The user will enter the length (in km) of the road trip. Write a program that outputs the savings in fuel cost (in $) of the road trip if he were to travel via train compared to using his Ferrari.
The Ferrari and train are both able to travel 9 miles/litre of fuel. Fuel for the Ferrari costs $2.20/litre. Fuel for the train costs $2.00/litre. Use the approach below to solve the problem.
*/
var roadTripCostComfortableMain = function (lengthInKm) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var lengthInMiles = lengthInKm * 0.62;
  var milesPerLitre = 9;
  var carCostPerLitre = 2.2;
  var trainCostPerLitre = 2;
  var costDiffPerLitre = carCostPerLitre - trainCostPerLitre;
  var savingsInFuelCost = (lengthInMiles / milesPerLitre) * costDiffPerLitre;
  return `The user will save $${savingsInFuelCost.toFixed(
    2
  )} if he were to travel by train.`;
};

/*A hotel uses an ice machine to prepare ice for guests. They want to start the ice machine as close to each event as possible, so that the ice doesn't melt. In order to do this, they need to estimate how long they will need to run the ice machine.

Create a program that estimates the duration the ice machine needs to run. The user will input the number of guests for the event.

Assume each guest needs 2 drinks. Each drink has 4 ice cubes. Each cube weights 1.5 grams. The hotel's American-made ice machine produces 5 pounds of ice per hour.
*/
var iceMachineMain = function (noOfGuests) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var gramsofIcePerGuest = 2 * 4 * 1.5;
  var totalGramsofIceNeeded = gramsofIcePerGuest * noOfGuests;
  var totalpoundsofIceNeeded = totalGramsofIceNeeded * 0.00220462;
  var timeNeeded = totalpoundsofIceNeeded / 5;
  return `The hotel will need to run the ice machine for ${timeNeeded.toFixed(
    2
  )} hours.`;
};

/*Create a program for a bar to calculate how many kegs of beer they will need every day. The user will enter the average number of customers per day, and the app will estimate how many half-barrel-size kegs the bar needs per quarter.
Assume an average customer drinks 2 pints per visit. There are 124 pints of beer in a half-barrel keg.
*/
var beerOrderMain = function (noOfCust) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var noOfPintsPerCust = 2;
  var noOfPintsPerBarrel = 124;
  var noOfBarrels = (noOfCust * 2) / 124;
  return `The number of barrels the bar will need a day is ${noOfBarrels.toFixed(
    2
  )}.`;
};

/*Create a program to calculate how much a user will pay for their the $19.99 50GB post-paid data plan. The user will enter how many GB they use per month, and the app will tell them how much they are paying per GB of data used.

Assume that if the user exceeds 50GB, they will automatically purchase an additional 50GB plan. You may find the built-in function Math.ceil helpful for this (you can Google how to use it).

For example, if the user only used 1GB this month, the app would calculate $19.99 per GB as the user paid $19.99 for the 50GB plan but only used 1GB. If the user used 2GB this month, the app would calculate $9.98 per GB. If the user used 51GB this month the user would have automatically been billed for 2 plans and the app would calculate $0.78 per GB.
*/
var cellularDataMain = function (noOfGBUsed) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var costOf50GBPlan = 19.99;
  var noOf50GBPlan = Math.ceil(noOfGBUsed / 50);
  var totalCost = noOf50GBPlan * costOf50GBPlan;
  var costPerGB = totalCost / noOfGBUsed;
  return `The cost per GB used is $${costPerGB.toFixed(2)}.`;
};
