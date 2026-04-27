// 2.2 (Compute the volume of a cylinder) Write a program that reads in the radius 
// and length of a cylinder and computes the area and volume using the following 
// formulas:
// area = radius * radius * p
// volume = area * length
// Here is a sample run:
// Enter the radius and length of a cylinder: 5.5 12
// The area is 95.0331
// The volume is 1140.4





var cylinderRadius = Number(prompt("Enter the radius of a cylinder:"))
var cylinderLength = Number(prompt("Enter the length of a cylinder:"))
var cylinderArea = 3.142 * cylinderRadius ** 2
var cylinderValume = cylinderArea * cylinderLength
console.log('The area is '+ cylinderArea +'\n' +'The valume is '+ cylinderValume)