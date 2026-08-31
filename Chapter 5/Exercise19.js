// **5.19 (Display numbers in a pyramid pattern) Write a nested for loop that prints the 
// following output:
//                             1
//                         1   2   1
//                     1   2   4   2   1
//                 1   2   4   8   4   2   1
//             1   2   4   8  16   8   4   2   1
//         1   2   4   8  16  32  16   8   4   2   1
//     1   2   4   8  16  32  64  32  16   8   4   2   1
// 1   2   4   8  16  32  64 128  64  32  16   8   4   2   1



let n = Number(prompt('Enter the number of lines:'))

for(let i=1 ; i<=n ; i++){
    
    let line = ''

    for(let s=1 ; s<=(n-i)*4 ; s++){

        line += " "

    }

    for(let j=0 ; j<=i-1 ; j++){

        if(j<4){
            line += "   "+2**j
        } else if(j<7){
            line += "  "+2**j
        }else{
            line += " "+2**j
        }
    }
    
    for(let k=i-2 ; k>=0 ; k--){

        if(k<4){
                line += "   "+2**k
        } else if(k<7){
            line += "  "+2**k
        }else{
            line += " "+2**k
        }        
    }

    console.log(line);
}
