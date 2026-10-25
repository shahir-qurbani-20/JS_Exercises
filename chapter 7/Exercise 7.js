// *7.7 (Count single digits) Write a program that generates 100 random integers between 
// 0 and 9 and displays the count for each number. (Hint: Use an array of ten integers, 
// say counts, to store the counts for the number of 0s, 1s, ..., 9s.)


function singleNumbers(n){

    let number;
    let counts = [0,0,0,0,0,0,0,0,0,0];
    let result = '';

    for (let i = 0; i < n; i++) {

        number = Math.floor(Math.random()* 10);
        counts[number]++;
    }
    for (let i = 0; i < 10; i++) {
        
        if (counts[i] > 9) {
            result += i +" occures "+ counts[i] +" times\n"
        }else{
            result += i +" occures "+ counts[i] +"  times\n"
        }
    }
    console.log(result);
}
singleNumbers(100);