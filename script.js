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
    if ((choice != 'rock') && (choice != 'paper' && (choice != 'scissors'))) {
        console.log('Error: Please enter a valid choice (rock, paper, or scissors).')
        choice = getHumanChoice();
        return choice
    } else {
        return choice
    }
}
console.log(getHumanChoice());
console.log(getComputerChoice());
