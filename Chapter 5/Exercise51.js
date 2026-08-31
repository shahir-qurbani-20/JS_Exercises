// *5.51 (Longest common prefix) Write a program that prompts the user to enter two 
// strings and displays the largest common prefix of the two strings. Here are some 
// sample runs:
// Enter the first string: Welcome to C++
// Enter the second string: Welcome to programming
// The common prefix is Welcome to
// Enter the first string: Atlanta
// Enter the second string: Macon
// Atlanta and Macon have no common prefix


let str1 = prompt('Enter the first string:')
let str2 = prompt('Enter the second string:')
let prefix = '';

for(let i = 0; i < str1.length; i++){
    if(str1[i] == str2[i]){
        prefix += str1[i];
    }else{
        break;
    }
}
if(prefix == ''){
    console.log(str1+' and '+str2+' have no common prefix.');
}else{
    console.log('The common prefix is '+prefix);
}