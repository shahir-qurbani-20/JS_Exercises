// **5.45 (Statistics: compute mean and standard deviation) In business applications, you 
// are often asked to compute the mean and standard deviation of data. The mean is 
// simply the average of the numbers. The standard deviation is a statistic that tells 
// 200 Chapter 5 Loops
// you how tightly all the various data are clustered around the mean in a set of data. 
// For example, what is the average age of the students in a class? How close are the 
// ages? If all the students are the same age, the deviation is 0.
// Write a program that prompts the user to enter ten numbers, and displays the 
// mean and standard deviations of these numbers using the following formula:
// n
// a
// n
// mean =
// i =1
// n = x1 + x2 + g+ xn
// Here is a sample run:
// Enter ten numbers: 1 2 3 4.5 5.6 6 7 8 9 10
// The mean is 5.61
// The standard deviation is 2.99794
// ¢ a
// xi
// a
// n
// i =1
// n
// deviation = c
// x2 i
// i =1
// n- 1
// 2
// xi≤
// n


let sum = 0;
let squar = 0;
let user = 0;
let mean = 0;
let deviation = 0;

for (let i = 1 ; i <= 10 ; i++){
    user = Number(prompt('Enter the number'));
    sum += user
    squar += Math.pow(user , 2)
}
mean = sum / 10;
deviation = (squar - (Math.pow(sum , 2) / 10)) / 9;
finalDeviation = Math.pow(deviation , 0.5);

console.log('The mean is '+ mean +'\nThe standard deviation is ' + finalDeviation);