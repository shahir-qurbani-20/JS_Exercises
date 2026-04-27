// *3.34 (Geometry: point on line segment) Programming Exercise 3.32 shows how to test 
// whether a point is on an unbounded line. Revise Programming Exercise 3.32 to 
// test whether a point is on a line segment. Write a program that prompts the user 
// to enter the three points for p0, p1, and p2 and displays whether p2 is on the line 
// segment from p0 to p1. Here are some sample runs:
// Enter three points for p0, p1, and p2: 1 1 2.5 2.5 1.5 1.5
// (1.5, 1.5) is on the line segment from (1.0, 1.0) to (2.5, 2.5) 
// Enter three points for p0, p1, and p2: 1 1 2 2 3.5 3.5
// (3.5, 3.5) is not on the line segment from (1.0, 1.0) to (2.0, 2.0) 




let x0 =Number(prompt('Enter x of point p0:'))
let y0 =Number(prompt('Enter x of point p0:'))
let x1 =Number(prompt('Enter x of point p1:'))
let y1 =Number(prompt('Enter x of point p1:'))
let x2 =Number(prompt('Enter x of point p2:'))
let y2 =Number(prompt('Enter x of point p2:'))

let result = (x1 - x0)*(y2 - y0) - (x2 - x0)*(y1 - y0)

if(x0<x1 && x2>x1 && y0<y1 && y2>y1){
    if(result==0){
        alert('p2 is on the line segment from p0 to p1')
    }else(
        alert('p2 is not on the line segment from p0 to p1')
    )
    
}else(
    alert('p2 is not on the line segment from p0 to p1')
)