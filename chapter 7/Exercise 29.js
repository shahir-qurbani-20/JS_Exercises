// *7.29 (Game: pick four cards) Write a program that picks four cards from a deck of 52 
// cards and computes their sum. An Ace, King, Queen, and Jack represent 1, 13, 
// 12, and 11, respectively. Your program should display the number of picks that 
// yields the sum of 24.



let cards = [];
let width = 52;
let pick;
let suit;
let score;
let rank;
let result  = '';

for (let i = 0; i < 52; i++) {
    cards.push(i);
}

for (let i = 0; i < 13; i++) {
    result += i+1+'-You picked :\n'
    score = 0;
    for (let i = 0; i < 4; i++) {
        pick = Math.floor(Math.random() * width);
        if (cards[pick] < 13) {
            suit = 'Dimonds';
        }else if (cards[pick] < 26) {
            suit = 'Hearts'
        }else if (cards[pick] < 39) {
            suit = 'Spades'
        }else{
            suit = 'Clubs'
        }
        if (cards[pick] % 13 == 11) {
            rank = 'Jack';
            score += 11;
        }else if (cards[pick] % 13 == 12) {
            rank = 'Queen';
            score += 12;
        }else if (cards[pick] % 13 == 0) {
            rank = 'King';
            score += 13;
        }else if (cards[pick] % 13 == 1) {
            rank = 'Ace';
            score += 1;
        }else{
            rank = cards[pick] % 13;
            score += cards[pick] % 13;
        }
        result += '    '+ rank +' of '+ suit+'\n';
        cards.splice(pick,1);
        width--;
    }
    result += '    score ==> '+score+'\n\n';
}
console.log(result);   
