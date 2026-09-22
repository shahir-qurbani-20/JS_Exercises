// 7.2 (Reverse the numbers entered) Write a program that reads ten integers and dis
// plays them in the reverse of the order in which they were read.


let numbers = [];
let user = '';

for (let i = 0; i < 10; i++) {
    user = Number(prompt('Enter ten numbers:'));
    numbers.unshift(user);
}
console.log(numbers);
