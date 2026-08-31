// 5.13 (Find the largestn such that n3612,000) Use a while loop to find the largest 
// integer n such that n3 is less than 12,000.


let i = 0
let j = 0

while((i**3) < 12000){

    let num = (i ** 3)

    if(num < 12000){
        j = num
    }

    i++
}
console.log(Math.round(j**(1/3)));