// 3.14 (Game: heads or tails) Write a program that lets the user guess whether the flip of 
// a coin results in heads or tails. The program randomly generates an integer 0 or 1,
// which represents head or tail. The program prompts the user to enter a guess and 
// reports whether the guess is correct or incorrect.



let guess = prompt('Head or tail?\n0 is head \n1 is tail\nEnter th number:')

let coin = Math.round(Math.random())    //return 0 OR 1

if(guess == coin){
    alert(coin + '\nYour guess is correct.')
}else(
    alert(coin + '\nYour guess is incorrect.')
)