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

        }
    }
}

function winStatement(playerSelection, computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}.`
}

function loseStatement(playerSelection, computerSelection) {
    return `You lose! ${computerSelection} beats ${playerSelection}.`
}
