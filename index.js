function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
    let choice = "";

    switch (randomNumber) {
        case 3:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 1:
            choice = "scissors";  
            break;      
    }
    return choice;
}

function getPlayerChoice () {
    let choice = prompt("Choose Rock, Paper, or Scissors.");
    return choice.toLowerCase();
}

function playRound(playerChoice, computerChoice) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } 

    if (playerChoice === "rock" && computerChoice === "paper") {
            return "You lose!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
            return "You win!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
            return "You win!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
            return "You lose!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
            return "You win!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
            return "You lose!";
    }

    if (playerChoice != "rock" || playerChoice != "scissors" || playerChoice != "paper") {
        return "You lose!"
    }
}

console.log(playRound());