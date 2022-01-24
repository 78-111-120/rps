console.log("Hello World");
function computerPlay() {
    let num = getRndInteger(1,3);
    let play;
    switch(num)  {
      case 1:
        play = "ROCK";
        break;
      case 2: 
        play = "PAPER";
        break;
      case 3:
        play = "SCISSORS";
        break;
      default:
        console.log("Invalid Response");          
    }
  return play;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    return `You win! ${playerSelection} beats ${computerSelection}`;    
  }
  else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    return `You win! ${playerSelection} beats ${computerSelection}`; 
  }
  else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    return `You win! ${playerSelection} beats ${computerSelection}`; 
  }
  else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
    return `You lose! ${computerSelection} beats ${playerSelection}`; 
  }
  else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
    return `You lose! ${computerSelection} beats ${playerSelection}`; 
  }
  else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
    return `You lose! ${computerSelection} beats ${playerSelection}`; 
  }
  else {
    return "It's a draw!";
  }
}

function game() {
  let temp;
  for (let i = 0; i <= 5; i++) {
    temp = window.prompt("Your move: ");
    console.log(playRound(temp, computerPlay()))
  }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

