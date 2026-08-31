// 5.2 (Repeat additions) Listing 5.4, SubtractionQuizLoop.java, generates five random 
// subtraction questions. Revise the program to generate ten random addition ques
// tions for two integers between 1 and 15. Display the correct count and test time.

let num1 = 0
let num2 = 0
let answer = 0
let correct = 0
let count = 0

for (i=0 ; i<5 ; i++ ){
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);

    if (number1 <= number2){
        num1 = number1
        num2 = number2
    }else{
        num2 = number1
        num1 = number2
    }

    answer = Number(prompt('What is '+num2+' - '+num1+' ?'))
    correct = num2 - num1

    if (answer == correct){
        alert('You are correct!')
        count++
    }else(
        alert('Your answer is wrong.\n'+num2+' - '+num1+' shold be '+correct)
    )
    
    if (answer==correct){
        console.log(num2+'-'+num1+'='+answer+'   correct');
    }else(
        console.log(num2+'-'+num1+'='+answer+'   Wrong!')
    )
    
    if (i==4){
        console.log('\n\n\nCorrect count is '+count+' of 5');
    }
}

