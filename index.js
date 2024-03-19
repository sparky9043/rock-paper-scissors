// Button Functions
const btnContainer = document.querySelector('.btn-container');

// Variables and arrays
const choices = ["rock", "paper", "scissors"];
let playerSelection;
let win = 0;
let lose = 0;

// Reference to displays
const displayPlayer = document.querySelector('#display-player');
const displayComputer = document.querySelector('#display-computer');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

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

let playRound = (playerSelection, computerSelection) => {
  if (
    ( playerSelection === "rock" && computerSelection === "scissors" ) ||
    ( playerSelection === "scissors" && computerSelection === "paper") ||
    ( playerSelection === "paper" && computerSelection === "rock")
  ) {
    win++;
  } else if (
    ( playerSelection === "rock" && computerSelection === "paper" ) ||
    ( playerSelection === "scissors" && computerSelection === "rock") ||
    ( playerSelection === "paper" && computerSelection === "scissors")
  ) {
    lose++;
  }
  displayResult(playerSelection, computerSelection);
}

let displayResult = (playerSelection, computerSelection) => {
  displayPlayer.textContent = `Player chose ${playerSelection}`;
  displayComputer.textContent = `Computer chose ${computerSelection}`;
  displayScore();
}

let displayScore = () => {
  playerScore.textContent = win;
  computerScore.textContent = lose;

  if ( win === 5 || lose === 5) {
    resetScore(win, lose);
    win = 0;
    lose = 0;
  }
}

let resetScore = (win, lose) => {
  if ( win === 5 ) {
    alert("Player Wins! Game Over!");
  } else if ( lose === 5) {
    alert("Computer Wins! Game Over!");
  }
  displayPlayer.textContent = '';
  displayComputer.textContent = '';
  playerScore.textContent = 0;
  computerScore.textContent = 0;
}
