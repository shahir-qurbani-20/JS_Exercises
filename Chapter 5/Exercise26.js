// **5.26 (Compute e) You can approximate e using the following series:
// e = 1 + 1
// 1! + 1
// 2! + 1
// 3! + 1
// 4! + g + 1
// i!
// Write a program that displays the e value for i = 10000, 20000, …, and 
// 100000. (Hint: Because i! = i * (i- 1) * c * 2 * 1, then
// 1
// i! is
// 1
// i(i- 1)!
// Initialize e and item to be 1 and keep adding a new item to e. The new item is 
// the previous item divided by i for i = 2, 3, 4, ....)



for (let i = 10000 ; i<= 100000 ; i += 10000 ){
    
    let e = 1;
    let x = 1;

    for (let j = 1 ; j <= i ; j++ ){

        x = x * j
        e += (1 / x) 

    }
    console.log('i = '+ i +'    e = '+ e);
}