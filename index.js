// Button Functions
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

// Display Divs and text content
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const result = document.querySelector('.result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

// Variables and arrays
const choices = ["👊", "✋", "✌️"];
let playerSelection;
let computerSelection;
let win = 0;
let lose = 0;

// button event listeners
rockBtn.addEventListener('click', () => {
  playerChoice.textContent = "👊";
  playerSelection = "👊";
  playRound();
});

paperBtn.addEventListener('click', () => {
  playerChoice.textContent = "✋";
  playerSelection = "✋";
  playRound();
});

scissorsBtn.addEventListener('click', () => {
  playerChoice.textContent = "✌️";
  playerSelection = "✌️";
  playRound();
});

// After you press the button, you should start the game

const playRound = () => {
  const randomIndex = Math.floor( Math.random() * 3);
  const random = choices[randomIndex];
  computerChoice.textContent = `${random}`;
  computerSelection = random;
  checkWinner(playerSelection, computerSelection);
}

let checkWinner = (playerSelection, computerSelection) => {
  if ( playerSelection === computerSelection ) {
    result.textContent = "It's a tie!";
  } else if (
    ( playerSelection === "👊" && computerSelection === "✌️" ) ||
    ( playerSelection === "✌️" && computerSelection === "✋") ||
    ( playerSelection === "✋" && computerSelection === "👊")
  ) {
    result.textContent = "Player Wins!";
    win++;
  } else {
    result.textContent = "Computer Wins!";
    lose++;
  }
  displayScore();
}

const displayScore = () => {
  playerScore.textContent = `Player: ${win}`;
  computerScore.textContent = `Computer: ${lose}`;
}

const resetGame = () => {
  if ( win === 5 ) {
    alert('You Win! Congratulations!');
  } else if ( lose === 5 ) {
    alert('Computer Wins! Game Over!');
  }
  win = 0;
  lose = 0;
  playerScore.textContent = `Player: ${win}`;
  computerScore.textContent = `Player: ${lose}`;
  playerChoice.textContent = "";
  computerChoice.textContent = "";
  result.textContent = "";
}