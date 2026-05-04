// *4.14 (Convert letter grade to number) Write a program that prompts the user to enter a 
// letter grade A, B, C, D, or F and displays its corresponding numeric value 4, 3, 2, 
// 1, or 0. Here is a sample run:
// Enter a letter grade: B
// The numeric value for grade B is 3
// Enter a letter grade: T
// T is an invalid grade



let grade = prompt('Enter a letter grade A, B, C, D or F')

let grade_let = grade.toUpperCase()

if (grade_let==A){
    console.log('The numberic value for grade A is 4')
}else if(grade_let==B){
    console.log('The numberic value for grade B is 3')
}else if(grade_let==C){
    console.log('The numberic value for grade C is 2')
}else if(grade_let==D){
    console.log('The numberic value for grade D is 1')
}else if(grade_let==F){
    console.log('The numberic value for grade F is 0')
}else(
    console.log('invalid input')
)