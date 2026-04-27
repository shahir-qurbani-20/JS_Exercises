// *3.3 (Algebra: solve 2 * 2 linear equations) A linear equation can be solved using 
// Cramer’s rule given in Programming Exercise 1.13. Write a program that prompts 
// the user to enter a, b, c, d, e, and f and displays the result. If ad- bc is 0, report 
// that “The equation has no solution.”
// Enter a, b, c, d, e, f: 9.0 4.0 3.0 -5.0 -6.0 -21.0
// x is -2.0 and y is 3.0
// Enter a, b, c, d, e, f: 1.0 2.0 2.0 4.0 4.0 5.0
// The equation has no solution



let a = Number(prompt('ax + by = e'+"\n"+'cx + dy = f'+'\n\n'+'Enter a:'))
let b = Number(prompt('ax + by = e'+"\n"+'cx + dy = f'+'\n\n'+'Enter b:'))
let e = Number(prompt('ax + by = e'+"\n"+'cx + dy = f'+'\n\n'+'Enter e:'))
let c = Number(prompt('ax + by = e'+"\n"+'cx + dy = f'+'\n\n'+'Enter c:'))
let d = Number(prompt('ax + by = e'+"\n"+'cx + dy = f'+'\n\n'+'Enter d:'))
let f = Number(prompt('ax + by = e'+"\n"+'cx + dy = f'+'\n\n'+'Enter f:'))

var x = (e*d - b*f) / (a*d - b*c)
var y = (a*f - e*c) / (a*d - b*c)

if((a*d - b*c) == 0 ){
    alert('The equation has no solution ')
}else(
    alert('x is '+ x +'\n'+'y is '+ y)
)