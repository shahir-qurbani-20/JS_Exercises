// 7.25 (Algebra: solve quadratic equations) Write a method for solving a quadratic 
// equation using the following header:
// public static int solveQuadratic(double[] eqn, double[] roots)
// The coefficients of a quadratic equation ax2 + bx + c = 0 are passed to the 
// array eqn and the real roots are stored in roots. The method returns the number
// of real roots. See Programming Exercise 3.1 on how to solve a quadratic 
// equation.
// Write a program that prompts the user to enter values for a, b, and c and displays 
// the number of real roots and all real roots.



function realRoots() {

    let coefficients = [];
    let result = '';
    let delta;
    let x1;
    let x2;
    let a = Number(prompt("ax2 + bx + c = 0\nEnter a: "));
    let b = Number(prompt("ax2 + bx + c = 0\nEnter b: "));
    let c = Number(prompt("ax2 + bx + c = 0\nEnter c: "));

    coefficients.push(a, b, c);
    delta = (coefficients[1] ** 2) - 4 * coefficients[0] * coefficients[2];
    if (delta > 0) {
        x1 = (- coefficients[1] + Math.pow(delta, 0.5)) / (2 * coefficients[0]);
        x2 = (- coefficients[1] - Math.pow(delta, 0.5)) / (2 * coefficients[0]);
        result += 'The quadratic ecuation has two real roots:\nX1 = '+ x1 +'\nX2 = '+ x2;
    }else if (delta == 0) {
        x1 = -coefficients[1] / (2 * coefficients[0]);
        result += "The quadratic ecuation has one real root:\nX = "+ x1;
    }else{
        result += "The quadratic ecuation has no real root..! :(";
    }
    console.log(result);
}
realRoots();