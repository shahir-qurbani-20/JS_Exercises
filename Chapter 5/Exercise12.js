// 5.12 (Find the smallestn such that n2712,000) Use a while loop to find the smallest 
// integer n such that n2 is greater than 12,000.



let i = 0

while(i**2 < 12000){
    
    let j = ( i + 1 ) ** 2
    
    if(j>12000){
        console.log(Math.sqrt(j));
    }
    
    i++
}