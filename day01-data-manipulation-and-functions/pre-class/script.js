var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var name = input;
  var myOutputValue = "Hello " + input + ", nice to meet you!";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceinKM = input;
  var distanceinMiles = distanceinKM * 0.62;
  var myOutputValue =
    "The distance of " + input + " KM is " + distanceinMiles + " miles!";
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
var main = function (input) {
  // calculate distance to Tokyo
  var trainOneSpeed = 200;
  var trainOneTime = 2;
  var distancetoTokyo = trainOneSpeed * trainOneTime;
  var convertMinToHours = input / 60;
  var trainTwoRemainingTime = trainOneTime - convertMinToHours;
  var trainTwoSpeed = distancetoTokyo / trainTwoRemainingTime;
  var myOutputValue = `Given a ${input} minutes delay, Train 2 will have to travel at ${trainTwoSpeed.toFixed(
    2
  )} km/h to reach at the same time as Train 1.`;
  return myOutputValue;
};

function clockMain(input) {
  //get number of hours and minutes from input
  var minsPerHour = 60;
  var numHours = 1 + input / minsPerHour;
  var numMins = input % minsPerHour;

  //angle of hour hand (from 12)
  var numberOfHours = 12;
  var oneRoundAngle = 360;
  var anglePerHour = oneRoundAngle / numberOfHours;
  var hourAngle = anglePerHour * numHours;

  //angle of minute hand (from 12)
  var numberOfMinutes = 60;
  var anglePerMinute = oneRoundAngle / numberOfMinutes;
  var minuteAngle = anglePerMinute * numMins;

  var angleHourAndMin = Math.abs(hourAngle - minuteAngle);
  return angleHourAndMin;
}
