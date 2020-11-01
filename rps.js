function computerPlay() {
    const compChoice = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random()*compChoice.length);
    let randomElement = compChoice[randomIndex];
    return randomElement
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! Both players picked ${playerSelection}.`
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return winStatement(playerSelection, computerSelection)
        }
        else {
            return loseStatement(playerSelection, computerSelection)
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return winStatement(playerSelection, computerSelection)
        }
        else {
            return loseStatement(playerSelection, computerSelection)
        }
    }
    else if (computerSelection == 'rock') {
        return winStatement(playerSelection, computerSelection)
    }
    else {
        return loseStatement(playerSelection, computerSelection)
    }

}

function winStatement(playerSelection, computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}.`
}

function loseStatement(playerSelection, computerSelection) {
    return `You lose! ${computerSelection} beats ${playerSelection}.`
}

function game() {
    for (let i = 0; i < 5; i++) {
        let x = prompt("Rock, Paper, or Scissors?");
        let playerSelection = x.toLowerCase().trim()
        if (playerSelection !== 'rock' && playerSelection !== 'scissors' && playerSelection !== 'paper') {
            return "Please choose rock, paper, or scissors."
        }
        
    }
}