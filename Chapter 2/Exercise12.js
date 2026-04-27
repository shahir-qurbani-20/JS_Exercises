// 2.12 (Physics: finding runway length) Given an airplane’s acceleration a and take-off 
// speed v, you can compute the minimum runway length needed for an airplane to 
// take off using the following formula:
// length = v2
// 2a
// Write a program that prompts the user to enter v in meters/second (m/s) and the 
// acceleration a in meters/second squared (m/s2), and displays the minimum run
// way length. Here is a sample run:
// Enter speed and acceleration: 60 3.5
// The minimum runway length for this airplane is 514.286 



let speed = Number(prompt('Enter the speed in m/s :'))
let acceleration = Number(prompt('Enter the acceleration in m/s square:'))
let lenght = (speed ** 2) / (2 * acceleration)
console.log('The minimum runway lenght for this airplane is '+ lenght)