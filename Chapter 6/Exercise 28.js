// **6.28 (Mersenne prime) A prime number is called a Mersenne prime if it can be written 
// in the form 2p- 1 for some positive integer p. Write a program that finds all 
// Mersenne primes with p … 31 and displays the output as follows:
// p
// 2^p –1
// 2 3
// 3 7
// 5 31
// ...



function mersenne(n){
    let p = 0;
    let prime = 0;
    let result = 'P           P^2 -1\n_________________\n';
    let power = 0;

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= i/2 ; j++) {
            if (i%j == 0) {
                prime = 1;
                break;
            }
            prime = 0;
        }
        if (prime == 0) {
            p = Math.pow(2,i) - 1;
            if (i<10) {
                result += i +'           '+p+'\n';
            }else{
                result += i +'          '+p+'\n';
            }
        }
    }
    console.log(result);
}
mersenne(31);