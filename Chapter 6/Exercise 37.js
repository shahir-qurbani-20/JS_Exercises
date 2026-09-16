// 6.37 (Format an integer) Write a method with the following header to format the inte
// ger with the specified width.
// public static String format(int number, int width)
// The method returns a string for the number with one or more prefix 0s. The size 
// of the string is the width. For example, format(34, 4) returns 0034 and for
// mat(34, 5) returns 00034. If the number is longer than the width, the method 
// returns the string representation for the number. For example, format(34, 1)
// returns 34.
// Write a test program that prompts the user to enter a number and its width and 
// displays a string returned by invoking format(number, width).



function userNum (){
    let num = prompt('Enter a number:')
    let width = prompt('Enter the width of number:')
    let result = '';

    if (width <= num.length) {
        console.log(num);
    }else{
        for (let i = 1; i <= width - num.length; i++) {
            result += '0';
        }
        result += num;
        console.log(result);
    }
}
userNum();