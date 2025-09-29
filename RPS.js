
function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber >= 0.33 && randomNumber <= 0.66) {
        return "paper"
    } else if (randomNumber >= 0.66) {
        return "scissors"
    }


}
    

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());