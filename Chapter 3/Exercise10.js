// 3.10 (Game: addition quiz) Listing 3.3, SubtractionQuiz.java, randomly generates a 
// subtraction question. Revise the program to randomly generate an addition ques
// tion with two integers less than 100.


let random1 = Math.floor(Math.random()*100)
let random2 = Math.floor(Math.random()*100)

let number1 = Math.max(random1,random2)
let number2 = Math.min(random1,random2)

let answer = prompt(`What is ${number1} - ${number2} ?`);
(number1-number2==answer)? alert('Well done!\nYour answer is correct') : alert('Your answer is wrong.\nShould be '+ (number1-number2) );