// *7.28 (Math: combinations) Write a program that prompts the user to enter 10 integers 
// and displays all combinations of picking two numbers from the 10.



let numbers = [];
let combinations = [];
let element;

for (let i = 0; i < 10; i++) {
    
    numbers.push(prompt("Enter number "+ (i+1) +' :'));
}

for (let i = 0; i < 9; i++) {
    for (let j = i+1; j < 10; j++) {
        
        element = "("+numbers[i]+", "+numbers[j]+")";
        combinations.push(element);
    }
}
console.log(combinations);
