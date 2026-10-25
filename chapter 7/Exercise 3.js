// **7.3 (Count occurrence of numbers) Write a program that reads the integers between 1 
// and 100 and counts the occurrences of each. Assume the input ends with 0. Here 
// is a sample run of the program:
// Enter the integers between 1 and 100: 2 5 6 5 4 3 23 43 2 0
// 2 occurs 2 times
// 3 occurs 1 time
// 4 occurs 1 time
// 5 occurs 2 times
// 6 occurs 1 time
// 23 occurs 1 time
// 43 occurs 1 time
// Note that if a number occurs more than one time, the plural word “times” is used 
// in the output.

let result = '';

function counts(){

    let numbers = [];
    let last = [];
    let count = {};
    let user = 1;
    let num;
    
    for (let i = 0; user != 0; i++) {
        user = Number(prompt("Enter a number between 1 and 100:"));
        (user != 0)? numbers.push(user): user=user;
    }

    for (let i = 0; i < numbers.length; i++) {
        num = numbers[i];
        if (count[num]) {
            count[num]++;
        }else{
            count[num] = 1;
            last.push(num);
        }
    }
    
    for (let i = 0; i < last.length; i++) {
        if (count[last[i]] == 1) {
            result += last[i] +' occures '+ count[last[i]] +' time\n';
        }else{
            result += last[i] +' occures '+ count[last[i]] +' times\n';
        }
    }

    console.log(result);
}
counts();
