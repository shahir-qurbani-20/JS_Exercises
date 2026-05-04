// *4.5 (Geometry: area of a regular polygon) A regular polygon is an n-sided polygon in 
// which all sides are of the same length and all angles have the same degree (i.e., the 
// polygon is both equilateral and equiangular). The formula for computing the area 
// of a regular polygon is
// Area = n * s2
// VideoNote
// Compute great circle distance
// 4 * tan¢p
// n ≤
// 152 Chapter 4  Mathematical Functions, Characters, and Strings
// Here, s is the length of a side. Write a program that prompts the user to enter the 
// number of sides and their length of a regular polygon and displays its area. Here is 
// a sample run:
// Enter the number of sides: 5
// Enter the side: 6.5
// The area of the polygon is 74.69017017488385



let number = Math.floor(Number(prompt("Enter the number of polygon's sides:")))
let side = Number(prompt('Enter the side of polygon:'));
let area = number * (side ** 2) / (4 * Math.tan(Math.PI / number))

if(number >= 3){
    alert('The area of the polygon is '+ area)
}else(
    alert(undefined)
)