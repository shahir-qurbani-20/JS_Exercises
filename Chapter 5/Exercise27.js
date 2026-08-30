// **5.27 (Display leap years) Write a program that displays all the leap years, ten per line, 
// from 101 to 2100, separated by exactly one space. Also display the number of 
// leap years in this period.


let leap = " ";
let count = 1;

for( let i = 105 ; i <= 2100 ; i++ ){

    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0 ){
        leap += i + ' '
        count ++
    }
    if ( count % 10 == 0 ){
        leap += '\n'
    }
}
console.log('104'+leap);
