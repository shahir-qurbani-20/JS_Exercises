// 6.1 (Math: pentagonal numbers) A pentagonal number is defined as n(3n–1)/2 for 
// n = 1,2,  . . ., and so on. Therefore, the first few numbers are 1, 5, 12, 22, . . . . 
// Write a method with the following header that returns a pentagonal number:
// public static int getPentagonalNumber(int n)
// Write a test program that uses this method to display the first 100 pentagonal 
// numbers with 10 numbers on each line.

let pentaNum = '';
let count = 0;

function pentagonal(n) {
    for(let i = 1; i <= n; i++){
        pentaNum += ((3 * i) - 1) * i / 2 + ' ';
        count++;
        (count % 10 == 0)? pentaNum += '\n':pentaNum=pentaNum;
    }
    console.log(pentaNum);
}

pentagonal(100);