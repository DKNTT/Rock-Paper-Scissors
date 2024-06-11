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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if ((humanChoice == 'rock') && (computerChoice == 'scissors')) {
            console.log('You win the round! Rock beats Scissors.');
            humanScore++;
        }
        else if ((humanChoice == 'rock') && (computerChoice == 'paper')) {
            console.log('You lose the round! Paper beats Rock.');
            computerScore++;
        }
        else if ((humanChoice == 'paper') && (computerChoice == 'rock')) {
            console.log('You win the round! Paper beats Rock.');
            humanScore++;
        }
        else if ((humanChoice == 'paper') && (computerChoice == 'scissors')) {
            console.log('You lose the round! Scissors beats Paper.');
            computerScore++;
        }
        else if ((humanChoice == 'scissors') && (computerChoice == 'rock')) {
            console.log('You lose the round! Rock beats Scissors.');
            computerScore++;
        }
        else if ((humanChoice == 'scissors') && (computerChoice == 'paper')) {
            console.log('You win the round! Scissors beats Paper.');
            humanScore++;
        }
        else {
            console.log(`The round is a draw! You both chose ${humanChoice}.`);
        }
    }

    // for (i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection);


    const rock_btn = document.createElement("button");
    const paper_btn = document.createElement("button");
    const scissors_btn = document.createElement("button");

    const container = document.querySelector('#container');
    container.appendChild(rock_btn);
    container.appendChild(paper_btn);
    container.appendChild(scissors_btn);
    rock_btn.textContent = 'Rock';
    paper_btn.textContent = 'Paper';
    scissors_btn.textContent = 'Scissors';


    rock_btn.addEventListener('click', () => {
        const humanSelection = 'rock';
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })

    paper_btn.addEventListener('click', () => {
        const humanSelection = 'paper';
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })

    scissors_btn.addEventListener('click', () => {
        const humanSelection = 'scissors';
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    })



    // if (humanScore > computerScore) {
    //     gameOutcome = 'won';
    // } else if (humanScore < computerScore) {
    //     gameOutcome = 'lost';
    // } else {
    //     gameOutcome = 'Drew'
    // }

    // console.log(`Game over. You ${gameOutcome}, with a score of ${humanScore} compared to the computer's score of ${computerScore}.`)

}



playGame();