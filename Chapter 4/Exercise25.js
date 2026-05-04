// *4.25 (Generate vehicle plate numbers) Assume a vehicle plate number consists of three 
// uppercase letters followed by four digits. Write a program to generate a plate 
// number.


let char1 = String.fromCharCode(65 + Math.floor(Math.random() * 26))
let char2 = String.fromCharCode(65 + Math.floor(Math.random() * 26))
let char3 = String.fromCharCode(65 + Math.floor(Math.random() * 26))

let num = Math.floor(1000 + Math.random() * 9000)

console.log('Plate number : '+ char1+char2+char3+num);