// 7.9 (Find the smallest element) Write a method that finds the smallest element in an 
// array of double values using the following header:
// public static double min(double[] array)
// Write a test program that prompts the user to enter ten numbers, invokes this 
// method to return the minimum value, and displays the minimum value. Here is a 
// sample run of the program:
// Enter ten numbers: 1.9 2.5 3.7 2 1.5 6 3 4 5 2
// The minimum number is: 1.5



let user = 0;
let numbers = [];

for (let i = 0; !isNaN(user); i++) {
    user = Number(prompt("Enter a number:\nEnter a string to stop!"));
    if (!isNaN(user)) {
        if (i == 0) {
            numbers.push(user);
        }else{
            if (numbers[numbers.length -1] > user) {
                numbers.push(user);
            }
        }
    }
}
console.log("The minimum number is "+ numbers[numbers.length -  1]);
