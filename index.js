// Button Functions
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

// Display Divs
const displayPlayer = document.querySelector('#display-player');
const displayComputer = document.querySelector('#display-computer');
const displayResult = document.querySelector('#display-result');

rockBtn.addEventListener('click', () => {
  displayPlayer.textContent = "Player chose Rock";
});

paperBtn.addEventListener('click', () => {
  displayPlayer.textContent = "Player chose Paper";
});

scissorsBtn.addEventListener('click', () => {
  displayPlayer.textContent = "Player chose Scissors";
});

// After you press the button, you should start the game
const choices = ["rock", "paper", "scissors"];
let randomIndex = Math.floor( Math.random() * 3);

