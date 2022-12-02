const totalScore = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  let bacChoices = ["man", "dog", "cap", "pan"];
  let computerChoice = bacChoices[3];
  return computerChoice;
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  const resultDiv = document.getElementById("result");
  const emojisDiv = document.getElementById("emojis");
  const playerScoreDiv = document.getElementById("player-score");

  if (score == 1) {
    resultDiv.innerText = "Citizen!";
  } else {
    resultDiv.innerText = "Alien!";
  }

  emojisDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
  playerScoreDiv.innerText = `Your Score: ${totalScore["playerScore"]}`;
}

function onClickBAC(playerChoice) {
  console.log({ playerChoice });
  const computerChoice = getComputerChoice();
  console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  console.log({ score });
  console.log(totalScore);
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const bacButtons = document.querySelectorAll(".bacButton");
  console.log(bacButtons);
  bacButtons[0].onclick = () => console.log(bacButtons[0].value);

  bacButtons.forEach((bacButton) => {
    bacButton.onclick = () => onClickBAC(bacButton.value);
  });

  // const endGame = document.getElementbyId("endGame");
  //endGameButton.onclick = () => endGame(totalScore);
}

// function endGame(totalScore) {
//   totalScore["playerScore"] = 0;
//   totalScore["computerScore"] = 0;

//   const resultDiv = document.getElementById("result");
//   const emojisDiv = document.getElementById("emojis");
//   const playerScoreDiv = document.getElementById("player-score");

//   resultDiv.innerText = "";
//   emojisDiv.innerText = "";
//   playerScoreDiv.innerText = "";
// }

playGame();
