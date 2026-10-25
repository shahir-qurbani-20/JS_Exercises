// 7.4 (Analyze scores) Write a program that reads an unspecified number of scores and 
// determines how many scores are above or equal to the average and how many 
// scores are below the average. Enter a negative number to signify the end of the 
// input. Assume that the maximum number of scores is 100.


let scores = [];
let average = 0;
let result = '';
let above = '';
let below = '';
let score = 1;

for (let i = 0; score >= 0; i++) {
    score = Number(prompt("Enter the score 0-100:"))
    if (score >= 0) {
        scores.push(score);
        average += score;
    }
}
average = average / scores.length;

scores.forEach(function check(digit) {
    if (digit >= average) {
        above += digit +',';
    }else{
        below += digit +',';
    }
})
result = above +' are above or equal the average.\nAnd '+ below +' are below the average.'
console.log(result);
