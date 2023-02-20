//Functions

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


function GetRandomInt()
{
  const min = 1;
  const max = 4;
  return Math.floor(Math.random() * (max - min) + min);
}
