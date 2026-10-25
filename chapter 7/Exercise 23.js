// **7.23 (Game: locker puzzle) A school has 100 lockers and 100 students. All lockers are 
// closed on the first day of school. As the students enter, the first student, denoted 
// S1, opens every locker. Then the second student, S2, begins with the second 
// locker, denoted L2, and closes every other locker. Student S3 begins with the 
// third locker and changes every third locker (closes it if it was open, and opens it if 
// it was closed). Student S4 begins with locker L4 and changes every fourth locker. 
// Student S5 starts with L5 and changes every fifth locker, and so on, until student 
// S100 changes L100.
// After all the students have passed through the building and changed the lockers, 
// which lockers are open? Write a program to find your answer and display all 
// open locker numbers separated by exactly one space.
// (Hint: Use an array of 100 Boolean elements, each of which indicates whether a 
// locker is open (true) or closed (false). Initially, all lockers are closed.)


let school = [];
let result = 'These lockers are open:\n';

for (let i = 0; i < 100; i++) {
    school[i] = false;
}

for (let i = 1; i <= school.length; i++) {
    for (let j = i; j <= school.length; j += i) {
        if (school[j-1] == true) {
            school[j-1] = false;
        }else{
            school[j-1] = true;
        }
    }   
}
for (let i = 0; i < school.length; i++) {
    if (school[i] == true) {
        result += (i+1) +' ';
    }
}

console.log(result);
