// 3.26 (Use the &&, || and ^ operators) Write a program that prompts the user to enter 
// an integer and determines whether it is divisible by 5 and 6, whether it is divisible 
// by 5 or 6, and whether it is divisible by 5 or 6, but not both. Here is a sample run 
// of this program:
// Enter an integer: 10
// Is 10 divisible by 5 and 6? false
// Is 10 divisible by 5 or 6? true
// Is 10 divisible by 5 or 6, but not both? true 



let num = Number(prompt('Enter an integer:'))
let d5 = num % 5
let d6 = num % 6

if(d5 == 0 && d6 == 0){
    alert(num + ' is divisible by 5 and 6\n'+ num + ' is divisible by 5 or 6')
}else if(d5 == 0 || d6 == 0){
    alert(num + ' is divisible by 5 or 6\n' + num + ' is divisible by 5 or 6 but not both')
}else(
    alert(num + ' is indivisible by 5 or 6')
)
