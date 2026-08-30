// Sections 5.8–5.10
// *5.14 (Compute the greatest common divisor) Another solution for Listing 5.9 to find 
// the greatest common divisor of two integers n1 and n2 is as follows: First find d
// to be the minimum of n1 and n2, then check whether d,d-1,d-2, ...,2, or 1 is 
// a divisor for both n1 and n2 in this order. The first such common divisor is the 
// greatest common divisor for n1 and n2. Write a program that prompts the user to 
// enter two positive integers and displays the gcd.





let n1 = Math.round(prompt('Enter first positive intteger:'));
let n2 = Math.round(prompt('Enter second positive intteger:'));

let gcd = 1;
let k = 2;

while(k <= n1 && k <= n2 ){
    
    if(n1%k == 0 && n2%k == 0){
        gcd = k
    }

    k++
}
console.log('The greatest common divisor for '+n1+' and '+n2+' is '+gcd);