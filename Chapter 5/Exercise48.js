// *5.48 (Process string) Write a program that prompts the user to enter a string and dis
// plays the characters at odd positions. Here is a sample run:
// Enter a string: Beijing Chicago
// BiigCiao


let str = prompt('Enter a string:')
let x = '';

for(let i = 0 ; i < str.length ; i += 2){
    x += str[i];
}
console.log(x);
