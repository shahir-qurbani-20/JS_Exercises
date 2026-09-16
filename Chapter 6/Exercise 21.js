// *6.21 (Phone keypads)The international standard letter/number mapping for telephones 
// is shown in Programming Exercise 4.15. Write a method that returns a number, 
// given an uppercase letter, as follows:
// int getNumber(char uppercaseLetter)
// Write a test program that prompts the user to enter a phone number as a string. 
// The input number may contain letters. The program translates a letter (uppercase 
// or lowercase) to a digit and leaves all other characters intact. Here is a sample run 
// of the program:
// Enter a string: 1-800-Flowers
// 1-800-3569377
// Enter a string: 1800flowers
// 18003569377


function keypad(){
    let result = '';
    let user = prompt('Enter a string:');

    for (let i = 0; i < user.length; i++) {
        let letter = user[i].toLowerCase();
        if (letter>='a' && letter<='z') {
            if (letter=='a' || letter=='b' || letter=='c') {
                letter = '2';
            }else if (letter=='d' || letter=='e' || letter=='f') {
                letter = '3';
            }else if (letter=='g' || letter=='h' || letter=='i') {
                letter = '4';
            }else if (letter=='j' || letter=='k' || letter=='l') {
                letter = '5';
            }else if (letter=='m' || letter=='n' || letter=='o') {
                letter = '6';
            }else if (letter=='p' || letter=='q' || letter=='r' || letter=='s') {
                letter = '7';
            }else if (letter=='t' || letter=='u' || letter=='v') {
                letter = '8';
            }else {
                letter = '9';
            }
        }else{
            letter = user[i];
        }
        result += letter;
    }
    console.log(result);
}
keypad();