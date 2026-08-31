// **5.32 (Game: lottery)Revise Listing 3.8, Lottery.java, to generate a lottery of a two
// digit number. The two digits in the number are distinct. (Hint: Generate the first 
// digit. Use a loop to continuously generate the second digit until it is different 
// from the first digit.)


let guess = Number(prompt('Enter your lottery pick (tow digits):'));

let guess1 = Math.floor(guess / 10);
let guess2 = guess % 10;

let firstDigit = Math.floor((Math.random() * 100) % 10);
let secondDigit = Math.floor((Math.random() * 100) % 10);

for(let j = 1 ; firstDigit<1 ; j++){
    firstDigit = Math.floor((Math.random() * 100) % 10);
}
for(let i = 1 ; firstDigit == secondDigit ; i++){
    secondDigit = Math.floor((Math.random() * 100) % 10);
}

if(firstDigit==guess1 && secondDigit==guess2){
    alert('The lottery number is '+firstDigit+secondDigit+'\nExact match: you win $10,000')
}else if(firstDigit==guess2 && secondDigit==guess1){
    alert('The lottery number is '+firstDigit+secondDigit+'\nMatch all digits: you win $3,000')
}else if(firstDigit==guess1||firstDigit==guess2||secondDigit==guess1||secondDigit==guess2){
    alert('The lottery number is '+firstDigit+secondDigit+'\nMatch one digit: you win $1,000')
}else{
    alert('The lottery number is '+firstDigit+secondDigit+'\nSorry: no match ')
}