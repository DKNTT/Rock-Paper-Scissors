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

console.log(getComputerChoice())