// *4.18 (Student major and status) Write a program that prompts the user to enter two 
// characters and displays the major and status represented in the characters. The first 
// character indicates the major and the second is number character 1, 2, 3, 4, which 
// indicates whether a student is a freshman, sophomore, junior, or senior. Suppose 
// the following chracters are used to denote the majors:
// M: Mathematics
// C: Computer Science
// I: Information Technology
// Here is a sample run:
// Enter two characters: M1
// Mathematics Freshman
// Enter two characters: C3
// Computer Science Junior
// Enter two characters: T3
// Invalid input


let char = prompt('Enter two characters:')

switch(char){
    case 'M1':
        alert('Mathematics Freshman');
    break;
    case 'M2':
        alert('Mathematics Sophomore')
    break;
    case 'M3':
        alert('Mathematics Junior');
    break;
    case 'M4':
        alert('Mathematics Senior');
    break;
    case 'C1':
        alert('Computer Science Freshman');
    break;
    case 'C2':
        alert('Computer Science Sophomore');
    break;
    case 'C3':
        alert('Computer Science Junior');
    break;
    case 'C4':
        alert('Computer Science Senior');
    break;
    case 'I1':
        alert('Information Technology Freshman');
    break;
    case 'I2':
        alert('Information Technology Sophomore');
    break;
    case 'I3':
        alert('Information Technology Junior');
    break;
    case 'I4':
        alert('Information Technology Senior');
    break;
    default:
        alert('invalid input!')
}