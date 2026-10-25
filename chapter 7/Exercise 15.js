// 7.15 (Eliminate duplicates) Write a method that returns a new array by eliminating the 
// duplicate values in the array using the following method header:
// public static int[] eliminateDuplicates(int[] list)
// Write a test program that reads in ten integers, invokes the method, and displays 
// the result. Here is the sample run of the program:
// Enter ten numbers: 1 2 3 2 1 6 3 4 5 2
// The distinct numbers are: 1 2 3 6 4 5



let arr = [];
let user = 0;
let result = 'The distinct numbers are: ';

for (let i = 0; i < 10; i++) {
    user = Number(prompt("Enter a number:"));
    if (arr.includes(user)) {
    }else{
        arr.push(user);
    }
}
for (let i = 0; i < arr.length; i++) {
    result += arr[i] +' ';
}
console.log(result);
