// **6.27 (Emirp) An emirp (prime spelled backward) is a nonpalindromic prime number 
// whose reversal is also a prime. For example, 17 is a prime and 71 is a prime, so 17 
// and 71 are emirps. Write a program that displays the first 100 emirps. Display 10 
// numbers per line, separated by exactly one space, as follows:
// 13 17 31 37 71 73 79 97 107 113 
// 149 157 167 179 199 311 337 347 359 389
// ...



function emirp(){
    let count = 0;
    let num = '';
    let result = '';
    let prime = 0;
    
    for (let i = 10; count <= 100; i++) {
        let reverse = '';
        for (let j = 2; j <= i/2; j++) {
            if (i%j == 0) {
                prime = 1;
                break;
            }
            prime = 0;
        }
        if (prime == 0) {
            num = i.toString();
            for (let j = 0; j < num.length; j++) {
                reverse = num[j] + reverse;
            }
            if (num != reverse) {
                for (let j = 2; j <= reverse/2; j++) {
                    prime = 0;
                    if (reverse % j == 0) {
                        prime = 1;
                        break;
                    }
                }
                if (prime == 0) {
                    result += num +' ';
                    count++;
                    if (count%10 == 0) {
                        result += '\n';
                    }
                }
            }
        }
        
    }
    console.log(result);
}
emirp();