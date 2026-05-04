// 4.22 (Check substring) Write a program that prompts the user to enter two strings and 
// reports whether the second string is a substring of the first string.
// 156 Chapter 4  Mathematical Functions, Characters, and Strings
// Enter string s1: ABCD
// Enter string s2: BDC
// BDC is not a substring of ABCD



let s1 = prompt('Enter string s1:')
let s2 = prompt('Enter string s2:')

let S1 = s1.toUpperCase()
let S2 = s2.toUpperCase()

if(S1.includes(S2)){
    alert(s2 + ' is a substring of '+ s1)
} else(
    alert(s2 + ' is not a substring of '+ s1)
)