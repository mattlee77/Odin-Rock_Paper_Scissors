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
    //for (let i = 0; i < 5; i++) {
    //while (humanScore < 5 && computerScore < 5) {
        //const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const humanSelection = this.textContent.toLowerCase();
        const humanSpan = document.querySelector('#playerScore');
        const compSpan = document.querySelector('#computerScore');
        const drawSpan = document.querySelector('#draws');
        const resultsSpan = document.querySelector('#resultText');

        function playRound(humanSelection, computerSelection) {
            if (humanSelection === computerSelection) {
                console.log("It's a tie!");
                drawSpan.textContent = Number(drawSpan.textContent) + 1;
            } else if (
                (humanSelection === 'rock' && computerSelection === 'scissors') ||
                (humanSelection === 'paper' && computerSelection === 'rock') ||
                (humanSelection === 'scissors' && computerSelection === 'paper')
            ) {
                humanScore++;
                console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
                resultsSpan.textContent = 'You win!';
                humanSpan.textContent = Number(humanSpan.textContent) + 1;
            } else {
                computerScore++;
                console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
                resultsSpan.textContent = 'You lose!';
                compSpan.textContent = Number(compSpan.textContent) + 1;
            }
        };
        playRound(humanSelection, computerSelection);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
   //}
    if (humanScore === 5 || computerScore === 5) {
        resultsSpan.textContent = humanScore === 5 ? 'You win the game!' : 'You lose the game!';
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


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', playGame);
})

//playGame();