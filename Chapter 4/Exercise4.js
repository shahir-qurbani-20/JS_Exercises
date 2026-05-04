// 4.4 (Geometry: area of a hexagon) The area of a hexagon can be computed using the 
// following formula (s is the length of a side):
// Area = 6 * s2
// 4 * tan¢p
// 6 ≤
// Write a program that prompts the user to enter the side of a hexagon and displays 
// its area. Here is a sample run:
// Enter the side: 5.5
// The area of the hexagon is 78.59



let side = Number(prompt('Enter the side of hexagon:'))

let area = 6 * (side ** 2) / (4 * Math.tan(Math.PI / 6))

alert('The area of the hexagon is '+area)