// *5.49 (Count vowels and consonants) Assume letters A, E, I, O, and U as the vowels. 
// Write a program that prompts the user to enter a string and displays the number 
// of vowels and consonants in the string.
// Enter a string: Programming is fun
// The number of vowels is 5
// The number of consonants is 11


let vowel = 0;
let consonant = 0;
let str = prompt('Enter a string');

for(let i = 0 ; i < str.length ; i++){
    let lc = str[i].toLowerCase();

    if ("a,i,e,o,u".includes(lc)) {
        vowel++;
    }else if(lc >= "a" && lc <= "z"){
        consonant++;
    }
}
console.log('The number of vowels is '+vowel+'\nThe number of consonants is '+consonant);