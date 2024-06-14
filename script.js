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



    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");

    const container = document.querySelector('#container');
    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);
    rockBtn.textContent = 'Rock';
    paperBtn.textContent = 'Paper';
    scissorsBtn.textContent = 'Scissors';


    const resultsDiv = document.createElement("div");
    container.appendChild(resultsDiv);

    const scoreText = document.createElement('p');
    scoreText.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
    resultsDiv.appendChild(scoreText);

    const roundEndText = document.createElement('p');
    resultsDiv.appendChild(roundEndText);


    rockBtn.addEventListener('click', () => {
        const humanSelection = 'rock';
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        checkFinished();
    })

    paperBtn.addEventListener('click', () => {
        const humanSelection = 'paper';
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        checkFinished();
    })

    scissorsBtn.addEventListener('click', () => {
        const humanSelection = 'scissors';
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        checkFinished();
    })

    function checkFinished() {
        if ((humanScore == 5) || (computerScore == 5)) {
            if (humanScore == 5) {
                alert(`Game over. You won, with a score of ${humanScore} compared to the computer's score of ${computerScore}.`);
            }
            else if (computerScore == 5) {
                alert(`Game over. You Lost, with a score of ${humanScore} compared to the computer's score of ${computerScore}.`);
            }
            humanScore = 0;
            computerScore = 0;
            scoreText.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
            roundEndText.textContent = ``;

        }
    }




    function playRound(humanChoice, computerChoice) {

        if ((humanChoice == 'rock') && (computerChoice == 'scissors')) {
            roundEndText.textContent = `You win the round! Rock beats Scissors.`;
            humanScore++;
            scoreText.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
        }
        else if ((humanChoice == 'rock') && (computerChoice == 'paper')) {
            roundEndText.textContent = `You lose the round! Paper beats Rock.`;
            computerScore++;
            scoreText.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
        }
        else if ((humanChoice == 'paper') && (computerChoice == 'rock')) {
            roundEndText.textContent = `You win the round! Paper beats Rock.`;
            humanScore++;
            scoreText.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
        }
        else if ((humanChoice == 'paper') && (computerChoice == 'scissors')) {
            roundEndText.textContent = `You lose the round! Scissors beats Paper.`;
            computerScore++;
            scoreText.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
        }
        else if ((humanChoice == 'scissors') && (computerChoice == 'rock')) {
            roundEndText.textContent = `You lose the round! Rock beats Scissors.`;
            computerScore++;
            scoreText.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
        }
        else if ((humanChoice == 'scissors') && (computerChoice == 'paper')) {
            roundEndText.textContent = `You win the round! Scissors beats Paper.`;
            humanScore++;
            scoreText.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
        }
        else {
            roundEndText.textContent = `The round is a draw! You both chose ${humanChoice}.`;
            scoreText.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
        }
    }
}



playGame();