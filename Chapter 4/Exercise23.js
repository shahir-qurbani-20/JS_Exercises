// *4.23 (Financial application: payroll) Write a program that reads the following infor
// mation and prints a payroll statement: 
// Employee’s name (e.g., Smith)
// Number of hours worked in a week (e.g., 10)
// Hourly pay rate (e.g., 9.75)
// Federal tax withholding rate (e.g., 20%)
// State tax withholding rate (e.g., 9%)
// A sample run is shown below:
// Enter employee's name: Smith
// Enter number of hours worked in a week: 10
// Enter hourly pay rate: 9.75
// Enter federal tax withholding rate: 0.20
// Enter state tax withholding rate: 0.09
// Employee Name: Smith
// Hours Worked: 10.0
// Pay Rate: $9.75
// Gross Pay: $97.5
// Deductions:
//   Federal Withholding (20.0%): $19.5
//   State Withholding (9.0%): $8.77
//   Total Deduction: $28.27
// Net Pay: $69.22



var name = prompt("Enter employee's name: ")
var hours = Number(prompt("Enter number of hours worked in a week: "))
var rate = Number(prompt("Enter hourly pay rate: "))
var federal = Number(prompt("Enter federal tax withholding rate: "))
var state = Number(prompt("Enter state tax withholding rate: "))

var federalTax = federal * rate * hours
var stateTax = state * rate * hours

console.log('Employee name: '+name);
console.log('Hours worked: '+hours);
console.log('Pay rate: '+rate);
console.log('Gross pay : '+(rate*hours).toFixed(2));
console.log('Deductions: ');
console.log('    Federal Withholding ('+federal*100+'%): $'+federalTax.toFixed(2));
console.log('    State Withholding ('+state*100+'%): $'+stateTax.toFixed(2));
console.log('    Total Deductions: $'+(federalTax+stateTax).toFixed(2));
console.log('Net pay: $'+((rate*hours)-federalTax-stateTax).toFixed(2));
