// 6.10 (Use theisPrimeMethod) Listing 6.7, PrimeNumberMethod.java, provides the 
// isPrime(int number) method for testing whether a number is prime. Use this 
// method to find the number of prime numbers less than 10000.


let prime = '2    ';
let count = 1;
let check = 0;

function isPrime(n) {
    for (let number = 3; number <= n ; number++) {
        for (let i = 2; i < number/2; i++) {
            if (number % i == 0) {
                check = 1;
                break;
            }
            check = 0;
        }
        if (check == 0) {
            if (number<10) {
                prime += number +'    ';
            }else if(number<100){
                prime += number +'   ';
            }else if(number<1000){
                prime += number +'  ';
            }else(prime += number +' ')
            count++;
            if (count%10==0) {
                prime +='\n'
            }
        }
    }
    console.log(prime);
}
isPrime(10000);