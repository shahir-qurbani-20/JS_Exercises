// **3.9 (Business: check ISBN-10) An ISBN-10 (International Standard Book Number) 
// consists of 10 digits: d1d2d3d4d5d6d7d8d9d10. The last digit, d10, is a checksum, 
// which is calculated from the other nine digits using the following formula:
// (d1 * 1 + d2 * 2 + d3 * 3 + d4 * 4 + d5 * 5 +
// d6 * 6 + d7 * 7 + d8 * 8 + d9 * 9)%11
// If the checksum is 10, the last digit is denoted as X according to the ISBN-10 
// convention. Write a program that prompts the user to enter the first 9 digits and 
// displays the 10-digit ISBN (including leading zeros). Your program should read 
// the input as an integer. Here are sample runs:
// Enter the first 9 digits of an ISBN as integer: 013601267
// The ISBN-10 number is 0136012671
// Enter the first 9 digits of an ISBN as integer: 013031997
// The ISBN-10 number is 013031997X


let num = prompt('Enter the first 9 digits of an ISBN as integer:')

let sum = (num[0]*1+num[1]*2+num[2]*3+num[3]*4+num[4]*5+num[5]*6+num[6]*7+num[7]*8+num[8]*9) % 11;

(sum == 10)? console.log("The ISBN-10 number is "+num+'X') : console.log("The ISBN-10 number is "+num.concat(sum));
