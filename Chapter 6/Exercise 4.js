// *6.4 (Display an integer reversed) Write a method with the following header to display 
// an integer in reverse order:
// public static void reverse(int number)
// For example, reverse(3456) displays 6543. Write a test program that prompts 
// the user to enter an integer and displays its reversal.


let reversal = '';
let num = prompt("Enter a number to display it's reversal")
let digits = num.length;


function reverse (place){
    for(let i = 1; i <= digits; i++){
        reversal += place % 10;
        place = Math.floor(place / 10);
    }
    console.log(reversal);
}

reverse(num);