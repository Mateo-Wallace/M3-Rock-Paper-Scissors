var gameStats = {
    wins: 0,
    losses: 0,
    ties: 0
}

var getRandom = function () {
    var rand = Math.floor( 3 * Math.random());
    switch (rand) {
        case 0:
            return 'r';
        case 1:
            return 'p';
        case 2:
            return 's';
        default:
            console.log('something went wrong');
            return 'n';
    }
}

alert('Welcome to Rock, Paper, Scissors!');

var replay = true;
while (replay) {
    var userInput = prompt('type r, p, or s');

    var isInvalid = true;
    while (isInvalid) {
        if (userInput == 'r' || userInput == 'p' || userInput == 's') {
            isInvalid = false;
        } else {
            alert('Your input was invalid. Try again.');
            userInput = prompt('type r, p, or s');
        } 
    }

    alert('You chose: ' + userInput);

    var computerChoice = getRandom();
    alert('The computer chose: ' + computerChoice);
    switch (userInput) {
        case 'r':
            if (computerChoice == 'r'){
                alert('Its a tie');
                gameStats.ties++;
                break;
            } else if (computerChoice == 'p'){
                alert('The computer wins');
                gameStats.losses++;
                break;
            } else {
                alert('You win')
                gameStats.wins++;
                break;
            }
        case 'p':
            if (computerChoice == 'p'){
                    alert('Its a tie');
                    gameStats.ties++;
                    break;
            } else if (computerChoice == 's'){
                    alert('The computer wins');
                    gameStats.losses++;
                    break;
            } else {
                    alert('You win')
                    gameStats.wins++;
                    break;
            }
        case 's':
            if (computerChoice == 's'){
                    alert('Its a tie');
                    gameStats.ties++;
                    break;
            } else if (computerChoice == 'p'){
                    alert('The computer wins');
                    gameStats.losses++;
                    break;
            } else {
                    alert('You win')
                    gameStats.wins++;
                    break;
            }
}

alert (
    'User State: \nWins: ' + gameStats.wins + 
    '\nLosses: ' + gameStats.losses + 
    '\nTies: ' + gameStats.ties
)

    replay = confirm('Play again?');
}
