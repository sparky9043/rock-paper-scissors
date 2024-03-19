// Button Functions
const btnContainer = document.querySelector('.btn-container');

// Display Divs and text content
// const playerChoice = document.querySelector('#player-choice');
// const computerChoice = document.querySelector('#computer-choice');
// const result = document.querySelector('.result');
// const playerScore = document.querySelector('.player-score');
// const computerScore = document.querySelector('.computer-score');

// Variables and arrays
const choices = ["rock", "paper", "scissors"];
let playerSelection;
let win = 0;
let lose = 0;

// button event listeners
btnContainer.addEventListener('click', (e) => {
  switch (e.target.id) {
    case "rock-btn":
      playerSelection = choices[0];
      break;
    case "paper-btn":
      playerSelection = choices[1];
      break;
    case "scissors-btn":
      playerSelection = choices[2];
      break;
    default:
      break;
  }
  let random = Math.round( Math.random() * 2);
  let computerSelection = choices[random];
  playRound(playerSelection, computerSelection);
});

// rockBtn.addEventListener('click', () => {
//   playerChoice.textContent = "rock";
//   playerSelection = "rock";
//   playRound();
// });

// paperBtn.addEventListener('click', () => {
//   playerChoice.textContent = "paper";
//   playerSelection = "paper";
//   playRound();
// });

// scissorsBtn.addEventListener('click', () => {
//   playerChoice.textContent = "scissors";
//   playerSelection = "scissors";
//   playRound();
// });

// After you press the button, you should start the game

// const playRound = (playerSelection, computerSelection) => {
  
// }

// let checkWinner = (playerSelection, computerSelection) => {
//   if ( playerSelection === computerSelection ) {
//     result.textContent = "It's a tie!";
//   } else if (
//     ( playerSelection === "rock" && computerSelection === "scissors" ) ||
//     ( playerSelection === "scissors" && computerSelection === "paper") ||
//     ( playerSelection === "paper" && computerSelection === "rock")
//   ) {
//     result.textContent = "Player Wins!";
//     win++;
//   } else {
//     result.textContent = "Computer Wins!";
//     lose++;
//   }
//   displayScore();
// }

// const displayScore = () => {
//   playerScore.textContent = `Player: ${win}`;
//   computerScore.textContent = `Computer: ${lose}`;
// }

// const resetGame = () => {
//   if ( win === 5 ) {
//     alert('You Win! Congratulations!');
//   } else if ( lose === 5 ) {
//     alert('Computer Wins! Game Over!');
//   }
//   win = 0;
//   lose = 0;
//   playerScore.textContent = `Player: ${win}`;
//   computerScore.textContent = `Player: ${lose}`;
//   playerChoice.textContent = "";
//   computerChoice.textContent = "";
//   result.textContent = "";
// }