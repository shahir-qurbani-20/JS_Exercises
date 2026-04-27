// *3.32 (Geometry: point position) Given a directed line from point p0(x0, y0) to p1(x1, 
// y1), you can use the following condition to decide whether a point p2(x2, y2) is 
// on the left of the line, on the right, or on the same line (see Figure 3.11):
// (x1- x0)*(y2- y0)- (x2- x0)*(y1- y0) c
// p1
// 70p2is on the left side of the line
// =0p2isonthesameline
// 60p2is on the right side of the line
// p1
// p2
// p2
// p0
// (a)
// p0
// p1
// p2
// p0
// (b) (
// c)
// FIGURE 3.11 (a) p2 is on the left of the line. (b) p2 is on the right of the line. (c) p2 is on 
// the same line.
// Write a program that prompts the user to enter the three points for p0, p1, and p2 
// and displays whether p2 is on the left of the line from p0 to p1, on the right, or on 
// the same line. Here are some sample runs:
// Enter three points for p0, p1, and p2: 4.4 2 6.5 9.5 -5 4
// (-5.0, 4.0) is on the left side of the line from (4.4, 2.0) to (6.5, 9.5) 
// Enter three points for p0, p1, and p2: 1 1 5 5 2 2
// (2.0, 2.0) is on the line from (1.0, 1.0) to (5.0, 5.0) 
// Enter three points for p0, p1, and p2: 3.4 2 6.5 9.5 5 2.5
// (5.0, 2.5) is on the right side of the line from (3.4, 2.0) to (6.5, 9.5)


let x0 =Number(prompt('Enter x of point p0:'))
let y0 =Number(prompt('Enter x of point p0:'))
let x1 =Number(prompt('Enter x of point p1:'))
let y1 =Number(prompt('Enter x of point p1:'))
let x2 =Number(prompt('Enter x of point p2:'))
let y2 =Number(prompt('Enter x of point p2:'))

let result = (x1 - x0)*(y2 - y0) - (x2 - x0)*(y1 - y0)

if(result>0){
    alert('p2 is on the left side of the line')
}else if(result<0){
    alert('p2 is on the right side of the line')
}else(
    alert('p2 is on the same line')
)