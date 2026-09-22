// *7.1 (Assign grades) Write a program that reads student scores, gets the best score, 
// and then assigns grades based on the following scheme:
// Grade is A if score is >= best- 10
// Grade is B if score is >= best- 20;
// Grade is C if score is >= best- 30;
// Grade is D if score is >= best- 40;
// Grade is F otherwise.
// The program prompts the user to enter the total number of students, then prompts 
// the user to enter all of the scores, and concludes by displaying the grades. Here 
// is a sample run:
// Enter the number of students: 4
// Enter 4 scores: 40 55 70 58
// Student 0 score is 40 and grade is C
// Student 1 score is 55 and grade is B
// Student 2 score is 70 and grade is A
// Student 3 score is 58 and grade is B



let students = [];
let user = 1;
let result = '';
let grade = '';
let n = Number(prompt('Enter the number of students:'))

for (let i = 0; i < n; i++) {
    user = prompt("Enter student's score:");
    (user != 0)? students.push(user) : user = user;

    if (user > 100 && user < 0) {alert('Invalid score!')}
    else if (user >= 90) { grade = 'A';}
    else if (user >= 80) { grade = 'B';}
    else if (user >= 70) { grade = 'C';}
    else if (user >= 60) { grade = 'D';}
    else if (user >= 0) { grade = 'F'}

    result += 'student '+i+' score is '+user+' and grade is '+grade+'\n';
}

console.log(result);