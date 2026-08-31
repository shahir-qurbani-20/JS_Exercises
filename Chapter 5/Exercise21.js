// Comprehensive
// **5.21 (Financial application: compare loans with various interest rates) Write a pro
// gram that lets the user enter the loan amount and loan period in number of years 
// and displays the monthly and total payments for each interest rate starting from 
// 5% to 8%, with an increment of 1/8. Here is a sample run:
// Loan Amount: 10000
// Number of Years: 5
// Interest Rate    Monthly Payment    Total Payment
// 5.000%           188.71             11322.74
// 5.125%           189.29             11357.13
// 5.250%           189.86             11391.59
// ...
// 7.875%           202.17             12129.97
// 8.000%           202.76             12165.84


let loan = Number(prompt('Enter the loan amount:'))
let n = Number(prompt('Enter the number of years:'))
let chart = ''


for (let i = 5 ; i <= 8 ; i += 0.125){

    let MP = ((loan) * (i / 1200) / (1 - (1 / (((i / 1200) + 1) ** (12 * n))))).toFixed(2).padEnd(19);
    
    let TP = (((loan) * (i / 1200) / (1 - (1 / (((i / 1200) + 1) ** (12 * n))))) * n * 12).toFixed(2);

    chart += i.toFixed(3)+'%'.padEnd(12) + MP + TP +'\n';
}

console.log("Interest Rate    Monthly Payment    Total Payment\n" + chart);
