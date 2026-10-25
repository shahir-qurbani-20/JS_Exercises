// ***7.35 (Game: hangman) Write a hangman game that randomly generates a word and 
// prompts the user to guess one letter at a time, as shown in the sample run. Each 
// letter in the word is displayed as an asterisk. When the user makes a correct 
// guess, the actual letter is then displayed. When the user finishes a word, display 
// the number of misses and ask the user whether to continue to play with another 
// word. Declare an array to store words, as follows:
// // Add any words you wish in this array
// String[] words = {"write", "that", ...};
// (Guess) Enter a letter in word ******* > p 
// (Guess) Enter a letter in word p****** > r 
// (Guess) Enter a letter in word pr**r** > p 
//      p is already in the word
// (Guess) Enter a letter in word pr**r** > o 
// (Guess) Enter a letter in word pro*r** > g 
// (Guess) Enter a letter in word progr** > n 
//      n is not in the word
// (Guess) Enter a letter in word progr** > m 
// (Guess) Enter a letter in word progr*m > a 
// The word is program. You missed 1 time
// Do you want to guess another word? Enter y or n



let words = ["univers", "knowledge", "system", "privacy", "ronaldo", "army", "library", "language"];
let want = 'y';
let result = '';
let guess;
let count;
let find ='';
let correct = true;
while(want == 'y'){

    let word = words[Math.floor(Math.random() * words.length)];
    let arr = [];
    count = 0;
    
    for (let i = 0; i < word.length; i++) {
        arr.push('*');
    }

    for (let i = 0; i < arr.length; i++) {
        find += arr[i];
    }

    while (find != word) {

        guess = prompt(`Enter a letter in word ${find}`);
        correct = false;
        result += 'Enter a letter in word '+find+'\nYou entered '+guess;

        for (let i = 0; i < word.length; i++) {
            if (word[i] == guess) {
                arr[i] = guess;
                correct = true;
            }
        }
        
        find = '';
        
        for (let i = 0; i < arr.length; i++) {
            find += arr[i];
        }

        if (correct == false) {
            count++;
            alert("There is no "+guess+" in "+find)
            result += "\nThere is no "+guess+" in "+find+'\n\n';
        }else{
            alert("Correct :)\nYou find "+find)
            result += "\nCorrect :)\nYou find "+find+'\n\n';
        }
    }
    alert("The word is "+ find +"\nYou missed "+ count +' times');
    want = prompt("Do you want to play again?\nEnter y for yes\nEnter n for no")
    result += "\nThe word is "+ find +"\nYou missed "+ count +' times\nDo you want to play again?\n'+want+'\n';
}
console.log(result);
