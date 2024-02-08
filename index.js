// Button Functions with event listeners
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');

rockBtn.addEventListener('click', function() {
  console.log("clicked rock");
});

paperBtn.addEventListener('click', function() {
  console.log("clicked paper");
});

scissorsBtn.addEventListener('click', function() {
  console.log("clicked scissors");
});