const humanScore = 0;
const computerScore = 0;

console.log(computerScore, humanScore);
function getComputerChoice() {
    let computerRandomNumber;
    let computerChoice;

    // generate a random number to select one of the three game choices
    computerRandomNumber = Math.floor(Math.random() * 10);
    if (computerRandomNumber <= 3) {
        computerChoice = "rock";
    } else if (computerRandomNumber >= 4 && computerRandomNumber <= 7) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoiceInput;
    let initialHumanInput = prompt("Your move\n(Enter 'rock', 'paper', or 'scissors'): ", "rock");

    if (initialHumanInput.toLowerCase() === "rock" 
    || initialHumanInput.toLowerCase() === "paper"
    || initialHumanInput.toLowerCase() === "scissors") {
        humanChoiceInput = initialHumanInput;
        return humanChoiceInput;
    } else {
        alert("That isn't a valid move in Rock Paper Scissors!");
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    let humanScore = 0;
    let computerScore = 0;

    const computerWinMessage = `You lose! ${computerChoice} beats ${humanChoice}`;

    const humanWinMessage = `You win! ${humanChoice} beats ${computerChoice}`;

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            ++computerScore;
            console.log(computerWinMessage);
        } else {
            ++humanScore;
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
    // console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`); // check that the scores are incrementing as expected
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);