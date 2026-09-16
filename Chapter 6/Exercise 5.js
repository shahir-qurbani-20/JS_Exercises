// *6.5 (Sort three numbers) Write a method with the following header to display three 
// numbers in increasing order:
// public static void displaySortedNumbers(
// double num1, double num2, double num3)
// Programming Exercises  235
// Write a test program that prompts the user to enter three numbers and invokes the 
// method to display them in increasing order.


let num1 = Number(prompt('Enter first number:'))
let num2 = Number(prompt('Enter second number:'))
let num3 = Number(prompt('Enter third number:'))
let small = 0;
let midium = 0;
let large = 0;

function list (a,b,c) {
    if (a>b && a>c) {
        large = a;
        if (b>c) {
            midium = b;
            small = c
        }else{
            midium = c;
            small = b
        }
    }else if (b>a && b>c) {
        large = b
        if (a>c) {
            midium = a;
            small = c
        }else{
            midium = c;
            small = a
        }
    }else{
        large = c
        if (b>a) {
            midium = b;
            small = a
        }else{
            midium = a;
            small = b
        }
    }
    console.log(small+'\n'+midium+'\n'+large);
}

list (num1,num2,num3)