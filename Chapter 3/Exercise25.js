// *3.25 (Geometry: intersecting point) Two points on line 1 are given as (x1, y1) and (x2,
// y2) and on line 2 as (x3, y3) and (x4, y4), as shown in Figure 3.8a–b. 
// The intersecting point of the two lines can be found by solving the following 
// linear equation:
// (y1- y2)x- (x1- x2)y = (y1- y2)x1- (x1- x2)y1
// (y3- y4)x- (x3- x4)y = (y3- y4)x3- (x3- x4)y3
// This linear equation can be solved using Cramer’s rule (see Programming Exer
// cise 3.3). If the equation has no solutions, the two lines are parallel (Figure 3.8c). 
// Write a program that prompts the user to enter four points and displays the inter
// secting point. Here are sample runs:
// (x2, y2)
// (x3, y3)
// (x1, y1)
// (x4, y4)
// (a)
// (x2, y2)
// (x3, y3)
// (x1, y1)
// (x4, y4)
// (b)
// (x2, y2) (x3, y3)
// (x1, y1)
// (x4, y4)
// (c)
// FIGURE 3.8 Two lines intersect in (a and b) and two lines are parallel in (c).
// Enter x1, y1, x2, y2, x3, y3, x4, y4: 2 2 5 -1.0 4.0 2.0 -1.0 -2.0
// The intersecting point is at (2.88889, 1.1111) 
// Enter x1, y1, x2, y2, x3, y3, x4, y4: 2 2 7 6.0 4.0 2.0 -1.0 -2.0
// The two lines are parallel



let x1 = Number(prompt('Enter x1'))
let y1 = Number(prompt('Enter y1'))
let x2 = Number(prompt('Enter x2'))
let y2 = Number(prompt('Enter y2'))
let x3 = Number(prompt('Enter x3'))
let y3 = Number(prompt('Enter y3'))
let x4 = Number(prompt('Enter x4'))
let y4 = Number(prompt('Enter y4'))

let a1 = y1-y2
let b1 = x2-x1
let a2 = y3-y4
let b2 = x4-x3

let c1 = a1*x1 + b1*y1
let c2 = a2*x3 + b2*y3

let x = ( c1*b2 - c2*b1 ) / ( a1*b2 - a2*b1 )
let y = ( c2*a1 - c1*a2 ) / ( a1*b2 - a2*b1 )

if(a1*b2-a2*b1==0){
    alert('the lines are parallel.')
}else{
    alert(`${a1}x + ${b1}y = ${c1}
${a2}x + ${b2}y = ${c2}
The intersecting point is at ( ${x} , ${y} )`)
}