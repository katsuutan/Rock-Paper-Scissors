    // Randomly returns Rock, Paper or Scissors based on randomly generated number.
    function getComputerChoice() {
        let x = Math.floor(Math.random() * 3);
        if (x === 0)
            return 'Rock';
        else if (x === 1)
            return 'Paper';
        else if (x === 2)
            return 'Scissors';
        else
            return 0;
    }

    // Takes the choices of player and computer to compare and declare a winner.
    function playRound(playerSelection, computerSelection) {
        //Change players choice to be lowercase
        //If playerSelection is xxx, compare with computerSelection's xxx.
        //Returns string that declares winner.
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection === 'rock') {
            if (computerSelection === 'Rock')
                return 'It is a tie! Too many rocks.';
            else if (computerSelection === 'Paper') {
                computerWin++;
                return 'You Lose! Paper beats Rock.';
            }
            else if (computerSelection === 'Scissors') {
                playerWin++;
                return 'You Win! Rock beats Scissors.';
            }
            else
                return 0;
        }

        else if (playerSelection === 'paper') {
            if (computerSelection === 'Rock') {
                playerWin++;
                return 'You Win! Paper beats Rock.';
            }
            else if (computerSelection === 'Paper')
                return 'It is a tie! Paper wasted.';
            else if (computerSelection === 'Scissors') {
                computerWin++;
                return 'You Lose! Scissors beat Paper.';
            }
            else
                return 0;
        }

        else if (playerSelection === 'scissors') {
            if (computerSelection === 'Rock') {
                computerWin++;
                return 'You Lose! Rock beats Scissors.';
            }
            else if (computerSelection === 'Paper') {
                playerWin++;
                return 'You Win! Scissors beat Rock.';
            }
            else if (computerSelection === 'Scissors')
                return 'It is a tie! Scissors..o///o';
            else
                return 0;
        }
        
        else
            return 0;

    }
    
    function game() {
        for (let i = 0; i < 5; i++) {
            let playerChoice;
        
            playerChoice = prompt('Type your choice of: rock, paper or scissors', '');
            console.log(playRound(playerChoice, getComputerChoice()));
            console.log(`Player: ${playerWin} - Computer: ${computerWin}`);

        }
    

        // prints Final Result of the game
        if (playerWin > computerWin)
            console.log(`You won with a score of ${playerWin}-${computerWin}.`);
        else if (playerWin < computerWin)
            console.log(`You lost with a score of ${playerWin}-${computerWin}.`);
        else if (playerWin === computerWin)
            console.log(`It's a tie with a score of ${playerWin}-${computerWin}.`);
        else
            return 0;
    }
    
    // tracks wins between player and computer
    let playerWin = 0;
    let computerWin = 0;

    //runs the game
    game();