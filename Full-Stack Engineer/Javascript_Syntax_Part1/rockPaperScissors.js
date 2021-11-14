const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    userChoice = userInput;
    return userChoice;
  } else {
    console.log('Error!');
  }
}

const getComputerChoice = randomNumber => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return computerChoice = 'rock';
      break;
    case 1:
      return computerChoice = 'paper';
      break;
    case 2:
      return computerChoice = 'scissors';
      break;

  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

const playGame = () => {
   const userChoice = getUserChoice('scissors');
   const computerChoice = getComputerChoice();
   console.log('You Threw: ' + userChoice);
   console.log('Computer Threw: ' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};
 
playGame();