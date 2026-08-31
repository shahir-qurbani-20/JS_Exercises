// 5.8 (Find the highest score) Write a program that prompts the user to enter the num
// ber of students and each student’s name and score, and finally displays the name 
// of the student with the highest score.



let high = 0
let topStudent = ''

for (let i=1;;i++){
    let name = prompt('Enter the name of student')

    if( name==0 ){
        break;
    }

    let score = Number(prompt('Enter the score of student'))

    if(score > high){
        topStudent = name
        high = score
    }
}
console.log(topStudent+' has the top score: '+high);