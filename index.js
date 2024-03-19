// Button Functions
const btnContainer = document.querySelector('.btn-container');

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
  const displayPlayer = document.querySelector('#display-player');
  const displayComputer = document.querySelector('#display-computer');

  displayPlayer.textContent = `Player chose ${playerSelection}`;
  displayComputer.textContent = `Computer chose ${computerSelection}`;
}

// let displayScore = () => {
//   const score = document.querySelector('.score');

//   score.addEventListener('showscore', function (e) {
//     console.log(e.target.id);
//   });

//   let scoreEvent = new Event('showscore', { bubbles: true });
//   score.dispatchEvent(scoreEvent);
// }
