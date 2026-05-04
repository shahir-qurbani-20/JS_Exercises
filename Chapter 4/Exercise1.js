// 4.1 (Geometry: area of a pentagon) Write a program that prompts the user to enter 
// the length from the center of a pentagon to a vertex and computes the area of the 
// pentagon, as shown in the following figure. 
// r
// The formula for computing the area of a pentagon is Area =
// 5 * s2
// , where 
// 4 * tan¢p
// 5 ≤
// s is the length of a side. The side can be computed using the formula s = 2r sin p
// ,
// where r is the length from the center of a pentagon to a vertex. Round up two digits 
// after the decimal point. Here is a sample run:
// Enter the length from the center to a vertex: 5.5
// The area of the pentagon is 71.92



let length = Number(prompt('Enter the length from the center to a vertex:'))

let s = 2 * length * Math.sin(Math.PI/5)
let area = (5 * Math.pow(s,2)) / (4 * Math.tan(Math.PI/5))
area = area.toFixed(2)
alert("The area of the pentagon is " + area);