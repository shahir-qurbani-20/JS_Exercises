// **6.3 (Palindrome integer) Write the methods with the following headers
// // Return the reversal of an integer, i.e., reverse(456) returns 654
// public static int reverse(int number)
// // Return true if number is a palindrome
// public static boolean isPalindrome(int number)
// Use the reverse method to implement isPalindrome. A number is a palin
// drome if its reversal is the same as itself. Write a test program that prompts the 
// user to enter an integer and reports whether the integer is a palindrome.


let user = prompt('Enter an integer to find out is it palindrome or not.')
let FPart = 0;
let reverse = '';
let halfdigit = Math.floor(user.length / 2);
let SPart = user % Math.pow(10,halfdigit);

function palindrome () {
    (user.length % 2 == 0) ? FPart = Math.floor(user / (Math.pow(10,halfdigit))): FPart = Math.floor(user / Math.pow(10,halfdigit + 1));

    for(let i = 1; i <= halfdigit; i++){
        reverse += SPart % 10;
        SPart = Math.floor(SPart / 10);
    }
    (FPart == reverse)? console.log(user+" is a palindrome number."): console.log(user+" isn't a palindrome number.");
}

palindrome()