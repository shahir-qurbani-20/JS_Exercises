// **3.22 (Geometry: point in a circle?) Write a program that prompts the user to enter a 
// point (x, y) and checks whether the point is within the circle centered at (0, 0)
// with radius 10. For example, (4, 5) is inside the circle and (9, 9) is outside the 
// circle, as shown in Figure 3.7a.
// (Hint: A point is in the circle if its distance to (0, 0) is less than or equal to 10.
// The formula for computing the distance is 2(x2- x1)2 + (y2- y1)2. Test your 
// program to cover all cases.) Two sample runs are shown below.
// Enter a point with two coordinates: 4 5
// Point (4.0, 5.0) is in the circle 
// Enter a point with two coordinates: 9 9
// Point (9.0, 9.0) is not in the circle 
// Programming Exercises  113
// y-axis
// y-axis
// (9, 9)
// (4, 5)
// (0, 0)
// (a)
// x-axis
// (b)
// (6, 4)
// (2, 2)
// (0, 0)
// x-axis
// FIGURE 3.7 (a) Points inside and outside of the circle. (b) Points inside and outside of the 
// rectangle


let x2 = Number(prompt('Enter a point with two coordinates.\nEnter x'))
let y2 = Number(prompt('Enter a point with two coordinates.\nEnter y'))
let x1 = 0
let y1 = 0

let distance = Math.pow(((x2-x1)**2)+((y2-y1)**2),0.5)

if(distance<10){
    alert(`Point (${x2}.0 , ${y2}.0) is in the circle.`)
}else(
    alert(`Point (${x2}.0 , ${y2}.0) is not in the circle.`)
)