const display = document.getElementById('results')
const buttons = document.querySelectorAll('button')
let computerScore = document.getElementById('computer score')
let playerScore = document.getElementById('player score')
let computerPoints = 0
let playerPoints = 0
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

function displayResult(switchNumber, compSel, playSel) {
    switch (switchNumber) {
        case 0:
            computerPoints++;
            computerScore.textContent = `Computer: ${computerPoints}`
            display.textContent = loseStatement(playSel, compSel);
            break;
        case 1:
            playerPoints++;
            playerScore.textContent = `Player: ${playerPoints}`
            display.textContent = winStatement(playSel, compSel);
            break;
        case 2:
            display.textContent = tieStatement(playSel);
            break;
    }
}

function newGame() {

}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelection = computerPlay()
        let playerSelection = button.id
        let result = playRound(playerSelection, computerSelection)
        displayResult(result, computerSelection, playerSelection)
        if (playerPoints ==5 || computerPoints == 5) {
            display.textContent = "Game Over"
        }
    })
})

