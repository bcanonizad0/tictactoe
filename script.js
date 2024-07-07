// Function to get the user's choice
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      playGame(userInput);
    } else {
      console.log("Error: Please enter either 'rock', 'paper', or 'scissors'.");
    }
  };
  
  // Function to get the computer's choice
  const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  };
  
  // Function to determine the winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "The game is a tie!";
    }
    
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return "Computer wins!";
      } else {
        return "You win!";
      }
    }
    
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return "Computer wins!";
      } else {
        return "You win!";
      }
    }
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return "Computer wins!";
      } else {
        return "You win!";
      }
    }
  };
  
  // Function to play the game and update UI
  const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    
    document.getElementById('userChoice').textContent = `You chose: ${userChoice}`;
    document.getElementById('computerChoice').textContent = `The computer chose: ${computerChoice}`;
    
    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('gameResult').textContent = result;
  };
  