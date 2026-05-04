// *4.15 (Phone key pads) The international standard letter/number mapping found on the 
// telephone is shown below:
// Write a program that prompts the user to enter a letter and displays its correspond
// ing number. 
// Enter a letter: A
// The corresponding number is 2
// Enter a letter: a
// The corresponding number is 2
// Enter a letter: +
// + is an invalid input



let letter = prompt("Enter a letter: ")
let lett = letter.toLocaleLowerCase()

switch(lett){

    case 'a':
    case 'b':
    case 'c':
        alert('The corresponding number is 2');
    break;
    
    case 'd':
    case 'e':
    case 'f':
        alert('The corresponding number is 3');
    break;
    
    case 'g':
    case 'h':
    case 'i':
        alert('The corresponding number is 4');
    break;
    
    case 'j':
    case 'k':
    case 'l':
        alert('The corresponding number is 5');
    break;
    
    case 'm':
    case 'n':
    case 'o':
        alert('The corresponding number is 6');
    break;
    
    case 'p':
    case 'q':
    case 'r':
    case 's':
        alert('The corresponding number is 7');
    break;
    
    case 't':
    case 'u':
    case 'v':
        alert('The corresponding number is 8');
    break;
    
    case 'w':
    case 'x':
    case 'y':
    case 'z':
        alert('The corresponding number is 9');
    break;

    default:
        alert('invalid input!')
}