// *7.30 (Pattern recognition: consecutive four equal numbers) Write the following 
// method that tests whether the array has four consecutive numbers with the same 
// value. 
// public static boolean isConsecutiveFour(int[] values)
// Write a test program that prompts the user to enter a series of integers and dis
// plays if the series contains four consecutive numbers with the same value. Your 
// program should first prompt the user to enter the input size—i.e., the number of 
// values in the series. Here are sample runs:
// Enter the number of values: 8
// Enter the values: 3 4 5 5 5 5 4 5
// The list has consecutive fours 
// Enter the number of values: 9
// Enter the values: 3 4 5 5 6 5 5 4 5
// The list has no consecutive fours 



let n = Number(prompt("Enter the number of values:"))

let values = [];
let consecutive = false;

for (let i = 0; i < n; i++) {
    values.push(Number(prompt(i+1+"-Enter the values:")));
}

for (let i = 0; i < values.length; i++) {
    for (let j = i+1; j < values.length; j++) {

        if (values[i] == values[j] &&
            values[i] == values[j+1] &&
            values[i] == values[j+2]
        ) {
            consecutive = true;
        }
    }
}

if (consecutive) {
    console.log(JSON.stringify(values)+'\nThe list has consecutive fours.');
}else{
    console.log(JSON.stringify(values)+'\nThe list has no consecutive fours.');
}
