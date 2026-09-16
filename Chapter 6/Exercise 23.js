// *6.23 (Occurrences of a specified character) Write a method that finds the number of 
// occurrences of a specified character in a string using the following header:
// public static int count(String str, char a)
// For example, count("Welcome", 'e') returns 2. Write a test program that 
// prompts the user to enter a string followed by a character and displays the number 
// of occurrences of the character in the string.



function check(){
    let count = 0;
    let string = (prompt('Enter a string:')).toLowerCase();
    let letter = (prompt('Enter a letter to check:')).toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (letter == string[i]) {
            count++;
        }
    }
    console.log('The number of occurrences of the "'+letter+'" in the "'+string+'" is '+count);   
}
check();