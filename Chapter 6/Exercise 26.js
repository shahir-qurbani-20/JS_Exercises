// **6.26 (Palindromic prime) A palindromic prime is a prime number and also palindro
// mic. For example, 131 is a prime and also a palindromic prime, as are 313 and 
// 757. Write a program that displays the first 100 palindromic prime numbers. Dis
// play 10 numbers per line, separated by exactly one space, as follows:
// 2 3 5 7 11 101 131 151 181 191
// 313 353 373 383 727 757 787 797 919 929
// ...


function PalindromicPrime(){
    let count = 0;
    let prime = 0;
    let first = '';
    let last = '';
    let num = '';
    let power = 0;
    let result = '';
    
    for (let i = 2; count < 100; i++) {
        let plindromic = '';
        num = i.toString();
        for (let j = 2; j <= i/2; j++) {
           if (i % j == 0) {
               prime = 1;
               break;
           }
           prime = 0;
        }
        if (prime == 0) {
            if (i < 10) {
                result += i +' ';
                count++;
            }else{
                power = Math.floor((num.length)/2);
                if (num.length % 2 == 0) {
                    last = i % (10 ** power);
                    first = Math.floor(i / (10 ** power));
                }else{
                    last = i % (10 ** power)
                    first = Math.floor(i / (10 ** (power + 1)));
                }
                first = first.toString();
                last = last.toString();
                for (let k = 0; k < first.length; k++) {
                    plindromic = first[k] + plindromic;
                }
                first = Number(first);
                last = Number(last);
                plindromic = Number(plindromic);
                if (plindromic == last) {
                    result += i +' ';
                    count++;
                    if (count % 10 == 0) {
                        result += '\n';
                    }
                }
            }
        }
    }
    console.log(result);
}
PalindromicPrime();