const buttons = document.querySelectorAll('button');
let choice;
buttons.forEach((button) => {

  button.addEventListener('click', () => {
    choice = button.id;
    console.log(playRound());
  });
});

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
    console.log(choice);
    return choice;
}

function getPlayerChoice () {
    return choice;
}

function playRound(playerChoice, computerChoice) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    
    if (playerChoice === computerChoice) {
        return playRound();
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



/* function game () {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        if (playRound() === "You win!") {
            playerScore++;
        } else { 
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        return "You win the game with " + playerScore + " points!";
    }
}

console.log(game()); */