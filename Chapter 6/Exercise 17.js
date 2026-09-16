// *6.17 (Display matrix of 0s and 1s) Write a method that displays an n-by-n matrix using 
// the following header:
// public static void printMatrix(int n)
// Each element is 0 or 1, which is generated randomly. Write a test program that 
// prompts the user to enter n and displays an n-by-n matrix. Here is a sample run:
// Enter n: 3
// 0 1 0
// 0 0 0
// 1 1 1



function matrix(){
    let n =  Number(prompt('Enter a number:'))
    let random = 0;
    let result = '';

    for (let i = 1; i <= n; i++) {
        for (let i = 1; i <= n; i++) {
            random = Math.floor(Math.random() * 2);
            if (i==n) {
                result += random +'\n';                 
            }else{
                result += random +' '; 
            }
        } 
    }
    console.log(result);    
}
matrix();