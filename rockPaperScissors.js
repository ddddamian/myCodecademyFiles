// a function to get the choice of the user
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  
  // control flow to check user input is valid
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("Uh oh... we have an error");
  }
};

// function - uses Math.random to generate a choice for the computer
const getComputerChoice = () => {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) {
    return 'rock';
  } else if (compChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}


// function - will compare the two choices played and then return if the human player won, lost, or tied.
const determineWinner = (userChoice, computerChoice) => {
  // secret cheat code
  if (userChoice === 'bomb') {
    return "Boom! You won!";
  }
  // if the user enters an invalid input
  if (userChoice === undefined) {
    return "Error: There was an error with the user input";
  }
  
  if (userChoice === computerChoice) {
    return 'Game tied';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return "You won!";
    } else {
      return "The computer won!";
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return "You won!";
    } else {
      return "The computer won!";
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return "You won!";
    } else {
      return "The computer won.";
    }
  }
};

// start the game and log the results
const playGame = () => {
  let userChoice = getUserChoice('scissors');
  console.log(`User: ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

// let's play!
playGame();
