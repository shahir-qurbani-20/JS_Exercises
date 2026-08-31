// *5.1 (Count positive and negative numbers and compute the average of numbers) Write 
// a program that reads an unspecified number of integers, determines how many 
// positive and negative values have been read, and computes the total and average of 
// the input values (not counting zeros). Your program ends with the input 0. Display 
// the average as a floating-point number. Here is a sample run:
// Enter an integer, the input ends if it is 0: 1 2 -1 3 0
// The number of positives is 3
// The number of negatives is 1
// The total is 5.0
// The average is 1.25
// Enter an integer, the input ends if it is 0: 0
// No numbers are entered except 0




 possitive = 0
 negative = 0
 total = 0 
 average = 0


for ( i=0 ; ; i++){
    num = Number(prompt('Enter an integer, the input ends if it is 0: '))

    if(num==0){
        break;
    }else if (num>0){
        possitive++
    }else{
        negative++
    }

    total+=num
}

average = total / i;
console.log(possitive+'\n'+negative+'\n'+total+'\n'+average+'\n'+i);