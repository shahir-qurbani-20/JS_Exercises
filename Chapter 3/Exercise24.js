// **3.24 (Game: pick a card) Write a program that simulates picking a card from a deck 
// of 52 cards. Your program should display the rank (Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// Jack, Queen, King) and suit (Clubs, Diamonds, Hearts, Spades) of the card. 
// Here is a sample run of the program:
// The card you picked is Jack of Hearts 


let usernum1 = Math.floor(Math.random()*13) + 1
let usernum2 = Math.floor(Math.random()*4) + 1

if(usernum1 == 1){
    rank = 'Ace'
}else if(usernum1 == 11){
    rank = 'Jack'
}else if(usernum1 == 12){
    rank = 'Queen'
}else if(usernum1 == 13){
    rank = 'King'
}else(
    rank = usernum1
)

if(usernum2 == 1){
    suit = 'Clubs'
}else if(usernum2 == 2){
    suit = 'Diamonds'
}else if(usernum2 == 3){
    suit = 'Hearts'
}else(
    suit = 'Spades'
)

alert('The card you picked is '+ rank +' of '+ suit)