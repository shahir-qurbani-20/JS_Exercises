// **3.19 (Compute the perimeter of a triangle) Write a program that reads three edges for 
// a triangle and computes the perimeter if the input is valid. Otherwise, display that 
// the input is invalid. The input is valid if the sum of every pair of two edges is 
// greater than the remaining edge.



let edge1 = Number(prompt('Enter three edges of a triangle.\nEnter edge 1:'))
let edge2 = Number(prompt('Enter three edges of a triangle.\nEnter edge 2:'))
let edge3 = Number(prompt('Enter three edges of a triangle.\nEnter edge 3:'))

let perimeter = edge1+edge2+edge3

if ((edge1+edge2)<edge3 || (edge2+edge3)<edge1 || (edge1+edge3)<edge2){
    alert('The input is invalid!')
}else(
    alert('perimeter = '+ perimeter)
)