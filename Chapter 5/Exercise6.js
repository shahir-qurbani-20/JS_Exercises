// 5.6 (Conversion from miles to kilometers) Write a program that displays the follow
// ing two tables side by side:
// Miles       Kilometers  |  Kilometers       Miles
// 1           1.609       |  20               12.430
// 2           3.218       |  25               15.538
// ...
// 9           14.481      |  60               37.290
// 10          16.090      |  65               40.398



let i = 1
let j = 20

console.log('Miles        Kilometers   |    Kilometers        Miles');

while(i<11 && j<66){
    let miles = String(i).padEnd(12)
    let km = (i*1.609).toFixed(3).padEnd(13)
    
    let km2 = String(j).padEnd(17)
    let miles2 = (j/1.609).toFixed(3).padEnd(7)

    console.log(miles,km+'|    '+km2,miles2);
    i++
    j+=5
}  