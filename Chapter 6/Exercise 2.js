// *6.2 (Sum the digits in an integer) Write a method that computes the sum of the digits 
// in an integer. Use the following method header:
// public static int sumDigits(long n)
// For example, sumDigits(234) returns 9 (2 + 3 + 4). (
// Hint: Use the % operator to extract digits, and the / operator to remove the extracted digit. For instance, 
// to extract 4 from 234, use 234 % 10 (= 4). To remove 4 from 234, use 234 / 10
// (= 23). Use a loop to repeatedly extract and remove the digit until all the digits 
// are extracted. Write a test program that prompts the user to enter an integer and 
// displays the sum of all its digits.



let user = prompt('Enter a number:')
let extract = 0;
let number = 0;

function sigma() {
    number = user;
    for(let i = 1; i <= user.length; i++){
        extract += number % 10;
        number = Math.floor(number / 10);
    }
    console.log(extract+' is the sum of all digits of '+user);
}
sigma()