function getComputerChoice() {
    rand_num = Math.random()
    if (rand_num < 1 / 3) {
        return 'rock'
    } else if ((rand_num >= 1 / 3) && (rand_num < 2 / 3)) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    choice = prompt('What is your choice?');
    choice = choice.toLowerCase();
    if ((choice != 'rock') && (choice != 'paper' && (choice != 'scissors'))) {
        console.log('Error: Please enter a valid choice (rock, paper, or scissors).')
        choice = getHumanChoice();
        return choice
    } else {
        return choice
    }
}

function playRound(humanChoice, computerChoice) {

    if ((humanChoice == 'rock') && (computerChoice == 'scissors')) {
        console.log('You Win! Rock beats Scissors.');
        humanScore++;
    }
    else if ((humanChoice == 'rock') && (computerChoice == 'paper')) {
        console.log('You Lose! Paper beats Rock.');
        computerScore++;
    }
    else if ((humanChoice == 'paper') && (computerChoice == 'rock')) {
        console.log('You Win! Paper beats Rock.');
        humanScore++;
    }
    else if ((humanChoice == 'paper') && (computerChoice == 'scissors')) {
        console.log('You Lose! Scissors beats Paper.');
        computerScore++;
    }
    else if ((humanChoice == 'scissors') && (computerChoice == 'rock')) {
        console.log('You Lose! Rock beats Scissors.');
        computerScore++;
    }
    else if ((humanChoice == 'scissors') && (computerChoice == 'paper')) {
        console.log('You Win! Scissors beats Paper.');
        humanScore++;
    }
    else {
        console.log(`It\'s a draw! You both chose ${humanChoice}.`);
    }

}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

