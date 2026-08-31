// *5.35 (Summation) Write a program to compute the following summation.
// 1
// 1+22
// + 1
// 22+23
// + 1
// 23+24
// +c+ 1
// 2624+2625


let sum = 0 ;

for(let i = 1 ; i <= 624 ; i++){
    let sec = 1 / (Math.pow(i , 1/2) + Math.pow(i+1 , 1/2))
    sum += sec
}
console.log(sum);