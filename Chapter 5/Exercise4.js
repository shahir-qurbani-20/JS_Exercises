// 5.4 (Conversion from miles to kilometers) Write a program that displays the follow
// ing table (note that 1 mile is 1.609 kilometers):
// Miles       Kilometers
// 1           1.609
// 2           3.218
// ...
// 9           14.481
// 10          16.090



console.log('miles   kilometers');


for (i=1 ; i<11 ; i++){
    let miles = i
    let kilometer = miles * 1.609
    console.log(miles+'            '+kilometer.toFixed(3));
}