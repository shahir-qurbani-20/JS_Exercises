// *3.31 (Financials: currency exchange) Write a program that prompts the user to enter 
// the exchange rate from currency in U.S. dollars to Chinese RMB. Prompt the user 
// to enter 0 to convert from U.S. dollars to Chinese RMB and 1 to convert from 
// Chinese RMB and U.S. dollars. Prompt the user to enter the amount in U.S. dol
// lars or Chinese RMB to convert it to Chinese RMB or U.S. dollars, respectively. 
// Here are the sample runs:
// Enter the exchange rate from dollars to RMB: 6.81
// Enter 0 to convert dollars to RMB and 1 vice versa: 0
// Enter the dollar amount: 100
// $100.0 is 681.0 yuan 
// Enter the exchange rate from dollars to RMB: 6.81
// Enter 0 to convert dollars to RMB and 1 vice versa: 5
// Enter the RMB amount: 10000
// 10000.0 yuan is $1468.43 
// Programming Exercises  117
// Enter the exchange rate from dollars to RMB: 6.81
// Enter 0 to convert dollars to RMB and 1 vice versa: 5
// Incorrect input


let rate = Number(prompt('Enter the exchange rate from dollars to RMB:'))
let convert = Number(prompt('Enter 0 to convert dollars to RMB and 1 vice versa:'))

if(convert == 0){
    let amount = Number(prompt('Enter the dollar amount:'))
    alert(amount + " dollars is " + (amount * rate).toFixed(2) + " yuan")
}
else if(convert == 1){
    let amount = Number(prompt('Enter the RMB amount:'))
    alert(amount + " yuan is " + (amount / rate).toFixed(2) + " dollars")
}
else{
    alert("Incorrect input")
}