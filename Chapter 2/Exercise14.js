// *2.14 (Health application: computing BMI) Body Mass Index (BMI) is a measure of 
// health on weight. It can be calculated by taking your weight in kilograms and 
// dividing by the square of your height in meters. Write a program that prompts the 
// user to enter a weight in pounds and height in inches and displays the BMI. Note 
// that one pound is 0.45359237 kilograms and one inch is 0.0254 meters. Here is 
// a sample run:
// Enter weight in pounds: 95.5
// Enter height in inches: 50
// BMI is 26.8573


let weight = Number(prompt('Enter ur weight in pounds: '))
let height = Number(prompt('Enter ur height in inches: '))
let kgr = weight * 0.45359237
let meters = height * 0.0254
let bmi = kgr / meters ** 2
console.log('BMI is ' + bmi)