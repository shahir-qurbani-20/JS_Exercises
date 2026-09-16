// **6.30 (Game: craps) Craps is a popular dice game played in casinos. Write a program 
// to play a variation of the game, as follows:
// Roll two dice. Each die has six faces representing values 1, 2, …, and 6, respec
// tively. Check the sum of the two dice. If the sum is 2, 3, or 12 (called craps), you 
// lose; if the sum is 7 or 11 (called natural), you win; if the sum is another value 
// (i.e., 4, 5, 6, 8, 9, or 10), a point is established. Continue to roll the dice until either 
// a 7 or the same point value is rolled. If 7 is rolled, you lose. Otherwise, you win.
// Your program acts as a single player. Here are some sample runs.
// You rolled 5 + 6 = 11
// You win
// You rolled 1 + 2 = 3
// You lose
// You rolled 4 + 4 = 8
// point is 8
// You rolled 6 + 2 = 8
// You win
// You rolled 3 + 2 = 5
// point is 5
// You rolled 2 + 5 = 7
// You lose

function craps() {
    let point = 0;
    let finish = 0;
    let result = '';

    for (let i = 0; finish != 1; i++) {

        let dice1 = Math.floor(Math.random() * 6 + 1);
        let dice2 = Math.floor(Math.random() * 6 + 1);
        let sum = dice1 + dice2;

        if (i == 0) {

            result += ('You rolled ' + dice1 + ' + ' + dice2 + ' = ' + sum);

            switch (sum) {

                case 7:
                case 11:
                    result += ('\nYou win!');
                    finish = 1;
                    break;

                case 2:
                case 3:
                case 12:
                    result += ('\nYou lose ):');
                    finish = 1;
                    break;

                default:
                    point = sum;
                    result += ('\nPoint is ' + point);
                    break;
            }

        } else {

            result += ('\nYou rolled ' + dice1 + ' + ' + dice2 + ' = ' + sum);

            if (sum == point) {
                result += ('\nYou win!');
                finish = 1;

            } else if (sum == 7) {
                result += ('\nYou lose ):');
                finish = 1;
            }
        }
    }
    console.log(result);
}

craps();