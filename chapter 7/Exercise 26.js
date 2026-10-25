// 7.26 (Strictly identical arrays) The arrays list1 and list2 are strictly identical
// if their corresponding elements are equal. Write a method that returns true if 
// list1 and list2 are strictly identical, using the following header:
// public static boolean equals(int[] list1, int[] list2)
// Write a test program that prompts the user to enter two lists of integers and displays 
// whether the two are strictly identical. Here are the sample runs. Note that 
// the first number in the input indicates the number of the elements in the list. This 
// number is not part of the list.
// Enter list1: 5 2 5 6 1 6
// Enter list2: 5 2 5 6 1 6
// Two lists are strictly identical
// Enter list1: 5 2 5 6 6 1
// Enter list2: 5 2 5 6 1 6
// Two lists are not strictly identical


let l1 = [];
let l2 = [];
let num;
let check = true;
let result = '';
let n = Number(prompt("Enter the number of elements in your lists:"));

for (let i = 0; i < 2 * n; i++) {
    if (i<n) {
        num = Number(prompt("Enter element("+(i+1)+") of list 1:"));
        l1.push(num);
    }else{
        num = Number(prompt("Enter element("+(i-n+1)+") of list 2:"));
        l2.push(num);
    }
}
for (let i = 0; i < l1.length; i++) {
    if (l1[i] != l2[i]) {
        check = false;
        break;
    }
}

result += "List 1 = "+ JSON.stringify(l1)+'\nList 2 = '+ JSON.stringify(l2);

if (check) {
    result += "\nTwo lists are strictly identical :)"
}else{
    result += "\nTwo lists are not strictly identical :("
}
console.log(result);
