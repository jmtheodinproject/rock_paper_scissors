// Create a function for the computer play
function computerPlay() {
    // Create a variable for a random value from 0 to 2:
    let selection = Math.floor(Math.random() * 3);
    // Return a different string value based on the selection variable
    switch (selection) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
    }
    
}
// We write a function that takes as parameters the playerSelection and the computerSelection, tha would be a single game round
function playRound(playerSelection, computerSelection) {
    // Check the player selection
/*     checkPlayerSelection(); */
    // We make both variables case insenstive
    playerSelection = playerSelection.toLowerCase()
    console.log(playerSelection)
    computerSelection = computerSelection.toLowerCase()
    console.log(computerSelection)
    // Check who is the winner checkin each possibility
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    } else {
        return "It's a TIE!"
    }

}

/* function checkPlayerSelection() {
    while (playerSelection.toLowerCase() !== "rock" || playerSelection.toLowerCase() !== "paper" || playerSelection.toLowerCase() !== "scissors") {
        alert('Insert a valid Input')
        playerSelection = prompt("Choose from Rock, Paper or Scissors");
    }
} */

/* function caseInsensitive() {
    
} */
/* function checkResult() {
    
} */
// We write a function to play a full game which are 5 rounds

function game() {
    // Store the result of the round in a variable
    let round = playRound(playerSelection, computerSelection)
    console.log(round);
    // Check who won the first round
    console.log(checkRoundWinner(round));
    // Reset Variables
    resetRound();
    // Round 
    newRound();
    // Reset Variables
    resetRound();
    // New round Two
    newRound();
    // Reset Variables
    resetRound();
    // Round Three
    newRound();
    // Reset Variables
    resetRound();
    // Round Four
    newRound();
    resetRound();
    // Round Five
    newRound();
    // Check the winner of the game
    return checkGameWinner();
}

function checkGameWinner() {
    if (playerScore > computerScore) {
        return `You won with a score of ${playerScore} - ${computerScore} `
    } else if (playerScore < computerScore) {
        return `You lose with a score of ${playerScore} - ${computerScore} `
    } else {
        return `It's a TIE!`
    }
}

function newRound () {
    round = playRound(playerSelection, computerSelection)
    console.log(round);
    console.log(checkRoundWinner(round));
}

function resetRound() {
    playerSelection = prompt("Choose from Rock, Paper or Scissors");
    computerSelection = computerPlay();
}

function checkRoundWinner(round) {
    // Check if player won the game
    if (round === "You Win! Rock beats Scissors" || round === "You Win! Paper beats Rock" || round === "You Win! Scissors beats Paper") {
        playerScore += 1;
        return `You won the round. Your score is ${playerScore} - ${computerScore}.`;
    }
    // Check if computer won the game
    else if (round === "You Lose! Paper beats Rock" || round === "You Lose! Scissors beats Paper" || round === "You Lose! Rock beats Scissors") {
        computerScore += 1;
        return `You lose the round. Your score is ${playerScore} - ${computerScore}.`;
    }
    // Check if it's a TIE
    else {
        return `TIE round. Your score is ${playerScore} - ${computerScore}.`;
    }
}


let playerSelection = prompt("Choose from Rock, Paper or Scissors");
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
console.log(game());