 // *4.7 (Corner point coordinates) Suppose a pentagon is centered at (0, 0) with one point 
// at the 0 o’clock position, as shown in Figure 4.7c. Write a program that prompts 
// the user to enter the radius of the bounding circle of a pentagon and displays the 
// coordinates of the five corner points on the pentagon. Here is a sample run:
// Enter the radius of the bounding circle: 100
// The coordinates of five points on the pentagon are
// (95.1057, 30.9017)
// (0.000132679, 100)
// (-95.1056, 30.9019)
// (-58.7788, -80.9015)
// (58.7782, -80.902)




let r = Number(prompt("Enter the radius of the bounding circle: "))

let a1 = Math.random() * 2 * Math.PI;
let a2 = Math.random() * 2 * Math.PI;
let a3 = Math.random() * 2 * Math.PI;
let a4 = Math.random() * 2 * Math.PI;
let a5 = Math.random() * 2 * Math.PI;

let x1 = r * Math.cos(a1);
let y1 = r * Math.sin(a1);
let x2 = r * Math.cos(a2);
let y2 = r * Math.sin(a2);
let x3 = r * Math.cos(a3);
let y3 = r * Math.sin(a3);
let x4 = r * Math.cos(a4);
let y4 = r * Math.sin(a4);
let x5 = r * Math.cos(a5);
let y5 = r * Math.sin(a5);

console.log("The coordinates of five points on the pentagon are");
console.log('a1: (', x1.toFixed(4), ',' ,y1.toFixed(4),')');
console.log('a2: (', x2.toFixed(4), ',' ,y2.toFixed(4),')');
console.log('a3: (', x3.toFixed(4), ',' ,y3.toFixed(4),')');
console.log('a4: (', x4.toFixed(4), ',' ,y4.toFixed(4),')');
console.log('a5: (', x5.toFixed(4), ',' ,y5.toFixed(4),')');