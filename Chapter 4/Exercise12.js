// 4.12 (Hex to binary) Write a program that prompts the user to enter a hex digit and 
// displays its corresponding binary number. Here is a sample run:
// Enter a hex digit: B
// The binary value is 1011
// Enter a hex digit: G
// G is an invalid input



let hex_user = prompt('Enter a hex digit :')
let hex = hex_user.toUpperCase();

if(hex == 0){
    console.log("The binary value is 0000");
}else if(hex == 1){
    console.log("The binary value is 0001");
}else if(hex == 2){
    console.log("The binary value is 0010");
}else if(hex == 3){
    console.log("The binary value is 0011");
}else if(hex == 4){
    console.log("The binary value is 0100");
}else if(hex == 5){
    console.log("The binary value is 0101");
}else if(hex == 6){
    console.log("The binary value is 0110");
}else if(hex == 7){
    console.log("The binary value is 0111");
}else if(hex == 8){
    console.log("The binary value is 1000");
}else if(hex == 9){
    console.log("The binary value is 1001");
}else if(hex === 'A'){
    console.log("The binary value is 1010");
}else if(hex == 'B'){
    console.log("The binary value is 1011");
}else if(hex == 'C'){
    console.log("The binary value is 1100");
}else if(hex == 'D'){
    console.log("The binary value is 1101");
}else if(hex == 'E'){
    console.log("The binary value is 1110");
}else if(hex == 'F'){
    console.log("The binary value is 1111");
}else(
    console.log("invalid input")
)