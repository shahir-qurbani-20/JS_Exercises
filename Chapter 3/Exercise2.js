// 3.2 (Game: add three numbers) The program in Listing 3.1, AdditionQuiz.java, gen
// erates two integers and prompts the user to enter the sum of these two integers. 
// Revise the program to generate three single-digit integers and prompt the user to 
// enter the sum of these three integers


let number1 = Math.floor(Math.random () * 100)
let number2 = Math.floor(Math.random () * 100)
let answer = Number(prompt('What is '+ number1 +" + "+ number2 ))

if( (number1+number2) == answer ){
    alert(number1+" + "+number2+' = '+answer+' is is true')
}else (
    alert(number1+" + "+number2+' = '+answer+' is is false')
)