function computerPlay() {
    const compChoice = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random()*compChoice.length);
    let randomElement = compChoice[randomIndex];
    return randomElement
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 2
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 1
        }
        else {
            return 0
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 1
        }
        else {
            return 0
        }
    }
    else if (computerSelection == 'rock') {
        return 1
    }
    else {
        return 0
    }

}

function winStatement(playerSelection, computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}.`
}

function loseStatement(playerSelection, computerSelection) {
    return `You lose! ${computerSelection} beats ${playerSelection}.`
}

function tieStatement(playerSelection) {
    return `It's a tie! Both players picked ${playerSelection}.`
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