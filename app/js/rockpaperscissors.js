
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move = move || getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move = move || randomPlay());
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if ((playerMove = 'rock') && (computerMove = 'rock')) {
        winner = 'tie';
    } else if ((playerMove = 'rock') && (computerMove = "paper")){
        winner = 'computer';
    } else if ((playerMove = 'rock') && (computerMove = 'scissors')) {
        winner = 'player';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    getInput();
    while (playerWins < 5 || computerWins < 5) {
        var player = getPlayerMove();
        var computer = getComputerMove();
        var winner = getWinner();
    if (winner === player) {
        playerWins = (playerWins + 1);
        console.log("You win this time! Try again:");
        playToFive();
    } else if (winner === computer) {
        computerWins = (computerWins + 1);
        console.log("Sorry, you lose. Try again:");
        playToFive();
    }
     if (playerWins === 5) {
        console.log("You won against your opponent's" + " " + computerWins + " " + "games! Way to go!");
    } else if (computerWins === 5) {
        console.log("Sorry, you lost" + " " + computerWins + " " + "games.");
    }break;
    }

}
playToFive();
    