


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("Rock beats scissors!");
            humanScore++;
       } else {
            console.log("Paper beats rock!");
            computerScore++;
            } 
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Paper beats rock!");
            humanScore++;
       } else {
            console.log("Scissors beats paper!");
            computerScore++;
            }
    } 

    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("Scissors beats paper!");
            humanScore++;
       } else {
            console.log("Rock beats scissors!");
            computerScore++;
             }
        }
    }

    //Round 1
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    //Round 2
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);

    //Round 3
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);

    //Round 4
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);

    //Round 5
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);

    if (humanScore > computerScore) {
        console.log("You win!");
        } else {
            console.log("You lose!");
        }
}


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

    //To start the game
    playGame();