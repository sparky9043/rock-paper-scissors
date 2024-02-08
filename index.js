// Button Functions
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

// Display Divs
const displayPlayer = document.querySelector('#display-player');
const displayComputer = document.querySelector('#display-computer');
const displayResult = document.querySelector('#display-result');

// Variables and arrays
const choices = ["rock", "paper", "scissors"];
let humanSelection;
let computerSelection;
let win = 0;
let lose = 0;
let tie = 0;

// button event listeners
rockBtn.addEventListener('click', () => {
  displayPlayer.textContent = "Player chose Rock";
  humanSelection = "rock";
  playGame();
});

paperBtn.addEventListener('click', () => {
  displayPlayer.textContent = "Player chose Paper";
  humanSelection = "paper";
  playGame();
});

scissorsBtn.addEventListener('click', () => {
  displayPlayer.textContent = "Player chose Scissors";
  humanSelection = "scissors";
  playGame();
});

// After you press the button, you should start the game

const playGame = () => {
  const randomIndex = Math.floor( Math.random() * 3);
  const random = choices[randomIndex];
  displayComputer.textContent = `Computer chose ${random}`;
  computerSelection = random;
  checkWinner(humanSelection, computerSelection);
}

function checkWinner(humanSelection, computerSelection) {
  console.log(humanSelection,computerSelection);
  if ( humanSelection === computerSelection ) {
    tie++;
  } else if (
    ( humanSelection === "rock" && computerSelection === "scissors" ) ||
    ( humanSelection === "scissors" && computerSelection === "paper") ||
    ( humanSelection === "paper" && computerSelection === "rock")
  ) {
    win++;
  } else {
    lose++;
  }
}
