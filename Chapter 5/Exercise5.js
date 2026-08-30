// 5.5 (Conversion from kilograms to pounds and pounds to kilograms) Write a program
// that displays the following two tables side by side:
// Kilograms  Pounds    |      Pounds      Kilograms
// 1             2.2    |      20               9.09
// 3             6.6    |      25              11.36
// ...
// 197         433.4    |      510            231.82
// 199         437.8    |      515            234.09



console.log('Kilograms   pounds    |     Pounds    Kilograms')

let i = 1
let j = 20

while ( i<200 && j<516){
    let kg = String(i).padEnd(12)
    let pounds = (i * 2.2).toFixed(1).padEnd(10)

    let pound2 = String(j).padEnd(10)
    let kg2 = (j / 2.2).toFixed(2)

    console.log(`${kg}${pounds}|     ${pound2}${kg2}`)
    
    i+=2
    j+=5
}