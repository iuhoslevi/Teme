var choices = ["Rock", "Paper", "Scissors"];
var computerChoice = choices[Math.floor(Math.random() * 3 )];
var userChoice = choices[Math.floor(Math.random() * 3 )];
var userWin1 = userChoice === "Rock" && computerChoice === "Scissors";
var userWin2 = userChoice === "Paper" && computerChoice === "Rock";
var userWin3 = userChoice === "Scissors" && computerChoice === "Paper";
console.log("Computer: " + computerChoice);
console.log("User: " + userChoice);

if (userWin1 || userWin2 || userWin3) {
    console.log("User wins")
} else if (userChoice === computerChoice) {
    console.log("It's a draw")
} else {
    console.log("Computer wins")
}

