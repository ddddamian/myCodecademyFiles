?**
Calculate if you're getting enough sleep each week.

Objective: We are going to write a calculator that calculates sleep debt. The program will ask a user how many hours of sleep is ideal each night, then compare that to the actual hours they slept each night of the last week.

Then, it will calculate the number over or under they are to their sleep goal.
**/


// a function that returns any given night's number of hours of rest
const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 8;
      break;
  }
};

// a function that get the total sleep hours that the user actually slept
const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

// a function to get the ideal sleep hours that the user prefers
const getIdealSleepHours = () => {
  // your ideal hours per night
  let idealHours = 8;
  // * by 7 to get the total hours you prefer per week
  return idealHours * 7;
};

// function to calculate sleep debt
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if(actualSleepHours >= idealSleepHours) {
    console.log("You got more sleep than needed. Over by " + (actualSleepHours - idealSleepHours) + " hours");
  } else {
    console.log("You should get some rest. Under by " + (idealSleepHours - actualSleepHours) + " hours");
  }
};

// start the program
calculateSleepDebt();







