// *3.33 (Financial: compare costs) Suppose you shop for rice in two different packages. 
// You would like to write a program to compare the cost. The program prompts the 
// user to enter the weight and price of the each package and displays the one with 
// the better price. Here is a sample run:
// Enter weight and price for package 1: 50 24.59
// Enter weight and price for package 2: 25 11.99
// Package 2 has a better price. 
// 118 Chapter 3 Selections
// Enter weight and price for package 1: 50 25
// Enter weight and price for package 2: 25 12.5
// Two packages have the same price.


let w1 =Number(prompt('Enter the weight of package 1:'))
let p1 =Number(prompt('Enter the price of package 1:'))
let w2 =Number(prompt('Enter the weight of package 2:'))
let p2 =Number(prompt('Enter the price of package 2:'))

let average1 = p1/w1
let average2 = p2/w2

if (average1>average2){
    alert('The package 2 has better price.')
}else if(average2>average1){
    alert('The package 1 has better price.')
}else(
    alert('The packages have same price.')
)