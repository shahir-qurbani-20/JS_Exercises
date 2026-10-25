// 7.14 (Computing gcd) Write a method that returns the gcd of an unspecified number 
// of integers. The method header is specified as follows:
// public static int gcd(int... numbers)
// Write a test program that prompts the user to enter five numbers, invokes the 
// method to find the gcd of these numbers, and displays the gcd.



let arr = [];
let user = 0;
let gcd = 1;

for (let i = 0; i < 5; i++) {
    user = Number(prompt("Enter a number :"))
    arr.push(user);    
}
for (let i = 2; i <= arr[0]; i++) {
    if (arr[0]%i==0 && arr[1]%i==0 && arr[2]%i==0 && arr[3]%i==0 && arr[4]%i==0) {
        gcd = i;
    }
}
console.log("The gcd of numbers "+arr[0]+' , '+arr[1]+' , '+arr[2]+' , '+arr[3]+' and '+arr[4]+' is '+gcd);
