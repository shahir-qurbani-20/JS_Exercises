// 7.8 (Average an array) Write two overloaded methods that return the average of an 
// array with the following headers:
// public static int average(int[] array)
// public static double average(double[] array)
// Write a test program that prompts the user to enter ten double values, invokes this 
// method, and displays the average value.


let user = 0;
let result = 0;
let sum = 0;
let numbers = [];

for (let i = 0; user >= 0; i++) {
    user = Number(prompt('Enter the numbers to display average.\nEnter a negative number to stop!'));
    if (user >= 0) {
        numbers.push(user);
    }
}
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

result = Math.floor(sum)/numbers.length;
console.log("Average of numbers is: " + result.toFixed(2));