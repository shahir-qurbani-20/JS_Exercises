// *2.5 (Financial application: calculate tips) Write a program that reads the subtotal 
// and the gratuity rate, then computes the gratuity and total. For example, if the 
// user enters 10 for subtotal and 15% for gratuity rate, the program displays $1.5
// as gratuity and $11.5 as total. Here is a sample run:
// Enter the subtotal and a gratuity rate: 10 15
// The gratuity is $1.5 and total is $11.5




var subtotal = Number(prompt("Enter the subtotal:"))
var gratuityRate = Number(prompt("Enter the gratuity rate:"))
var gratuityAmount = gratuityRate / subtotal
var total = subtotal + gratuityAmount
console.log('The gratuity is '+ gratuityAmount +'$ and total is ' +total +'$')