// 1.12 (Average speed in kilometers) Assume a runner runs 24 miles in 1 hour, 40  minutes,
// and 35 seconds. Write a program that displays the average speed in kilometers per 
// hour. (Note that 1 mile is 1.6 kilometers.)


var mile2 = 24
var km2 = mile2 * 1.6
var time = (6035 / 60) /60
var speed2 = km2 / time
console.log('Average speed in Kilometers = '+ speed2.toFixed(2) + ' KM per hour.')