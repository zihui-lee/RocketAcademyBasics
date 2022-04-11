var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/*Create a loop in the simpleLoopMain function. Make the loop run 6 times, adding "hello" to myOutputValue with each loop iteration.
 */
//counter
var counter = 0;

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = "";
  //set the while loop condition to continue for 6 times
  while (counter < 6) {
    //log hello with each iteration of loop
    myOutputValue = myOutputValue + "hello";
    counter = counter + 1;
  }
  return myOutputValue;
};
/* What happens if counter starts as a number other than zero?*/
//it will loop for n times where n = 6 minus (counter starting number)
/*What happens if, inside the loop, you alter the counter by adding a number other than one?*/
//it will loop every n times where n = the added number
/*What happens if you change the condition inside the loop from counter < 6 to counter <= 6?*/
// the loop will run 6+1 = 7 times

/*Create nested loops in the loopWithinLoopMain function, where the outer loop runs 3 times and the inner loop runs 3 times per outer loop. Concatenate "hello" to myOutputValue in the inner loop. How many times do we see "hello"?*/

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = "";
  //initialise outer counter
  var outerCounter = 0;
  while (outerCounter < 3) {
    //initialise inner counter
    var innerCounter = 0;
    //every time the outer loop runs, the innter loop runs repeatedly until the inner loop condition is met
    while (innerCounter < 3) {
      //each time innter loop runs, add 'hello' to the output
      myOutputValue = myOutputValue + "hello";
      innerCounter = innerCounter + 1;
    }
    //at the end of each outer loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    outerCounter = outerCounter + 1;
  }
  return myOutputValue;
};
/*
What happens if outerCounter starts as a number other than zero?
it will loop for n times where n = 3 minus (counter starting number)
What happens if innerCounter starts as a number other than zero?
it will loop for n times where n = 3 minus (counter starting number)
What happens if, inside the loop, you alter outerCounter by adding a number other than one?
it will loop fewer times as the condition of counter = 3 is quickly met (if the number is more than 1)
What happens if, inside the loop, you alter innerCounter by adding a number other than one?
it will loop fewer times as the condition of counter = 3 is quickly met (if the number is more than 1)
What happens if you change the outer loop condition from outerCounter < 3 to outerCounter <= 3?
the loop will run 3+1 = 4 times
What happens if you change the inner loop condition from innerCounter < 3 to innerCounter <= 3?
the loop will run 3+1 = 4 times
Update loop conditions to use input to control how many times the loops run.
Update our code such that the inner loop runs twice the number of times as the outer loop. How many more times do we see "hello"?
3 more hellos will appear in each inner loop
*/

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
