// *5.20 (Display prime numbers between 2 and 1,000) Modify Listing 5.15 to display all 
// the prime numbers between 2 and 1,000, inclusive. Display eight prime numbers 
// per line. Numbers are separated by exactly one space.




let Prime = '';
let LNum = 1000;
let count = 0;
let number = 2;

while ( number <= LNum){

    let isPrime = true;

    for( let divisor=2 ; divisor<=number/2 ; divisor++){
        if( number%divisor==0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){

        count++;

        if( count%8 == 0 ){
            Prime += number + '\n'  
        }else{
            Prime += number + ' '  
        }
    }
    number++;
}
console.log(Prime);