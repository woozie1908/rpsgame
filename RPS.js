
function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber >= 0.33 && randomNumber <= 0.66) {
        return "paper"
    } else if (randomNumber > 0.66) {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:");
    return choice;
}

//1. Add Rock, Paper, Scissor for Human Choices
//2. Add verses between computer and human
//3. Add if win or lose
    
console.log("You chose: " + getHumanChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());