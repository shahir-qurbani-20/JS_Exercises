// 7.16 (Execution time) Write a program that randomly generates an array of 100,000 
// integers and a key. Estimate the execution time of invoking the linearSearch
// method in Listing 7.6. Sort the array and estimate the execution time of invok
// ing the binarySearch method in Listing 7.7. You can use the following code 
// template to obtain the execution time:
// long startTime = System.currentTimeMillis();
// perform the task;
// long endTime = System.currentTimeMillis();
// long executionTime = endTime - startTime;



let key = Math.floor(Math.random() * 101);
let arr = [];
let num = 0;

let linear = 0;
let binary = 0;

let startTime = 0;
let endTime = 0;

let left = 0;
let middle = 0;
let right = 0;

for (let i = 0; i < 100000; i++) {

    num = Math.floor(Math.random() * 101);
    arr.push(num);
}

startTime = Date.now();

for (let i = 0; i < arr.length; i++) {
    if (key == arr[i]) {
        break;
    }    
}
endTime = Date.now();

linear = endTime - startTime +' ms';

arr = arr.sort((a, b) => a - b);
right = arr.length - 1;

startTime = Date.now();

while (left <= right) {
    
    middle = Math.floor((left + right) / 2);

    if (key < arr[middle]) {
        right = middle - 1;
    }else if (key > arr[middle]) {
        left = middle + 1;
    }else{
        break;
    }
}
endTime = Date.now();
binary = endTime - startTime +' ms';
console.log("Linear => "+linear+"\nBinary => "+ binary);