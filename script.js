function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        function playRound(humanSelection, computerSelection) {
            if (humanSelection === computerSelection) {
                console.log("It's a tie!");
            } else if (
                (humanSelection === 'rock' && computerSelection === 'scissors') ||
                (humanSelection === 'paper' && computerSelection === 'rock') ||
                (humanSelection === 'scissors' && computerSelection === 'paper')
            ) {
                humanScore++;
                console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
            } else {
                computerScore++;
                console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
            }
        };
        playRound(humanSelection, computerSelection);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
    return { humanScore, computerScore };
}


playGame();