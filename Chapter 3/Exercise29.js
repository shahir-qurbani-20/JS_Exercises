// **3.29 (Geometry: two circles) Write a program that prompts the user to enter the center 
// coordinates and radii of two circles and determines whether the second circle is 
// inside the first or overlaps with the first, as shown in Figure 3.10. (Hint: circle2 is 
// inside circle1 if the distance between the two centers 6 = |r1 - r2| and circle2 
// overlaps circle1 if the distance between the two centers <= r1 + r2. Test your 
// program to cover all cases.)
// Here are the sample runs:
// Enter circle1's center x-, y-coordinates, and radius: 0.5 5.1 13
// Enter circle2's center x-, y-coordinates, and radius: 1 1.7 4.5
// circle2 is inside circle1 
// 116 Chapter 3 Selections
// r1
// r2
// (x2, y2)
// (a)
// r1
// (x1, y1)
// (x1, y1)
// (b)
// r2
// (x2, y2)
// FIGURE 3.10 (a) A circle is inside another circle. (b) A circle overlaps another circle.
// Enter circle1's center x-, y-coordinates, and radius: 3.4 5.7 5.5
// Enter circle2's center x-, y-coordinates, and radius: 6.7 3.5 3
// circle2 overlaps circle1 
// Enter circle1's center x-, y-coordinates, and radius: 3.4 5.5 1
// Enter circle2's center x-, y-coordinates, and radius: 5.5 7.2 1
// circle2 does not overlap circle1 



let x1 = Number(prompt('Enter first circle center point with two coordinates.\nEnter x1'))
let y1 = Number(prompt('Enter first circle center point with two coordinates.\nEnter y1'))
let r1 = Number(prompt('Enter first circle radius'))
let x2 = Number(prompt('Enter second circle center point with two coordinates.\nEnter y2'))
let y2 = Number(prompt('Enter second circle center point with two coordinates.\nEnter y2'))
let r2 = Number(prompt('Enter second circle radius'))

let d = Math.pow(((x2-x1)**2)+((y2-y1)**2),0.5)
let alert1 = null

if(r1>=r2){
    alert1 = 'circle 2 is inside circle 1'
}else(
    alert1 = 'circle 1 is inside circle 2'
)

if(d<=Math.abs(r1-r2)){
    alert(alert1)
}else if(d<=r1+r2){
    alert('circles are overlaps.')
}else(
    alert("circles don't overlap each other")
)