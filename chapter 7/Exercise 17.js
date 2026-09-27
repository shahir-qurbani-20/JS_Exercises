// **7.17 (Sort students) Write a program that prompts the user to enter the number of stu
// dents, the students’ names, and their scores, and prints student names in decreas
// ing order of their scores.


let n = Number(prompt("Enter the number of students:"));
let students = [];
let student = {};

for (let i = 0; i < n; i++) {
    student = {
        name : prompt("Enter the student's name: "),
        score : Number(prompt('Enter score:'))
    }
    students.push(student);
}
console.log(students.sort((a,b) => b.score - a.score));
