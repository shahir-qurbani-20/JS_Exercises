// **5.25 (Compute p) You can approximate p by using the following series:
// p = 4¢1- 1
// 3 + 1
// 5- 1
// 7 + 1
// 9- 1
// 11 + g + (-1)i+1
// 2i- 1 ≤
// Write a program that displays the p value for i = 10000, 20000, …, and 
// 100000.


for(let i = 10000 ; i <= 100000 ; i += 10000){
    
    let pi = 0
    for( let j = 1 ; j <= i ; j++ ){
        
        pi += ((-1) ** (j + 1)) / ((2 * j)- 1 )
        
    }
    console.log('i = '+ i + '    Pi = 4('+pi+')    ==>    Pi = '+ 4 * pi);
}