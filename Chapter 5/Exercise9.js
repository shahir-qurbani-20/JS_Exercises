//  (Find the two highest scores) Write a program that prompts the user to enter the 
// number of students and each student’s name and score, and finally displays the 
// student with the highest score and the student with the second-highest score.


let top1Score = -Infinity
let top2Score = -Infinity

let top1Name = ''
let top2Name = ''

let num = Number(prompt('Enter the number of students:'))

for (i=0;i<num;i++){
    let name = prompt('Enter the name of student '+(i+1))
    
    let score = Number(prompt('Enter the score of student '+(i+1)))
    if(score>top1Score){

        top2Score = top1Score
        top2Name = top1Name
        
        top1Score = score
        top1Name = name

    } else if(score>top2Score){

        top2Score = score
        top2Name = name

    }
}

console.log("The highest score is "+top1Score+" from "+top1Name);
console.log("The second-highest score is "+top2Score+" from "+top2Name)