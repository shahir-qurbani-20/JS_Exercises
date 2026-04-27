// 3.12 (Palindrome number) Write a program that prompts the user to enter a three-digit 
// integer and determines whether it is a palindrome number. A number is palin
// drome if it reads the same from right to left and from left to right. Here is a sample 
// run of this program:
// Enter a three-digit integer: 121
// 121 is a palindrome
// Enter a three-digit integer: 123
// 123 is not a palindrome



let num = prompt('Enter a three-digit integer (100-999):')
if (num[0] == num[2]){
    alert(`${num} is a plaindrom number.`)
}else(
    alert(`${num} is not a plaindrom number.`)
)