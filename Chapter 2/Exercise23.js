// *2.23 (Cost of driving) Write a program that prompts the user to enter the distance to 
// drive, the fuel efficiency of the car in miles per gallon, and the price per gallon, 
// and displays the cost of the trip. Here is a sample run:
// Enter the driving distance: 900.5
// Enter miles per gallon: 25.5
// Enter price per gallon: 3.55
// The cost of driving is $125.36



let distance = Number(prompt('enter the driving distance:'))
let fuelEfficiency = Number(prompt('enter miles per gallon:'))
let price = Number(prompt('enter price per gallon:'))
let cost = distance / fuelEfficiency * price
console.log('The cost of driving is ' + cost)