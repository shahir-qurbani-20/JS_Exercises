// *3.8 (Sort three integers) Write a program that prompts the user to enter three integers 
// and display the integers in non-decreasing order.




const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));
const num3 = Number(prompt("Enter third number: "));

let smallestNumber, middleNumber, largestNumber;
//                                                      first way
// smallestNumber = Math.min(num1, num2, num3);
//                                                     second way
if (num1 <= num2 && num1 <= num3) {
  smallestNumber = num1;
} else if (num2 <= num1 && num2 <= num3) {
  smallestNumber = num2;
} else {
  smallestNumber = num3;
}                   

largestNumber = Math.max(num1, num2, num3);

middleNumber = (num1+num2+num3)-smallestNumber-largestNumber

console.log(`The numbers in non-decreasing order are: ${smallestNumber}, ${middleNumber}, and ${largestNumber}`);