function computerPlay() {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "Rock";
  }
  if (number === 1) {
    return "Paper";
  }
  if (number === 2) {
    return "Scissors";
  }
}

function playerSelection() {
  let choice = window
    .prompt("Choose 'Rock', 'Paper', or 'Scissors'")
    .toLowerCase();
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playRound(e) {
  playerSelection = e.srcElement.id;
  computerSelection = computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    updateScore("Tie. " + playerSelection + " ties " + computerSelection);
  }
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    updateScore("You Win! Rock beats Scissors");
  }
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    updateScore("You Lose! Paper beats Rock");
  }
  if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    updateScore("You Win! Paper beats Rock");
  }
  if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    updateScore("You Lose! Scissors beats Paper");
  }
  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    updateScore("You Win! Scissors beats Paper");
  }
  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    updateScore("You Lose! Rock beats Scissors");
  }
}

function updateScore(outcome) {
  document.getElementById("results").innerHTML = outcome;
  document.getElementById(
    "score"
  ).innerHTML = `Player:${playerScore} ~ Computer:${computerScore}`;
  checkWin();
}

function checkWin() {
  if (computerScore == 5) {
    alert("You Lose!");
    computerScore = 0;
    playerScore = 0;
  }
  if (playerScore == 5) {
    alert("You Win!");
    computerScore = 0;
    playerScore = 0;
  }
}

function game() {
  if (playerScore < computerScore) {
    console.log("You lose :(");
  } else if (playerScore == computerScore) {
    console.log("You tied :/");
  } else {
    console.log("You win!!!");
  }
}

let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll(".choices");
buttons.forEach((btn) => {
  btn.addEventListener("click", playRound);
});

game();
