// @ts-check

//Game Play Section
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0; 
    const MAX_ROUNDS = 5;

function getComputerChoice() {
    let randomNumber = Math.random();
    
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}  

function updateScoreboard(message) {
    let scoreboard = document.getElementById('scoreboard');
    
    // Update the scoreboard with the message and current scores
    scoreboard.innerHTML = `
        <p>${message}</p>
        <p>Your Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p>
        <p>Rounds: ${roundsPlayed}/${MAX_ROUNDS}</p>
    `;
}

function checkGameOver() {
    if (roundsPlayed >= MAX_ROUNDS) {
        let finalMessage = "";

        if (humanScore > computerScore) {
            finalMessage = "🎉 YOU WIN THE GAME! 🎉";
        } else if (computerScore > humanScore) {
            finalMessage = "😢 Computer wins the game!";
        }

            let scoreboard = document.getElementById('scoreboard');
            scoreboard.innerHTML = `
                <h2>${finalMessage}</h2>
                <p>Final Score - You: ${humanScore}, Computer: ${computerScore}</p>
                <button onclick="location.reload()">Play Again</button>
            `;
            
            // Disable buttons
            document.getElementById('button1').disabled = true;
            document.getElementById('button2').disabled = true;
            document.getElementById('button3').disabled = true;

    }
}

function playRound(humanChoice, computerChoice) {
    let message = "";

    if (humanChoice === computerChoice) {
        message = "It's a tie!";
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            message = "Rock beats scissors!";
            humanScore++;
       } else {
            message = "Paper beats rock!";
            computerScore++;
            } 
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            message = "Paper beats rock!";
            humanScore++;
       } else {
            message = "Scissors beats paper!";
            computerScore++;
            }
    } 

    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            message = "Scissors beats paper!";
            humanScore++;
       } else {
            message = "Rock beats scissors!";
            computerScore++;
             }
        }

        roundsPlayed++; 
        updateScoreboard(message);
        checkGameOver();
    }

    //Button event listeners
    document.getElementById('button1').addEventListener('click', function() {
        let computerChoice = getComputerChoice();
        playRound("rock", computerChoice);
    });
    
    document.getElementById('button2').addEventListener('click', function() {
        let computerChoice = getComputerChoice();
        playRound("paper", computerChoice);
    });
    
    document.getElementById('button3').addEventListener('click', function() {
        let computerChoice = getComputerChoice();
        playRound("scissors", computerChoice);
    });
}
    //Start the game
    playGame();