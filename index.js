const buttons = document.querySelectorAll('button');
let pChoice;
/* buttons.forEach((button) => {

  button.addEventListener('click', () => {
    pChoice = button.id;
    console.log(playRound());
    
  });
}); */


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
    return pChoice;
}

function playRound(playerChoice, computerChoice) {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    
    if (playerChoice === computerChoice) {
        return;
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



function game () {
    playerScore = 0;
    computerScore = 0;
    let winner = document.querySelector(".winner");
    let wins = document.querySelector('#wins');
    let loses = document.querySelector('#loses');

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
          pChoice = button.id;
          
               
        if (playRound() === "You win!") {
            playerScore++;
            wins.textContent = `Wins: ${playerScore}`;
        } else { 
            computerScore++;
            loses.textContent = `Loses: ${computerScore}`;
        } 
        

        if (playerScore === 5) {
            winner.textContent = "Congratulations you won the game!";
            playerScore = 0;
            computerScore = 0;
            wins.textContent = `Wins: ${playerScore}`;
            loses.textContent = `Loses: ${computerScore}`;
        } else if (computerScore === 5) {
            winner.textContent = "You lost. Better luck next time!";
            playerScore = 0;
            computerScore = 0;
            wins.textContent = `Wins: ${playerScore}`;
            loses.textContent = `Loses: ${computerScore}`;
        }
        
        });
      });

}

game();

