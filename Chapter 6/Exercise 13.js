// *6.13 (Sum series) Write a method to compute the following series:
// m(i) = 1
// 2 + 2
// 3 + c + i
// i + 1
// Write a test program that displays the following table:
// i
// 1
// 2
// ...
// 19
// 20
// m(i)
//  0.5000
//  1.1667
// 16.4023
// 17.3546


function sum (n){
    let result = 'i          m(i)\n__________________\n';
    let mi = 0;

    for (let i = 1; i <= n; i++) {
        mi += (i/(i+1));
        if(i<10){
            result += i+'          '+mi.toFixed(4)+'\n';
        }else{
            result += i+'         '+mi.toFixed(4)+'\n';
        }
    }
    console.log(result);
}
sum(20);