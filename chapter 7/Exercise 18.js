// **7.18 (Bubble sort) Write a sort method that uses the bubble-sort algorithm. The bubble
// sort algorithm makes several passes through the array. On each pass, successive 
// neighboring pairs are compared. If a pair is not in order, its values are swapped; 
// otherwise, the values remain unchanged. The technique is called a bubble sort or 
// sinking sort because the smaller values gradually “bubble” their way to the top 
// and the larger values “sink” to the bottom. Write a test program that reads in ten 
// double numbers, invokes the method, and displays the sorted numbers.



let list = [4, 27, 5, 2, 8, 11, 7, 1];
let change;
let result = "Sorted numbers: "

for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
        if (list[j] > list[j+1]) {
            change = list[j];
            list[j] = list[j+1];
            list[j+1] = change;
        }
    }
}
for (let i = 0; i < list.length; i++) {
    result += list[i]+' ';
}
console.log(result);
