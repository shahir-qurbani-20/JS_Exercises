// *4.11 (Decimal to hex) Write a program that prompts the user to enter an integer between 
// 0 and 15 and displays its corresponding hex number. Here are some sample runs:
// Enter a decimal value (0 to 15): 11
// The hex value is B
// Enter a decimal value (0 to 15): 5
// The hex value is 5
// Enter a decimal value (0 to 15): 31
// 31 is an invalid input


let dec = Math.round(Number(prompt('Enter a decimal value (0 to 15):')))

if (dec < 0 || dec > 15){
    alert('invalid input')
}else if(dec == 0){
    console.log("The hex value is 0");
}else if(dec == 1){
    console.log("The hex value is 1");
}else if(dec == 2){
    console.log("The hex value is 2");
}else if(dec == 3){
    console.log("The hex value is 3");
}else if(dec == 4){
    console.log("The hex value is 4");
}else if(dec == 5){
    console.log("The hex value is 5");
}else if(dec == 6){
    console.log("The hex value is 6");
}else if(dec == 7){
    console.log("The hex value is 7");
}else if(dec == 8){
    console.log("The hex value is 8");
}else if(dec == 9){
    console.log("The hex value is 9");
}else if(dec == 10){
    console.log("The hex value is A");
}else if(dec == 11){
    console.log("The hex value is B");
}else if(dec == 12){
    console.log("The hex value is C");
}else if(dec == 13){
    console.log("The hex value is D");
}else if(dec == 14){
    console.log("The hex value is E");
}else(
    console.log("The hex value is F")
)