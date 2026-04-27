// *3.18 (Cost of shipping) A shipping company uses the following function to calcu
// late the cost (in dollars) of shipping based on the weight of the package (in 
// pounds). 
// c(w)=d
// 3.5,if06w6=1
// 5.5,if16w6=3
// 8.5,if36w6=10
// 10.5,if106w6=20
// Write a program that prompts the user to enter the weight of the package and 
// display the shipping cost. If the weight is greater than 50, display a message “the 
// package cannot be shipped.”


let weight = prompt('Enter the weight of package in pounds:')

if (0<weight && weight<=1){
    alert('shipping cost is $3.5')
}else if (1<weight && weight<=3){
    alert('shipping cost is $5.5')
}else if (3<weight && weight<=10){
    alert('shipping cost is $8.5')
}else if (10<weight && weight<=20){
    alert('shipping cost is $10.5')
}else (
    alert('the package cannot be shipped.')
)