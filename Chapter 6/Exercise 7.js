// *6.7 (Financial application: compute the future investment value) Write a method that 
// computes future investment value at a given interest rate for a specified number 
// of years. The future investment is determined using the formula in Programming 
// Exercise 2.21.
// Use the following method header:
// public static double futureInvestmentValue(
// double investmentAmount, double monthlyInterestRate, int years)
// For example, futureInvestmentValue(10000, 0.05/12, 5) returns 
// 12833.59.
// Write a test program that prompts the user to enter the investment amount (e.g., 
// 1000) and the interest rate (e.g., 9%) and prints a table that displays future value 
// for the years from 1 to 30, as shown below:
// The amount invested: 1000
// Annual interest rate: 9
// Years     Future Value
// 1             1093.80
// 2             1196.41
// ...
// 29           13467.25
// 30           14730.57


let amount = Number(prompt('Enter the amount:'))
let rate = Number(prompt('Enter the interest rate:'))
let future = amount*((1+rate/1200)**12);
let before = '';
let after = '';
let space = 0;
let chart = 'Years     Future Value';

function value(a,b){
    for (let i = 1; i <= 30; i++) {
        before = String(future.toFixed(2)).length;
        future = a*((1+b/1200)**(i*12));
        after = String(future.toFixed(2)).length;
        if(i<10){
            if (before==after) {
                if (space<i) {
                    chart += '\n'+i+'            '+future.toFixed(2);
                }else{
                    chart += '\n'+i+'           '+future.toFixed(2);
                }
            }else{
                chart += '\n'+i+'           '+future.toFixed(2);
                space = 9;
            }
        }else{
            if (before==after) {
                if (space<i) {
                    chart += '\n'+i+'           '+future.toFixed(2);
                }else{
                    chart += '\n'+i+'          '+future.toFixed(2);
                }
            }else{
                chart += '\n'+i+'          '+future.toFixed(2);
                space = 30;
            }
        }
    }
    console.log(chart);
}
value(amount,rate);
