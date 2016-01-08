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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move || getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    switch (playerMove){
	case 'rock':
		switch(computerMove){
			case 'paper':
				winner = 'computer';
				break;
			case 'scissors':
				winner = 'player';
				break;
			case 'rock':
				winner = 'tie';
				break;
			default:
				winner = 'tie';
				alert('invalid computerMove');
		}
		break;
	case 'paper':
		switch(computerMove){
			case 'paper':
				winner = 'tie';
				break;
			case 'scissors':
				winner = 'computer';
				break;
			case 'rock':
				winner = 'player';
				break;
			default:
				winner = 'tie';
				alert ('invalid computerMove');
		}
		break;
	case 'scissors':
		switch(computerMove){
			case 'paper':
				winner = 'player';
				break;
			case 'scissors':
				winner = 'tie';
				break;
			case 'rock':
				winner = 'computer';
				break;
			default:
				winner = 'tie';
				alert ('invalid computerMove');
		}
		break;
	default:
		winner = 'tie';
		alert ('invalid playerMove');
    }		
    return winner;
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var curWinner, pMove, cMove;
    var gameEnd = false;

    while (!gameEnd){
	pMove = getInput();
	cMove = randomPlay();
	curWinner = getWinner(pMove, cMove);
	switch (curWinner){
		case 'player':
			playerWins++;
			break;
		case 'computer':
			computerWins++;
			break;
		default:
	}
  
	console.log('Player chose ' + pMove + ' while Computer chose ' + cMove);
	console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
	if (playerWins === x || computerWins === x) gameEnd = true;
    }

    return [playerWins, computerWins];
}

function playToFive(){
    return playTo(5);
}

