// **5.38 (Decimal to octal) Write a program that prompts the user to enter a decimal 
// integer and displays its corresponding octal value. Don’t use Java’s Integer
// .toOctalString(int) in this program.


let user = Number(prompt('Enter a decimal integer'));
let x = ''

for (let i = user ; i > 1 ; i = i/8){
    x = String(Math.floor(i) % 8) + x;
}
console.log(x);