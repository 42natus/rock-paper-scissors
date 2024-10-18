function getComputerChoice() {
    let computerRandomNumber;
    let computerChoice;

    // generate a random number to select one of the three game choices
    computerRandomNumber = Math.floor(Math.random() * 10);
    if (computerRandomNumber <= 3) {
        computerChoice = "Rock";
    } else if (computerRandomNumber >= 4 && computerRandomNumber <= 7) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

console.log(getComputerChoice());   // test that the function works as expected