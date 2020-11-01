function computerPlay() {
    const compChoice = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random()*compChoice.length);
    let randomElement = compChoice[randomIndex];
    console.log(randomElement)
}

computerPlay();