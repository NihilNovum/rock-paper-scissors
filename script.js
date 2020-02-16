//Rock-Paper-Scissors JavaScript console version
//https://github.com/NihilNovum/

//Generate random number in given range [0 - (range-1)]
function getRandom(range) {
    return Math.floor(Math.random() * range);
}

//Conversion of user input to all lowercase string
function correctInput(userInput) {
    return userInput.toLowerCase();
    
}

//Pick computer player move
function computerPlay() {
    let choice = getRandom(3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

/*Check winner of a single match-up  
Draw returns 0 | Player win returns 1 | Computer win returns -1  */
function checkWinner(playerChoice, computerSelection) {
    if (playerChoice == computerSelection) {
        console.log("Draw! You both chose " + playerChoice + ".");
        return 0;
    }

    if (playerChoice == "rock") {
        if (computerSelection == "scissors") {
            console.log("You Win! Rock beats scissors");
            return 1;
        } else {
            console.log("You Lose! Paper beats rock");
            return -1;
        }
    }

    if (playerChoice == "paper") {
        if (computerSelection == "rock") {
            console.log("You Win! Paper beats rock");
            return 1;
        } else {
            console.log("You Lose! Scissors beat paper");
            return -1;
        }
    }

    if (playerChoice == "scissors") {
        if (computerSelection == "paper") {
            console.log("You Win! Scissors beat paper");
            return 1;
        } else {
            console.log("You Lose! Rock beats scissors");
            return -1;
        }
    }
}

//Play a single round of rock-paper-scissor
function playRound(playerSelection, computerSelection) {
    let playerChoice = correctInput(playerSelection); 
    let validChoice = false;

    //Validate user input 
    while (!validChoice) { 
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            validChoice = true;
        } else {
            playerChoice = prompt("Please select a valid move");
        }
    }
    //Declare single match-up winner (0 - draw, 1 - player, -1 - computer)
    let winner = checkWinner(playerChoice, computerSelection);
    return winner;

}

//Declares overall match winner in console after one player reaches established max score
function declareWinner(playerScore, computerScore, maxScore) {
    if (playerScore == maxScore) {
        console.log("Player wins!");
    } else if (computerScore == maxScore) {
        console.log("Computer wins");
    }
}

//Main game functionality
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let numberOfRounds = parseInt(prompt("How many rounds would you like the game to last?"));
    console.log(numberOfRounds);
    while (numberOfRounds <= 0 || isNaN(numberOfRounds)) { //Only accept positive numbers
        numberOfRounds = parseInt(prompt("Please enter correct number of rounds"));
    }
    while (playerScore < numberOfRounds && computerScore < numberOfRounds) {
        let playerSelection = prompt("Choose rock, paper or scissors: ");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            playerScore += 1;
        } else if (result == -1) {
            computerScore += 1;
        }
        console.log("-- Player score: " + playerScore + " -- -- Computer score: " + computerScore + " --");
        declareWinner(playerScore, computerScore, numberOfRounds);
    }
}

//Play the game
game();