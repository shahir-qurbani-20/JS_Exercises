// **7.31 (Merge two sorted lists) Write the following method that merges two sorted lists 
// into a new sorted list.
// VideoNote
// Consecutive four
// public static int[] merge(int[] list1, int[] list2)
// Implement the method in a way that takes at most list1.length + list2.
// length comparisons. Write a test program that prompts the user to enter two 
// sorted lists and displays the merged list. Here is a sample run. Note that the first 
// number in the input indicates the number of the elements in the list. This number 
// is not part of the list.
// Enter list1: 5 1 5 16 61 111
// Enter list2: 4 2 4 5 6
// The merged list is 1 2 4 5 5 6 16 61 111



let l1 = [];
let l2 = [];
let merged = [];

let n1 = Number(prompt("Enter length of list 1:"));

for (let i = 0; i < n1; i++) {
    l1.push(Number(prompt(i+1+"-Enter the element")));
}

let n2 = Number(prompt("Enter length of list 2:"));

for (let i = 0; i < n2; i++) {
    l2.push(Number(prompt(i+1+"-Enter the element")));
}

l1.sort((a, b) => a - b);
l2.sort((a, b) => a - b);

let list1 = [...l1];
let list2 = [...l2];

for (let i = 0; i < (n1 + n2); i++) {
    if (list1[0] > list2[0]) {
        merged.push(list2[0]);
        list2.splice(0,1);

    }else if (list2[0] > list1[0]){
        merged.push(list1[0]);
        list1.splice(0,1);

    }else{
        if (list1[0] == list2[0]) {
            merged.push(list2[0]);
            list2.splice(0,1);

        }else if (list1.length > list2.length) {
            merged.push(list1[0]);
            list1.splice(0,1);
            
        }else{
            merged.push(list2[0]);
            list2.splice(0,1);

        }
    }
}
console.log(JSON.stringify(l1)+'\n'+JSON.stringify(l2)+'\nThe merged list ==> '+JSON.stringify(merged));
