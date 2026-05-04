// 4.19 (Business: check ISBN-10) Rewrite the Programming Exercise  3.9 by entering the 
// ISBN number as a string.



let num = prompt('Enter the first 9 digits of an ISBN as integer:')

let sum = (num[0]*1+num[1]*2+num[2]*3+num[3]*4+num[4]*5+num[5]*6+num[6]*7+num[7]*8+num[8]*9) % 11;

(sum == 10)? console.log("The ISBN-10 number is "+num+'X') : console.log("The ISBN-10 number is "+num.concat(sum));