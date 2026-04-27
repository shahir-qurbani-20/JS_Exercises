// *2.7 (Find the number of years) Write a program that prompts the user to enter the 
// minutes (e.g., 1 billion), and displays the number of years and days for the min
// utes. For simplicity, assume a year has 365 days. Here is a sample run:
// Enter the number of minutes: 1000000000
// 1000000000 minutes is approximately 1902 years and 214 days 



var userMinutes = Number(prompt('Enter the number of minutes (e.g., 1 billion):'))
var years = Math.floor(((userMinutes / 60) / 24) / 365)
var days = Math.floor(((((userMinutes / 60) / 24) / 365) - years) * 365)
console.log(userMinutes +' minutes is approximately '+ years + ' years and ' + days +' days')