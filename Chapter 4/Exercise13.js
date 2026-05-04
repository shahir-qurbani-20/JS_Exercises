// *4.13 (Vowel or consonant?) Write a program that prompts the user to enter a letter and 
// check whether the letter is a vowel or consonant. Here is a sample run:
// VideoNote
// Convert hex to binary
// Enter a letter: B
// B is a consonant
// Enter a letter grade: a
// a is a vowel
// Enter a letter grade: #
// # is an invalid input




let letter = prompt('Enter a letter:')
letter = letter.toLowerCase()

if(letter.length !== 1 || !(/[a-z]/).test(letter)){
    alert('invalid input!')
}else if(
    letter === 'a' ||
    letter === 'o' ||
    letter === 'i' ||
    letter === 'e' ||
    letter === 'u'
){
    alert(letter + " is vowel.")
}else(
    alert(letter + " is consonant.")
)