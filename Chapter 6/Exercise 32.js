// **6.32 (Game: chance of winning at craps) Revise Exercise 6.30 to run it 10,000 times 
// and display the number of winning games.



function craps() {
    let win = 0;
    let result = 'Your winning game of 10000 rounds of playing Craps game is ';
    
    for (let m = 1; m <= 10000; m++) { 
        let finish = 0;
        let point = 0;
        for (let i = 0; finish != 1; i++) {
            
            let dice1 = Math.floor(Math.random() * 6 + 1);
            let dice2 = Math.floor(Math.random() * 6 + 1);
            let sum = dice1 + dice2;
            
            if (i == 0) {
                switch (sum) {        
                    case 7:
                    case 11:
                    win += 1;
                    finish = 1;
                    break;

                    case 2:
                    case 3:
                    case 12:
                    finish = 1;
                    break;
                    
                    default:
                        point = sum;
                    break;
                }
            } else {
                if (sum == point) {
                    win += 1;
                    finish = 1;

                } else if (sum == 7) {
                    finish = 1;
                }
            }
        }
    }
    console.log(result+win);
}

craps();