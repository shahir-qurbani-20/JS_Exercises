// **6.29 (Twin primes) Twin primes are a pair of prime numbers that differ by 2. For exam
// ple, 3 and 5 are twin primes, 5 and 7 are twin primes, and 11 and 13 are twin primes. 
// Write a program to find all twin primes less than 1,000. Display the output as follows:
// (3, 5)
// (5, 7)
// ...


function twin(n){
    let prime = 0;
    let last = 1;
    let result = '';

    for (let i = 2; i < n; i++) {
        for (let j = 2; j <= i/2; j++) {
            if (i%j == 0) {
                prime = 1;
                break;
            }
            prime = 0;
        }
        if (prime == 0) {
            if (i - last == 2) {
                result += '('+ last + ', '+ i +')\n';
                last = i;
            }else{
                last = i;
            }
        }
    }
    console.log(result);
}
twin(1000);