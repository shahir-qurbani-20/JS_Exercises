// *7.6 (Revise Listing 5.15, PrimeNumber.java) Listing 5.15 determines whether a num
// ber n is prime by checking whether 2, 3, 4, 5, 6, ...,n/2 is a divisor. If a divisor 
// is found, n is not prime. A more efficient approach is to check whether any of the 
// prime numbers less than or equal to 2n can divide n evenly. If not, n is prime. 
// Rewrite Listing 5.15 to display the first 50 prime numbers using this approach. 
// You need to use an array to store the prime numbers and later use them to check 
// whether they are possible divisors for n.


function primeNumbers (){

    let primes = [2,3];
    let result = '';
    let isPrime = true;

    for (let i = 5; primes.length != 50; i++) {
        isPrime = true;
        for (let j = 0; j < primes.length; j++) {
            if (i%primes[j] == 0) {
                isPrime = false;
                break;
            }else if (primes[j] * primes[j] > i){
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    for (let i = 0; i < primes.length; i++) {
        result += primes[i] +' '
        if ((i+1)%10 == 0) {
            result += '\n';
        }
    }
    console.log(result);
}
primeNumbers();