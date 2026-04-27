// **3.28 (Geometry: two rectangles) Write a program that prompts the user to enter the 
// center x-, y-coordinates, width, and height of two rectangles and determines 
// whether the second rectangle is inside the first or overlaps with the first, as shown 
// in Figure 3.9. Test your program to cover all cases.
// w1
// w2
// h1
// h2
// (x2, y2)
// (x1, y1)
// (a)
// w1
// h1
// (x1, y1)
// (b)
// w2
// h2
// (x2, y2)
// FIGURE 3.9 (a) A rectangle is inside another one. (b) A rectangle overlaps another one.
// Here are the sample runs:
// Enter r1's center x-, y-coordinates, width, and height: 2.5 4 2.5 43
// Enter r2's center x-, y-coordinates, width, and height: 1.5 5 0.5 3
// r2 is inside r1 
// Enter r1's center x-, y-coordinates, width, and height: 1 2 3 5.5
// Enter r2's center x-, y-coordinates, width, and height: 3 4 4.5 5
// r2 overlaps r1
// Enter r1's center x-, y-coordinates, width, and height: 1 2 3 3
// Enter r2's center x-, y-coordinates, width, and height: 40 45 3 2
// r2 does not overlap r1


let r1x = Number(prompt('Enter r1 center (x,y) coordinates:\nEnter x'))
let r1y = Number(prompt('Enter r1 center (x,y) coordinates:\nEnter y'))
let r1w = Number(prompt('Enter r1 width:'))
let r1h = Number(prompt('Enter r1 height:'))
let r2x = Number(prompt('Enter r2 center (x,y) coordinates:\nEnter x'))
let r2y = Number(prompt('Enter r2 center (x,y) coordinates:\nEnter y'))
let r2w = Number(prompt('Enter r2 width:'))
let r2h = Number(prompt('Enter r2 height:'))

let a1 = r1x + (r1w / 2)
let a2 = r1y + (r1h / 2)
let a3 = r1x - (r1w / 2)
let a4 = r1y - (r1h / 2)

let b1 = r2x + (r2w / 2)
let b2 = r2y + (r2h / 2)
let b3 = r2x - (r2w / 2)
let b4 = r2y - (r2h / 2)

if(a1<=b1 && a2<=b2 && a3>=b3 && a4>=b4){
    alert('r1 is inside r2')
}else if(a1>=b1 && a2>=b2 && a3<=b3 && a4<=b4){
    alert('r2 is inside r1')
}else if((a4<=b4 && a2>b4) || (a2>=b2 && a4<b2)){
    if((a1>b1 && a3>b3) || (a3>b3 && a1<b1) || (a3<b3 && a1<b1) || (a3<b3 && a1>b1)) {
        alert("r2 overlaps r1")
    }else(
        alert("r2 does not overlap r1")
    )
}else if((a1<=b1 && a3>b1) || (a3>=b3 && a1<b3)){
    if((a4>b4 && a2>b2) || (a2>b2 && a4<b4) || (a2<b2 && a4<b4) || (a2<b2 && a4>b4)) {
        alert("r2 overlaps r1")
    }else(
        alert("r2 does not overlap r1")
    )
}else(
    alert("r2 does not overlap r1")
)