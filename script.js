function getRandom(range) {
    return Math.floor(Math.random() * range);
}

function correctInput(userInput) {
    return userInput.toLowerCase();
}

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

function playRound(playerSelection, computerSelection) {
    let playerChoice = correctInput(playerSelection);
    let validChoice = false;
    while (!validChoice) {
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors" ) {
           validChoice = true;
           } else {
        playerChoice = prompt("Please select a valid move");
        }
    }
    if (playerChoice == computerSelection) {
        console.log("Draw");
        return 0;
    } else if (playerChoice == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats scissors");
        return 1;
    } else if (playerChoice == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats rock");
        return 1;
    } else if (playerChoice == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats paper");
        return 1;
    } else if (playerChoice == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats rock");
        return -1;
    } else if (playerChoice == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beat paper");
        return -1;
    } else if (playerChoice == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats scissors");
        return -1;
    }
}

function checkWinner(playerScore, computerScore, maxScore) {
    if (playerScore == maxScore) {
        console.log("Player wins!");
    } else if (computerScore == maxScore) {
        console.log("Computer wins");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let numberOfRounds = prompt("How many rounds would you like the game to last?");
    while ( numberOfRounds == "" || numberOfRounds <= 0) {
        numberOfRounds = prompt("Please enter correct number of rounds");
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
        checkWinner(playerScore, computerScore, numberOfRounds);
    }
}


game();