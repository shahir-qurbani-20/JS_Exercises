// **7.24 (Simulation: coupon collector’s problem) Coupon collector is a classic statistics 
// problem with many practical applications. The problem is to pick objects from 
// a set of objects repeatedly and find out how many picks are needed for all the 
// objects to be picked at least once. A variation of the problem is to pick cards from 
// a shuffled deck of 52 cards repeatedly and find out how many picks are needed 
// before you see one of each suit. Assume a picked card is placed back in the deck 
// before picking another. Write a program to simulate the number of picks needed 
// to get four cards from each suit and display the four cards picked (it is possible a 
// card may be picked twice). Here is a sample run of the program: 
// Queen of Spades
// 5 of Clubs
// Queen of Hearts
// 4 of Diamonds
// Number of picks: 12



function randomCards() {
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    let suits = ['Spades', 'Clubs', 'Hearts', 'Dimonds'];
    let rankIndex = Math.floor(Math.random() * ranks.length);
    const suitIndex = Math.floor(Math.random() * suits.length);

    return `${ranks[rankIndex]} of ${suits[suitIndex]}`;
}

function allPicks() {
    let suitCardsPicked = [];
    let result = '';
    let card;
    let count = 0;

    while (suitCardsPicked.length < 4) {
        card = randomCards();

        if (card.includes('Spades')) {
            if (!suitCardsPicked.includes('Spades')) {
                suitCardsPicked.push('Spades')
            }
        } else if (card.includes('Clubs')) {
            if (!suitCardsPicked.includes('Clubs')) {
                suitCardsPicked.push('Clubs')
            }
        } else if (card.includes('Hearts')) {
            if (!suitCardsPicked.includes('Hearts')) {
                suitCardsPicked.push('Hearts')
            }
        } else if (card.includes('Dimonds')) {
            if (!suitCardsPicked.includes('Dimonds')) {
                suitCardsPicked.push('Dimonds')
            }
        }
        count++;
        result += card +'\n';
    }
    result += "Number of picks: "+ count;
    console.log(result);
}
allPicks();
