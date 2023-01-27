const choices = ["Rock", "Paper", "Scissors"];
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const computerChoiceElem = document.getElementById("computer-choice");
const result = document.getElementById("result");

rockButton.addEventListener("click", function () {
  playGame("Rock");
});

paperButton.addEventListener("click", function () {
  playGame("Paper");
});

scissorsButton.addEventListener("click", function () {
  playGame("Scissors");
});

function playGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  const userWin1 = userChoice === "Rock" && computerChoice === "Scissors";
  const userWin2 = userChoice === "Paper" && computerChoice === "Rock";
  const userWin3 = userChoice === "Scissors" && computerChoice === "Paper";

  computerChoiceElem.innerHTML = `Computer Choice: ${computerChoice}`;

  if (userWin1 || userWin2 || userWin3) {
    result.innerHTML = "User wins!";
  } else if (userChoice === computerChoice) {
    result.innerHTML = "It's a draw!";
  } else {
    result.innerHTML = "Computer wins!";
  }
}
