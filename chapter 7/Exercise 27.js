// 7.27 (Identical arrays) The arrays list1 and list2 are identical if they have the 
// same contents. Write a method that returns true if list1 and list2 are identi
// cal, using the following header:
// public static boolean equals(int[] list1, int[] list2)
// Write a test program that prompts the user to enter two lists of integers and dis
// plays whether the two are identical. Here are the sample runs. Note that the first 
// number in the input indicates the number of the elements in the list. This number 
// is not part of the list.
// Enter list1: 5 2 5 6 6 1
// Enter list2: 5 5 2 6 1 6
// Two lists are identical
// Enter list1: 5 5 5 6 6 1
// Enter list2: 5 2 5 6 1 6
// Two lists are not identical



let ln = [];
let lm = [];
let num;
let check = true;
let result = '';
let n = Number(prompt("Enter the number of elements in your lists:"));

for (let i = 0; i < 2 * n; i++) {
    if (i<n) {
        num = Number(prompt("Enter element("+(i+1)+") of list 1:"));
        ln.push(num);
    }else{
        num = Number(prompt("Enter element("+(i-n+1)+") of list 2:"));
        lm.push(num);
    }
}

let l1 = [...ln].sort((a, b) => a - b);
let l2 = [...lm].sort((a, b) => a - b);

for (let i = 0; i < l1.length; i++) {
    if (l1[i] != l2[i]) {
        check = false;
        break;
    }
}

result += "List 1 = "+ JSON.stringify(ln)+'\nList 2 = '+ JSON.stringify(lm);

if (check) {
    result += "\nTwo lists are identical :)"
}else{
    result += "\nTwo lists are not identical :("
}
console.log(result);