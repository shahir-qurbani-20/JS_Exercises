// *5.46 (Reverse a string) Write a program that prompts the user to enter a string and 
// displays the string in reverse order.
// Enter a string: ABCD
// The reversed string is DCBA


let user = prompt('Enter a string:');
let result = '';
let max = user.length - 1;

for (let i = max; i >= 0; i--) {
    result += user[i];
}
console.log('The reversed string is '+ result);
