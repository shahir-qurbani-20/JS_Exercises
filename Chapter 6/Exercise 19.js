// *6.19 (The MyTriangle class) Create a class named MyTriangle that contains the 
// following two methods:
// /** Return true if the sum of any two sides is 
//  *  greater than the third side. */
// public static boolean isValid(
// double side1, double side2, double side3)
// /** Return the area of the triangle. */ 
// public static double area(
// double side1, double side2, double side3)
// Write a test program that reads three sides for a triangle and computes the area if 
// the input is valid. Otherwise, it displays that the input is invalid. The formula for 
// computing the area of a triangle is given in Programming Exercise 2.19.


function triangle(a,b,c){
    let area = 0;
    let s = 0;

    if (a+b<c || a+c<b || b+c<a) {
        console.log('The input is invalid!');
    }else{
        s = (a + b + c)/2;
        area = (s*(s-a)*(s-b)*(s-c)) **0.5;
        console.log('The area of the triangle is '+area.toFixed(2));
    }
}
triangle(10,20,20);