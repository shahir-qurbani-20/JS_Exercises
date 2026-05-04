// *4.21 (Check SSN) Write a program that prompts the user to enter a Social Security 
// number in the format DDD-DD-DDDD, where D is a digit. Your program should 
// check whether the input is valid. Here are sample runs:
// Enter a year: 2016
// Enter a month: Feb
// Jan 2016 has 29 days
// Enter two characters: M1
// Mathematics Freshman
// Enter two characters: C3
// Computer Science Junior
// Enter two characters: T3
// Invalid input
// Enter a SSN: 232-23-5435
// 232-23-5435 is a valid social security number
// Enter a SSN: 23-23-5435
// 23-23-5435 is an invalid social security number



let ssn = prompt('Enter a SSN:')

let ddd1 = ssn.charAt(0)/1
let ddd2 = ssn.charAt(1)/1
let ddd3 = ssn.charAt(2)/1

let dash1 = ssn.charAt(3)

let dd1 = ssn.charAt(4)/1
let dd2 = ssn.charAt(5)/1

let dash2 = ssn.charAt(6)

let dddd1 = ssn.charAt(7)/1
let dddd2 = ssn.charAt(8)/1
let dddd3 = ssn.charAt(9)/1
let dddd4 = ssn.charAt(10)/1

if(ddd1 == NaN || ddd2 == NaN || ddd3 == NaN 
    || dd1 == NaN || dd2 == NaN 
    || dddd1 == NaN || dddd2 == NaN || dddd3 == NaN || dddd4 == NaN 
    || dash1 != '-' || dash2 != '-'){
        alert(ssn + ' is an invalid social security number')
    }else(
        alert(ssn + ' is a valid social security number')
    )