// *7.12 (Reverse an array) The reverse method in Section 7.7 reverses an array by 
// copying it to a new array. Rewrite the method that reverses the array passed in 
// the argument and returns this array. Write a test program that prompts the user to 
// enter ten numbers, invokes the method to reverse the numbers, and displays the 
// numbers.



let array = [];
let reverse = [];
let num;
let user = 0;

for (let i = 0; i < 10; i++) {
    user = Number(prompt(i+1+"-Enter a number:"));
    array.push(user);
}
for (let i = 0; i < 10; i++) {
    num = array[10-(i+1)];
    reverse.push(num);
}
console.log(array);
console.log(reverse);
