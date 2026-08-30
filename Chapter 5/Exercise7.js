// **5.7 (Financial application: compute future tuition) Suppose that the tuition for a uni
// versity is $10,000 this year and increases 5% every year. In one year, the tuition 
// will be $10,500. Write a program that computes the tuition in ten years and the 
// total cost of four years’ worth of tuition after the tenth year.


let amount = 10000
let total = 0

for (i=1; i<11; i++){
    amount = amount *1.05;
}

console.log('The tenth year tuition is: '+amount.toFixed(4));

for (i=1; i<5; i++){
    amount = amount *1.05;
    total = total + amount
}

console.log('The total cost of four years after the tenth year is: '+total.toFixed(4));