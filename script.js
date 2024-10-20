function getComputerChoice() {
    let computerRandomNumber;   // store generated random number
    let computerChoice; // computer's move based on generated random number

    // generate a random number from 0 - 9 to select one of the three game choices
    computerRandomNumber = Math.floor(Math.random() * 10);

    // assign 3 groups of numbers within the range 0 - 9 to each valid move in Rock Paper Scissors
    if (computerRandomNumber <= 3) {
        computerChoice = "rock";
    } else if (computerRandomNumber >= 4 && computerRandomNumber <= 6) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Your move:\n(Enter 'rock', 'paper', or 'scissors')", "rock");  

    // validate human player's move
    if (humanChoice.toLowerCase() === "rock" 
    || humanChoice.toLowerCase() === "paper"
    || humanChoice.toLowerCase() === "scissors") {
        humanChoice = humanChoice.toLowerCase();    // make humanChoice case-insensitive
        return humanChoice;
    } else {    // invalid move
        alert("That isn't a valid move in Rock Paper Scissors!");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // messages to be displayed when the player either wins or loses
        const computerWinMessage = `\tYou lose! ${computerChoice} beats ${humanChoice}`;
        const humanWinMessage = `\tYou win! ${humanChoice} beats ${computerChoice}`;
    
        // logic for gameplay
        if (humanChoice === computerChoice) {   // handle ties explicitly
            console.log(`\tIt's a tie! ${humanChoice} - ${computerChoice}`);
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                ++computerScore;    // computer wins, increment score
                console.log(computerWinMessage);
            } else {
                ++humanScore;   // human player wins, increment score
                console.log(humanWinMessage);
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                ++humanScore;
                console.log(humanWinMessage)  
            } else {
                ++computerScore;
                console.log(computerWinMessage);
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                ++computerScore;
                console.log(computerWinMessage)
            } else {
                ++humanScore;
                console.log(humanWinMessage);
            }
        }
        
    }

    // loop to run Rock Paper Scissors for 5 rounds
    for (let i = 0; i < 5; i++) {
        // assign callback functions to constants
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`ROUND ${i + 1}`);  // display round number

        playRound(humanSelection, computerSelection);
        // display scores for each round
        console.log(`\tYour score: ${humanScore}\n\tComputer score: ${computerScore}`);
    }

    // declare winner
    if (humanScore === computerScore) {
        console.log("\nTHE GAME ENDED IN A TIE! WANNA GO AGAIN?");
        alert("The game ended in a tie! Wanna go again?");
    } else if (humanScore > computerScore) {
        console.log("\nYOU WON!");
        alert("You won! YAYYY!!!");
    } else {
        console.log("\nCOMPUTER WON! BETTER LUCK NEXT TIME...");
        alert("Computer won! Better luck next time...");
    }
}

playGame();