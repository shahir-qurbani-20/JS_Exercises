// 2.11 (Population projection) Rewrite Programming Exercise 1.11 to prompt the user 
// to enter the number of years and displays the population after the number of years. 
// Use the hint in Programming Exercise 1.11 for this program. The population 
// should be cast into an integer. Here is a sample run of the program:
// Enter the number of years: 5
// The population in 5 years is 325932970


var years = Number(prompt('enter the number of years:'))
var spendedTime = years * 365 * 24 * 60 * 60
var births = spendedTime / 7
var deaths = spendedTime / 13
var NewImmigrants = spendedTime / 45
var population = 312032486 + births + NewImmigrants - deaths
console.log('The new population after 5 years is: '+ population.toFixed(0))