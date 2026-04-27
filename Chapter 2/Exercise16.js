// 2.16 (Geometry: area of a hexagon) Write a program that prompts the user to enter the 
// side of a hexagon and displays its area. The formula for computing the area of a 
// hexagon is 
// Area = 323
// 2 s2,
// where s is the length of a side. Here is a sample run:
// Enter the side: 5.5
// The area of the hexagon is 78.5895



let side = Number(prompt('enter the side of hexagon:'))
let area = Math.pow(3 , 0.5) * (side**2) * 1.5
console.log('the area of the hexagon is '+ area)