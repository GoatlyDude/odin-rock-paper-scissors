//Functions

function game() {
  let playerScore = 0;
  let cpuScore = 0;
  for (let i = 0; i < 5; i++)
  {
    let round = playRound(getPlayerChoice(), getComputerChoice());
    if (round === 1)
    {
      playerScore++
    }
    if (round === 0)
    {
      cpuScore++
    }
    
  }
  if (playerScore === cpuScore)
  {
    window.alert("You Tied the Game!");
  }
  if (playerScore > cpuScore)
  {
    window.alert("You Win the Game!");
  }
  else
  {
    window.alert("You Lose the Game!");
  }
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
  const playerAnswer = window.prompt("Enter your choice", "");
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
  else if (playerSelection === "Rock" && computerSelection === "Paper")
  {
    window.alert("You Lose! Paper beats Rock");
    return 0;
  }
  else if (playerSelection === "Paper" && computerSelection === "Scissors")
  {
    window.alert("You Lose! Scissors beats Paper");
    return 0;
  }
  else if (playerSelection === "Scissors" && computerSelection === "Rock")
  {
    window.alert("You Lose! Rock beats Scissors");
    return 0;
  }
  else
  {
    window.alert("You Win!");
    return 1;
  }
}


function GetRandomInt()
{
  const min = 1;
  const max = 4;
  return Math.floor(Math.random() * (max - min) + min);
}

game()
