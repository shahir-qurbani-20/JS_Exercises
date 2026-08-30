// 5.40 (Simulation: heads or tails) Write a program that simulates flipping a coin one 
// million times and displays the number of heads and tails.


let coin = 0;
let head = 0;
let tail = 0;

for (let i = 1 ; i <= 1000000 ; i++){
    
    coin = Math.floor(Math.random() * 10);
    if(coin < 5){
        head++
    }else if(coin > 4 ){
        tail++
    }
}
console.log('Head   '+head+'\nTail   '+tail);