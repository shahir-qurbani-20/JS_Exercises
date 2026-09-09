// *6.14 (Estimate p) p can be computed using the following series:
// m(i) = 4¢1- 1
// 3 + 1
// 5- 1
// 7 + 1
// 9- 1
// 11 + g + (-1)i+1
// 2i- 1 ≤
// Write a method that returns m(i) for a given i and write a test program that dis
// plays the following table:
// i
// 1
// 101
// 201
// 301
// 401
// 501
// 601
// 701
// 801
// 901
// m(i)
// 4.0000
// 3.1515
// 3.1466
// 3.1449
// 3.1441
// 3.1436
// 3.1433
// 3.1430
// 3.1428
// 3.1427


function sum(n){
    let result = 'i         m(i)\n_______________\n';
    
    for (let i = 1; i <= n; i+=100) {
        let mi = 0;
        for (let j = 1; j <= i; j++) {
            mi += Math.pow(-1,j+1)/(2*j-1);
        }        
        (i==1)? result += i+'        '+(4*mi).toFixed(4)+'\n':result += i+'      '+(4*mi).toFixed(4)+'\n';
    }
    console.log(result);
}
sum(901);