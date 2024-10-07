
let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', getHumanChoice)
});



function getComputerChoice() {
    number = Math.floor(Math.random() * 3);
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


function getHumanChoice(event) {
    const humanSelection = event.target.id
    console.log(humanSelection)
    const computerSelection = getComputerChoice()
    console.log(computerSelection)
    playRound(humanSelection, computerSelection);
    
}

function playRound(humanChoice, computerChoice) {
    let description = document.querySelector('#game-description');
    let computerScoreKeep = document.querySelector('#computer-score');
    let humanScoreKeep = document.querySelector('#human-score');
    if (humanChoice == computerChoice) {
        description.textContent = "It's a tie!"
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore += 1
            description.textContent = "Computer chose rock. You win!"
            humanScoreKeep.textContent = "Your Score: " + humanScore

        }
        else if (computerChoice == 'scissors') {
            computerScore += 1
            description.textContent = "Computer chose scissors. You lose!"
            computerScoreKeep.textContent = "Computer Score: " + computerScore
        }
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore += 1
            description.textContent = "Computer chose paper. You lose!"
            computerScoreKeep.textContent = "Computer Score: " + computerScore

        }
        else if (computerChoice == 'scissors') {
            humanScore += 1
            description.textContent = "Computer chose scissors. You win!"
            humanScoreKeep.textContent = "Your Score: " + humanScore
        }
    }
    else if (humanChoice = "scissors") {
        if (computerChoice == 'rock')  {
            computerScore += 1
            description.textContent = "Computer chose rock. You lose!"
            computerScoreKeep.textContent = "Computer Score: " + computerScore

        }
        else if (computerChoice == 'paper') {
            humanScore += 1
            description.textContent = "Computer chose paper. You win!"
            humanScoreKeep.textContent = "Your Score: " + humanScore
            
        }
    }
}




