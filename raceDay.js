let raceNumber = Math.floor(Math.random()*1000);

// indicates whether a runner registered early or not.
let earlyReg = true;

// this is the runners age
let runnerAge = 20;

// control flow statement that checks if the runner did not register early. 
if (!earlyReg) {
  raceNumber += 1000;
}

// control flow statement
if (runnerAge>18 && earlyReg) {
  console.log(`Race Number ${raceNumber} will race at 9:30am`);
} else if (runnerAge>18 || earlyReg) {
  console.log(`Race Number ${raceNumber} will race at 11:00am`);
} else if (runnerAge<18 && !earlyReg) {
  console.log(`Race Number ${raceNumber} will race at 12:30pm`);
} else {
  console.log("Go to the registration desk");
}

