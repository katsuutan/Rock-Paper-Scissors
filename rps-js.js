// Randomly returns Rock, Paper or Scissors based on randomly generated number.
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// Takes the choices of player and computer to compare and declare a winner.
function playRound(playerSelection, computerSelection) {
    //Change players choice to be lowercase
    //If playerSelection is xxx, compare with computerSelection's xxx.
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock')
            return 'It is a tie! Too many rocks.';
        else if (computerSelection === 'paper') {
            computerWin++;
            return 'You Lose! Paper beats Rock.';
        }
        else if (computerSelection === 'scissors') {
            playerWin++;
            return 'You Win! Rock beats Scissors.';
        }
        else
            return 'Error';
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerWin++;
            return 'You Win! Paper beats Rock.';
        }
        else if (computerSelection === 'paper')
            return 'It is a tie! Paper wasted.';
        else if (computerSelection === 'scissors') {
            computerWin++;
            return 'You Lose! Scissors beat Paper.';
        }
        else
            return 'Error';
    }

    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerWin++;
            return 'You Lose! Rock beats Scissors.';
        }
        else if (computerSelection === 'paper') {
            playerWin++;
            return 'You Win! Scissors beat Rock.';
        }
        else if (computerSelection === 'scissors')
            return 'It is a tie! Scissors..o///o';
        else
            return 'Error';
    }
    
    else
        return 0;
}

function game() {
    let playerChoice;

    const btn = document.querySelectorAll('button');
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            const result = document.querySelector('#result-display');
            result.textContent = playRound(button.id, getComputerChoice());
            const score = document.querySelector('#score-display');
            score.textContent = `Player: ${playerWin} - Computer: ${computerWin}`;

            // Once someone reaches 5 total wins, runs a check to see who won and displays the final result message.
            if (playerWin === 5 || computerWin === 5) {
                let finalDiv = document.createElement('div');
                finalDiv.id = 'final-result';
                finalDiv.textContent = finalResult();
                document.body.appendChild(finalDiv);
            }
        });
    });
}

// Checks win count between player and computer and returns appropriate final result message.
function finalResult() {
    const final = document.querySelector('#result-display');
    if (playerWin > computerWin) {
        return `You won with a score of ${playerWin}-${computerWin}.`;
    }
    else if (playerWin < computerWin) {
        return `You lost with a score of ${playerWin}-${computerWin}`;
    }
    else {
        return 'Final Result Error';
    }
}

// tracks wins between player and computer
let playerWin = 0;
let computerWin = 0;



//runs the game
game();