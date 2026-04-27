//  (Algebra: solve quadratic equations) The two roots of a quadratic equation 
// ax2 + bx + c = 0 can be obtained using the following formula:
// r1 =-b + 2b2- 4ac
// 2a
// and r2 =-b- 2b2- 4ac
// 2a
// b2- 4ac is called the discriminant of the quadratic equation. If it is positive, the 
// equation has two real roots. If it is zero, the equation has one root. If it is negative, 
// the equation has no real roots.
// Write a program that prompts the user to enter values for a, b, and c and displays 
// the result based on the discriminant. If the discriminant is positive, display two 
// roots. If the discriminant is 0, display one root. Otherwise, display “The equation 
// has no real roots”.
// Note that you can use Math.pow(x, 0.5) to compute 2x. Here are some 
// sample runs.
// Enter a, b, c: 1.0 3 1
// The equation has two roots -0.381966 and -2.61803 
// Enter a, b, c: 1 2.0 1
// The equation has one root -1 
// Enter a, b, c: 1 2 3
// The equation has no real roots



let usernumA = Number(prompt('enter a:'))
let usernumB = Number(prompt('enter b:'))
let usernumC = Number(prompt('enter c:'))

let delta = (usernumB ** 2) - 4 * usernumA * usernumC 

let r1 = ((-1 * usernumB) + Math.pow(delta , 0.5)) / 2 * usernumA
let r2 = ((-1 * usernumB) - Math.pow(delta , 0.5)) / 2 * usernumA

if ( delta > 0 ){
    console.log('the equation has two roots ' + r1 + " and " + r2)
}else if( delta == 0 ){
    console.log('the equation has one root ' + r1 )
}else(
    console.log('the equation has no real root' )
)