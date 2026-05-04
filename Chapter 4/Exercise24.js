// *4.24 (Order three cities) Write a program that prompts the user to enter three cities and 
// displays them in ascending order. Here is a sample run:
// Enter the first city: Chicago
// Enter the second city: Los Angeles
// Enter the third city: Atlanta
// The three cities in alphabetical order are Atlanta Chicago Los Angeles



let city1 = prompt('Enter the first city:')
let city2 = prompt('Enter the second city:')
let city3 = prompt('Enter the third city:')

let first, second, third;

if (city1 <= city2 && city1 <= city3){
    first = city1;
    if (city2 <= city3){
        second = city2;
        third = city3;
    }else{
        second = city3;
        third = city2;
    }
}else if (city2 <= city1 && city2 <= city3){
    first = city2
    if(city1 <= city3){
        second = city1
        third = city3
    }else{
        second = city3
        third = city1
    }
}else{
    first = city3
    if(city1 <= city2){
        second = city1
        third = city2
    }else{
        second = city2
        third = city1
    }
}

alert(first+'  '+second+'  '+third)