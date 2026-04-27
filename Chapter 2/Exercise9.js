// 2.9 (Physics: acceleration) Average acceleration is defined as the change of velocity 
// divided by the time taken to make the change, as shown in the following formula:
// a = v1- v0
// t
// Write a program that prompts the user to enter the starting velocity v0 in meters/
// second, the ending velocity v1 in meters/second, and the time span t in seconds, 
// and displays the average acceleration. Here is a sample run:
// Enter v0, v1, and t: 5.5 50.9 4.5
// The average acceleration is 10.0889



let startingVelocity = Number(prompt("Enter starting velocity in meters/seconds: ")) 
let endingVelocity = Number(prompt("Enter ending velocity in meters/seconds: ")) 
let time = Number(prompt('Enter the time spant in seconds: '))
let average = (endingVelocity - startingVelocity) / time
console.log('The average acceleration is ' + average)