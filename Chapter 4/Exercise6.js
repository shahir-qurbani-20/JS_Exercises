// *4.6 (Random points on a circle) Write a program that generates three random points 
// on a circle centered at (0, 0) with radius 40 and display three angles in a triangle 
// formed by these three points, as shown in Figure 4.7a. (Hint: Generate a random 
// angle a in radians between 0 and 2p, as shown in Figure 4.7b and the point deter
// mined by this angle is (r*cos(a), r*sin(a)).)
// x = r × cos(α) and y = r ×sin(α)
// 60
// 65
// (a)
// (x, y)
// 55
// (b)
// 0 o’clock position
// p2
// p3
// α 
// r
// p4
// r
// (0, 0)
// (c)
// p5
// p1
// FIGURE 4.7 (a) A triangle is formed from three random points on the circle. (b) A random 
// point on the circle can be generated using a random angle a. (c) A pentagon is centered at 
// (0, 0) with one point at the 0 o’clock position.



let r = 40;
let a1 = Math.random() * 2 * Math.PI;
let a2 = Math.random() * 2 * Math.PI;
let a3 = Math.random() * 2 * Math.PI;

let x1 = r * Math.cos(a1);
let y1 = r * Math.sin(a1);
let x2 = r * Math.cos(a2);
let y2 = r * Math.sin(a2);
let x3 = r * Math.cos(a3);
let y3 = r * Math.sin(a3);

let d1 = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);
let d2 = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2);
let d3 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

let A = Math.acos((d2*d2 + d3*d3 - d1*d1) / (2*d2*d3)) * (180 / Math.PI);
let B = Math.acos((d1*d1 + d3*d3 - d2*d2) / (2*d1*d3)) * (180 / Math.PI);
let C = Math.acos((d1*d1 + d2*d2 - d3*d3) / (2*d1*d2)) * (180 / Math.PI);

console.log("Points:");
console.log("P1: (", x1.toFixed(2) +" , "+ y1.toFixed(2) ,")");
console.log("P2: (", x2.toFixed(2) +" , "+ y2.toFixed(2) ,")");
console.log("P3: (", x3.toFixed(2) +" , "+ y3.toFixed(2) ,")");

console.log("Angles:");
console.log("A:", A.toFixed(2));
console.log("B:", B.toFixed(2));
console.log("C:", C.toFixed(2));