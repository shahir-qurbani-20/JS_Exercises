// 3.16 (Random point) Write a program that displays a random coordinate in a rectangle. 
// The rectangle is centered at (0, 0) with width 100 and height 200.


let x = Math.round((Math.random()*100)-50)
let y = Math.round((Math.random()*200)-100)

alert(`
Random coordinate in the rectangle is :
(${x} , ${y})`)