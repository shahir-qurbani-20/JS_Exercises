// **5.17 (Display pyramid) Write a program that prompts the user to enter an integer from 
// 1 to 15 and displays a pyramid, as shown in the following sample run:
// Programming Exercises  193
// Enter the number of lines: 7
//                                    1
//                                 2  1  2
//                              3  2  1  2  3
//                           4  3  2  1  2  3  4
//                        5  4  3  2  1  2  3  4  5
//                     6  5  4  3  2  1  2  3  4  5  6
//                  7  6  5  4  3  2  1  2  3  4  5  6  7






let n = Number(prompt("Enter the number of lines (1 - 15): "))

for(let i = 1 ; i<=n ; i++){
    
    let line = ''

    for (let s = 1 ; s<=(n-i)*4+18 ; s++){
        line += ' '
    }

    for (let j = i ; j>=1 ; j--){
        if(j>9){
            line += j + '  '
        }else {
            line += j + '   '
        }
    }

    for (let k = 2 ; i>=k ; k ++){
        if(k>=9){
            line += k + '  '
        }else{
            line += k + '   '
        }
    }
    console.log(line);
}