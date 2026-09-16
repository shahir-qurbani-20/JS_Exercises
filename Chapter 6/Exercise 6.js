// *6.6 (Display patterns) Write a method to display a pattern as follows:
//               1
//             2 1
//           3 2 1
// ...
// n n-1 ... 3 2 1
// The method header is
// public static void displayPattern(int n



let n = prompt('Enter n for pattern:')
let pattern = '';
let pattern1 = '';
let spaces = '';

function patternFu() {
    for (let i = 1; i <= n; i++) {
        (i > 9)? pattern = i +' '+ pattern : pattern = i +'  '+ pattern;
        spaces = ' '.repeat(3*n-3*i);
        pattern1 += spaces +pattern +'\n';
    }
    console.log(pattern1);
}
patternFu()