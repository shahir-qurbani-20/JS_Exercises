// *2.21 (Financial application: calculate future investment value) Write a program that 
// reads in investment amount, annual interest rate, and number of years, and dis
// plays the future investment value using the following formula:
// futureInvestmentValue =
// investmentAmount * (1 + monthlyInterestRate)numberOfYears*12
// For example, if you enter amount 1000, annual interest rate 3.25%, and number 
// of years 1, the future investment value is 1032.98.
// Here is a sample run:
// Enter investment amount: 1000.56
// Enter annual interest rate in percentage: 4.25
// Enter number of years: 1
// Accumulated value is $1043.92 



let investment = Number(prompt('enter investment amount:'))
let interestRate = Number(prompt('enter annual interset rate in percentage:'))
let years = Number(prompt('enter number of years:'))
let futureInvestmentValue = investment * (( 1 + (interestRate / 1200 )) ** ( years * 12 ))
console.log('accumulated value is ' + futureInvestmentValue)