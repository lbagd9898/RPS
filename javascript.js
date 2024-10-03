
let humanScore = 0
let computerScore = 0
playGame()


function getComputerChoice() {
    number = Math.floor(Math.random() * 3);
    console.log(number)
    if (number == 0) {
        return "rock"
    }
    else if (number == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLocaleLowerCase();
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
        return humanChoice
    }
    else {
        alert("Invalid input.");
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('tie')
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore += 1
            console.log('human wins')
        }
        else if (computerChoice == 'scissors') {
            computerScore += 1
            console.log('compuer wins')
        }
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore += 1
            console.log('comp wins')
        }
        else if (computerChoice == 'scissors') {
            humanScore += 1
            console.log('human wins')
        }
    }
    else if (humanChoice = "scissors") {
        if (computerChoice == 'rock')  {
            computerScore += 1
            console.log('comp wins')
        }
        else if (computerChoice == 'paper') {
            humanScore += 1
            console.log('human wins')
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log('human wins')
    }
    else if (computerScore > humanScore) {
        console.log('computer wins')
    }
    else {
        console.log("It's a tie.")
    }
}




