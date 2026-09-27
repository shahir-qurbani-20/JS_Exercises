// **7.19 (Sorted?) Write the following method that returns true if the list is already sorted 
// in increasing order.
// public static boolean isSorted(int[] list)
// Write a test program that prompts the user to enter a list and displays whether 
// the list is sorted or not. Here is a sample run. Note that the first number in the 
// input indicates the number of the elements in the list. This number is not part 
// of the list.  
// Enter list: 8 10 1 5 16 61 9 11 1
// The list is not sorted
// Enter list: 10 1 1 3 4 4 5 7 9 11 21
// The list is already sorted



let list = [];
let sorted = [];
let element;
let n = Number(prompt("Enter the number of elements:"))

for (let i = 0; i < n; i++) {
    element = Number(prompt(i+1+"-Enter the element:"));
    list.push(element);
}
sorted = [...list].sort((a,b) => a - b);

if (JSON.stringify(sorted) === JSON.stringify(list)) {
    console.log(JSON.stringify(list)+" The list is already sorted.");
}else{
    console.log(JSON.stringify(list)+" The list is not sorted.");
}