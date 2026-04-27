// 2.15 (Geometry: distance of two points) Write a program that prompts the user to enter 
// two points (x1, y1) and (x2, y2) and displays their distance between them. 
// The formula for computing the distance is 2(x2- x1)2 + (y2- y1)2. Note that 
// you can use Math.pow(a, 0.5) to compute 2a. Here is a sample run:
// Enter x1 and y1: 1.5 -3.4
// Enter x2 and y2: 4 5
// The distance between the two points is 8.764131445842194 



let x1 = Number(prompt('Enter x1'))
let y1 = Number(prompt('Enter y1'))
let x2 = Number(prompt('Enter x2'))
let y2 = Number(prompt('Enter y2'))
let distance = Math.pow(((x2-x1)**2)+((y2-y1)**2), 0.5)
console.log('the distance between two points is '+ distance)