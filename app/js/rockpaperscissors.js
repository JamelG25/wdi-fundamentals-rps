////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

function getPlayerMove(x) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

    
    return getInput(); 
    
}

function getComputerMove() {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
 
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    


    if ( playerMove === computerMove ){
        return 'draw';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        return  'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        return 'player';
    } else if (playerMove === 'scissors' && computerMove === 'paper'){
        return  'player';
    } else {
        return  'computer';
    }    
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    // While Loop// 
     while ( playerWins < 5 && computerWins < 5 ){
        
        // playerMove chooses
      
        var playerMove = getPlayerMove();
    
        // getComputerMove chooses
        var computerMove = getComputerMove();
        console.log("computer chooses - " + computerMove);
        // getWinner
        var winner = getWinner(playerMove, computerMove);
        console.log("winner - " + winner);
    
        if( winner=== "player"){
            playerWins++;
        } else if (winner === "computer") {
            computerWins++;
         }
       console.log("Player: " + playerWins + "\nComputer: " + computerWins);
    }    
    
    if (playerWins ===5){
        console.log("Congrat to player ");
    } else {
        console.log("Maybe Next Time!!");
    }
    
}

playToFive();