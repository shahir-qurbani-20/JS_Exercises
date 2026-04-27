// *2.19 (Geometry: area of a triangle) Write a program that prompts the user to enter 
// three points (x1, y1), (x2, y2), (x3, y3) of a triangle and displays its area. 
// The formula for computing the area of a triangle is
// s = (side1 + side2 + side3)/2;
// area = 2s(s- side1)(s- side2)(s- side3)
// Here is a sample run:
// Enter three points for a triangle: 1.5 -3.4 4.6 5 9.5 -3.4
// The area of the triangle is 33.6 


let x1 = Number(prompt('Enter three points for a triangle:'+'\n'+'Enter x1:'))
let y1 = Number(prompt('Enter three points for a triangle:'+'\n'+'Enter y1:'))
let x2 = Number(prompt('Enter three points for a triangle:'+'\n'+'Enter x2:'))
let y2 = Number(prompt('Enter three points for a triangle:'+'\n'+'Enter y2:'))
let x3 = Number(prompt('Enter three points for a triangle:'+'\n'+'Enter x3:'))
let y3 = Number(prompt('Enter three points for a triangle:'+'\n'+'Enter y3:'))
let side1 = Math.pow(((x2-x1)**2)+((y2-y1)**2), 0.5)
let side2 = Math.pow(((x3-x1)**2)+((y3-y1)**2), 0.5)
let side3 = Math.pow(((x3-x2)**2)+((y3-y2)**2), 0.5)
let S = (side1+side2+side3)/2
let area = Math.pow(S * (S-side1) * (S-side2) * (S-side3), 0.5 )
console.log('the area of the triangle is '+ area)