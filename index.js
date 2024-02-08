// Button Functions
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

// Display Divs and text content
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const displayResult = document.querySelector('.display-result');
const playerScore = document.querySelector('player-score');
const computerScore = document.querySelector('computer-score');

// Variables and arrays
const choices = ["👊", "✋", "✌️"];
let humanSelection;
let computerSelection;
let win = 0;
let lose = 0;
let tie = 0;

// button event listeners
rockBtn.addEventListener('click', () => {
  playerChoice.textContent = "👊";
  humanSelection = "👊";
  playGame();
});

paperBtn.addEventListener('click', () => {
  playerChoice.textContent = "✋";
  humanSelection = "✋";
  playGame();
});

scissorsBtn.addEventListener('click', () => {
  playerChoice.textContent = "✌️";
  humanSelection = "✌️";
  playGame();
});

// After you press the button, you should start the game

const playGame = () => {
  const randomIndex = Math.floor( Math.random() * 3);
  const random = choices[randomIndex];
  computerChoice.textContent = `${random}`;
  computerSelection = random;
  checkWinner(humanSelection, computerSelection);
}

function checkWinner(humanSelection, computerSelection) {
  if ( humanSelection === computerSelection ) {
    displayResult.textContent = "It's a tie!";
    tie++;
  } else if (
    ( humanSelection === "👊" && computerSelection === "✌️" ) ||
    ( humanSelection === "✌️" && computerSelection === "✋") ||
    ( humanSelection === "✋" && computerSelection === "👊")
  ) {
    displayResult.textContent = "Player Wins!";
    win++;
  } else {
    displayResult.textContent = "Computer Wins!";
    lose++;
  }
}
