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

getHumanChoice();
console.log(getComputerChoice());