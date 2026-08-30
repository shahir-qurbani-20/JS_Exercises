// *5.50 (Count uppercase letters) Write a program that prompts the user to enter a string 
// and displays the number of the uppercase letters in the string.
// Enter a string: Welcome to Java
// The number of uppercase letters is 2



let upper = 0;
let str = prompt('Enter a string:')

for(let i = 0; i < str.length; i++){
    if(str[i] >= "A" && str[i] <= "Z"){
        upper++;
    }
}
console.log(upper);
