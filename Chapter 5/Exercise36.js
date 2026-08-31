// **5.36 (Business application: checking ISBN) Use loops to simplify Programming 
// Exercise 3.9.


let number = prompt("Enter the first 9 digits of an ISBN as integer:");
let sum = 0;
let final = 0;
let ISBN = ''

if( /^\d{9}$/.test(number)){

    for(let i = 1 ; i <= 9 ; i++){
        sum += i * number[i-1]
    }
    final = sum % 11
    if(final == 10){
        ISBN = number + 'X';
    }else{
        ISBN = number + String(final)
    }
    console.log('The ISBN-10 number is '+ISBN);
}else{
    alert("Please enter exacly 9 digits.")
}