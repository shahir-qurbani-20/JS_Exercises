// *6.20 (Count the letters in a string) Write a method that counts the number of letters in 
// a string using the following header:
// public static int countLetters(String s)
// Write a test program that prompts the user to enter a string and displays the num
// ber of letters in the string.


function letter(){
    let count = 0;
    let lower = '';
    let user = prompt('Enter a string to count the letters:');

    for (let i = 0; i < user.length; i++) {
        lower = user[i].toLowerCase();
        if (lower>='a' && lower<='z') {
            count++;
        }
    }
    console.log('Your string has '+count+' letters.');
}
letter();