// 1.7 (Approximatep) p can be computed using the following formula:
// p = 4 * ¢1- 1
// 3 + 1
// 5- 1
// 7 + 1
// 9- 1
// 11 + c ≤
// Write a program that displays the result of 4 * ¢1- 1
// 3 + 1
// 5- 1
// 7 + 1
// 9- 1
// 11≤
// and 4 * ¢1- 1
// 3 + 1
// 5- 1
// 7 + 1
// 9- 1
// 11 + 1
// 13≤. Use 1.0 instead of 1 in your 
// program.


var pie1 = 4 * (1-(1/3)+(1/5)-(1/7)+(1/9)-(1/11))
var pie2 = 4 * (1-(1/3)+(1/5)-(1/7)+(1/9)-(1/11)+(1/13))
console.log(pie1.toFixed(1) + '\n' + pie2.toFixed(1))