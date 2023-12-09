function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
    let choice = "";

    switch (randomNumber) {
        case 3:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 1:
            choice = "Scissors";  
            break;      
    }
    return choice;
}

console.log(getComputerChoice());