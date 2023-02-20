//Functions

function game() {
  let playerScore = 0;
  let cpuScore = 0;
}

function getComputerChoice()
{
  const randomInt = GetRandomInt();
  switch (randomInt)
  {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors"
  }
}

function getPlayerChoice()
{
  const playerAnswer = window.prompt("Enter your choice", "rock");
  const firstChar = playerAnswer.charAt(0);
  const capFirstChar = firstChar.toUpperCase();
  const remainingChars = playerAnswer.slice(1)
  const lowerRemainingChars = remainingChars.toLowerCase();
  return capFirstChar + lowerRemainingChars;
}

function playRound(playerSelection, computerSelection)
{
  if (playerSelection === computerSelection)
  {
    window.alert("You Tied!"); 
  }
  if (playerSelection === "Rock" && computerSelection === "Paper")
  {
    window.alert("You Lose! Paper beats Rock");
    cpuScore ++;
  }
  if (playerSelection === "Paper" && computerSelection === "Scissors")
  {
    window.alert("You Lose! Scissors beats Paper");
    cpuScore ++;
  }
  if (playerSelection === "Scissors" && computerSelection === "Rock")
  {
    window.alert("You Lose! Rock beats Scissors");
    cpuScore ++;
  }
  else
  {
    window.alert("You Win!");
    playerScore++;
  }
}


function GetRandomInt()
{
  const min = 1;
  const max = 4;
  return Math.floor(Math.random() * (max - min) + min);
}
