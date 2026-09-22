// 7.10 (Find the index of the smallest element) Write a method that returns the index of 
// the smallest element in an array of integers. If the number of such elements is 
// greater than 1, return the smallest index. Use the following header:
// public static int indexOfSmallestElement(double[] array)
// Write a test program that prompts the user to enter ten numbers, invokes this 
// method to return the index of the smallest element, and displays the index.



let user = 0;
let numbers = [];
let smallest = 0;

for (let i = 0; i < 10; i++) {
    user = Number(prompt((i+1)+"-Enter a number"));
    if (!isNaN(user)) {
        numbers.push(user);
        if (i != 0) {
            if (numbers[smallest] > user) {
                smallest = i;
            }
        }
    }else{
        alert("Enter just numbers please!")
        break;
    }
}
console.log("The smallest number is "+numbers[smallest]+" in index "+smallest);