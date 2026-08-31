// 5.10 (Find numbers divisible by 5 and 6) Write a program that displays all the num
// bers from 100 to 1,000, ten per line, that are divisible by 5 and 6.  Numbers are 
// separated by exactly one space.



let count = 0
let output = ''

for (let i = 100; i <= 1000; i++) {

    if (i % 5 === 0 && i % 6 === 0) {

        output += i + ' '

        count++

        if (count % 10 === 0) {
            output += '\n'
        }
    }
}

console.log(output)