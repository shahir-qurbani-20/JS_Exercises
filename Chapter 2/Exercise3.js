// 2.3 (Convert feet into meters) Write a program that reads a number in feet, converts it 
// to meters, and displays the result. One foot is 0.305 meter. Here is a sample run:    
// Enter a value for feet: 16.5
// 16.5 feet is 5.0325 meter




var feetValue = Number(prompt('Enter a value for feet: '))
var meters = feetValue * 0.305
console.log(feetValue +' feet is '+ meters +' meters')