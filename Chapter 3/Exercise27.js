// **3.27 (Geometry: points in triangle?) Suppose a right triangle is placed in a plane as 
// shown below. The right-angle point is placed at (0, 0), and the other two points 
// are placed at (200, 0), and (0, 100). Write a program that prompts the user to enter 
// a point with x- and y-coordinates and determines whether the point is inside the 
// triangle. Here are the sample runs:
// (0, 100)
// p1
// (0, 0)
// p2
// (200, 0)
// Enter a point's x- and y-coordinates: 100.5 25.5
// The point is in the triangle 
// Programming Exercises  115
// Enter a point's x- and y-coordinates: 100.5 50.5
// The point is not in the triangle


let x = Number(prompt("Enter a point's x- and y-coordinates:\nEnter x:"))
let y = Number(prompt("Enter a point's x- and y-coordinates:\nEnter y:"))

if (y<=(-0.5*x+100) && x>=0 && y>=0){
    alert('The piont is in the triangle.')
}else(
    alert('The piont is not in the triangle.')
)