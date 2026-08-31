// *5.47 (Business: check ISBN-13) ISBN-13 is a new standard for indentifying books. It 
// uses 13 digits d1d2d3d4d5d6d7d8d9d10d11d12d13. The last digit d13 is a checksum, 
// which is calculated from the other digits using the following formula:
// 10- (d1 + 3d2 + d3 + 3d4 + d5 + 3d6 + d7 + 3d8 + d9 + 3d10 + d11 + 3d12)%10
// If the checksum is 10, replace it with 0. Your program should read the input as a 
// string. Here are sample runs:
// Enter the first 12 digits of an ISBN-13 as a string: 978013213080
// The ISBN-13 number is 9780132130806
// Enter the first 12 digits of an ISBN-13 as a string: 978013213079
// The ISBN-13 number is 9780132130790
// Enter the first 12 digits of an ISBN-13 as a string: 97801320
// 97801320 is an invalid input


let ISBN = prompt('Enter the first 12 digits of an ISBN-13 as a string');
let sum = 0;
let result = '';

if(/^\d{12}$/.test(ISBN)){
    for(let i = 0; i <= 11 ; i++){
        // sum += ISBN[i] + 3 * ISBN[i + 1];
        if(i % 2 == 0){
            sum += Number(ISBN[i]);
        }else( sum += (3 * ISBN[i]))
    }
    result = 10 - (sum % 10);
    if(result != 10){

        console.log('The ISBN-13 number is '+ISBN + result);
    }else{
        console.log('The ISBN-13 number is '+ISBN + 0);
    }
}else(console.log(ISBN +' is an invalid input!'))