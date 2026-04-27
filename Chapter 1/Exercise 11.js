// 1.11 (Population projection) The U.S. Census Bureau projects population based on the 
// following assumptions:
//  ■ One birth every 7 seconds
//  ■ One death every 13 seconds
//  ■ One new immigrant every 45 seconds
// Write a program to display the population for each of the next five years. Assume the 
// current population is 312,032,486 and one year has 365 days. Hint: In Java, if two 
// integers perform division, the result is an integer. The fractional part is truncated. For 
// example, 5 / 4 is 1 (not 1.25) and 10 / 4 is 2 (not 2.5). To get an accurate result with 
// the fractional part, one of the values involved in the division must be a number with a 
// decimal point. For example, 5.0 / 4 is 1.25 and 10 / 4.0 is 2.5.



var spendedTime = 365 * 24 * 60 * 60

var year1 = 312032486 + spendedTime/7 + spendedTime/45 - spendedTime/13
var year2 = year1 + spendedTime/7 + spendedTime/45 - spendedTime/13
var year3 = year2 + spendedTime/7 + spendedTime/45 - spendedTime/13
var year4 = year3 + spendedTime/7 + spendedTime/45 - spendedTime/13
var year5 = year4 + spendedTime/7 + spendedTime/45 - spendedTime/13
console.log('Now the population is 312032486 \n'+"The new population after 1 year is "+year1.toFixed(0)+"\nThe new population after 2 years is "+year2.toFixed(0)+"\nThe new population after 3 years is "+year3.toFixed(0)+"\nThe new population after 4 years is "+year4.toFixed(0)+"\nThe new population after 5 years is "+year5.toFixed(0))