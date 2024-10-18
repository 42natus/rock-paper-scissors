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

    const computerWinMessage = `You lose! ${computerChoice} beats ${humanChoice}`;

    const humanWinMessage = `You win! ${humanChoice} beats ${computerChoice}`;

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock") {
        computerChoice === "paper" ? console.log(computerWinMessage) : console.log(humanWinMessage);
    } else if (humanChoice === "paper") {
        computerChoice === "rock" ? console.log(humanWinMessage) : console.log(computerWinMessage);
    } else if (humanChoice === "scissors") {
        computerChoice === "rock" ? console.log(computerWinMessage) : console.log(humanWinMessage);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);