// *5.16 (Find the factors of an integer) Write a program that reads an integer and displays 
// all its smallest factors in increasing order. For example, if the input integer is 
// 120, the output should be as follows: 2,2,2,3,5.



let x = Number(prompt("Enter an integer to extract it's factors:"))
let num = ''

while(x !== 1 ){
    if (x < 1){
        break;
    }
    if( x % 2 == 0 ){
        num += '2 ' 
        x = x/2
    }else if(x % 3 == 0){
        num += '3 ' 
        x = x/3
    }else if(x % 5 == 0){
        num += '5 ' 
        x = x/5
    }else if(x % 7 == 0){
        num += '7 ' 
        x = x/7
    }else if(x % 11 == 0){
        num += '11 ' 
        x = x/11
    }else if(x % 13 == 0){
        num += '13 ' 
        x = x/13
    }else if(x % 17 == 0){
        num += '17 ' 
        x = x/17
    }else if(x % 19 == 0){
        num += '19 ' 
        x = x/19
    }else if(x % 23 == 0){
        num += '23 ' 
        x = x/23
    }else if(x % 29 == 0){
        num += '29 ' 
        x = x/29
    }else if(x % 31 == 0){
        num += '31 ' 
        x = x/31
    }else if(x % 37 == 0){
        num += '37 ' 
        x = x/37
    }else if(x % 39 == 0){
        num += '39 ' 
        x = x/39
    }else{
        num += x;
        break;
    }
}
alert(num);