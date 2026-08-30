// 5.3 (Conversion from kilograms to pounds) Write a program that displays the follow
// ing table (note that 1 kilogram is 2.2 pounds):
// Kilograms     Pounds
// 1                2.2
// 3                6.6
// ...
// 197            433.4
// 199            437.8




console.log('Kilograms   pounds');
let kg = 0
let pound = 0

for (i=1 ; i<200 ; i+=2){
    kg = i
    pound = kg * 2.2
    console.log(kg+'\t        '+pound.toFixed(1));
}