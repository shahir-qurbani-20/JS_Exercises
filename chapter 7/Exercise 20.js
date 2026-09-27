// *7.20 (Revise selection sort) In Section 7.11, you used selection sort to sort an array. 
// The selection-sort method repeatedly finds the smallest number in the current 
// array and swaps it with the first. Rewrite this program by finding the largest num
// ber and swapping it with the last. Write a test program that reads in ten double 
// numbers, invokes the method, and displays the sorted numbers.



function sort() {
    let list = [4, 9, 0, 14, 3, 6, 2, 11];
    let large = 0;
    let swap = 0;

    for (let i = 0; i < list.length-1; i++) {
        large = list[0];
        swap = 0;
        for (let j = 0; j < list.length-1-i; j++) {
            if (large < list[j+1]) {
                large = list[j+1];
                swap = j+1;
            }
        }
        list[swap] = list[list.length-(i+1)];
        list[list.length-(i+1)] = large;
    }
    console.log(list);
}
sort();