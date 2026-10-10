// **7.34 (Sort characters in a string) Write a method that returns a sorted string using the 
// following header:
// public static String sort(String s)
// For example, sort("acb") returns abc.
// Write a test program that prompts the user to enter a string and displays the sorted 
// string.



let user = prompt("Enter a string:")
let letters = [];
let result = '';

for (let i = 0; i < user.length; i++) {
    letters.push(user[i]);    
}
let sorted = [...letters].sort();

for (let i = 0; i < sorted.length; i++) {
    
    result += sorted[i];
}

console.log("You entered => "+ user +"\nsorted => "+ result);
