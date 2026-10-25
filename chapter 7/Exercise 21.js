// ***7.21 (Game: bean machine) The bean machine, also known as a quincunx or the Gal
// ton box, is a device for statistics experiments named after English scientist Sir 
// Francis Galton. It consists of an upright board with evenly spaced nails (or pegs) 
// in a triangular form, as shown in Figure 7.13.
// Balls are dropped from the opening of the board. Every time a ball hits a nail, it 
// has a 50% chance of falling to the left or to the right. The piles of balls are accu
// mulated in the slots at the bottom of the board.
// Write a program that simulates the bean machine. Your program should prompt 
// the user to enter the number of the balls and the number of the slots in the machine. 
// Simulate the falling of each ball by printing its path. For example, the path for 
// the ball in Figure 7.13b is LLRRLLR and the path for the ball in Figure 7.13c is 
// Programming Exercises  281
// RLRRLRR. Display the final buildup of the balls in the slots in a histogram. Here 
// is a sample run of the program:
// Enter the number of balls to drop: 5
// Enter the number of slots in the bean machine: 8
// LRLRLRR
// RRLLLRR
// LLRLLRR
// RRLLLLL
// LRLRRLR
//     O
//     O
//   OOO
// (Hint: Create an array named slots. Each element in slots stores the num
// ber of balls in a slot. Each ball falls into a slot via a path. The number of Rs in 
// a path is the position of the slot where the ball falls. For example, for the path 
// LRLRLRR, the ball falls into slots[4], and for the path is RRLLLLL, the ball 
// falls into slots[2].)



let n = Number(prompt("Enter the number of balls:")); 
let slots = Number(prompt("Enter the number of slots:")); 
let balls = [];
let arr = [];
let result = '';
let count;
let max = 0;
let nballs;
let rand;

                            //  print L and R

for (let j = 0; j < n; j++) {
    count = 0;
    if (j<9) {
        result += (j+1) +'  - ';
    }else{
        result += (j+1) +' - ';
    }
    for (let i = 0; i < slots-1; i++) {

        rand = Math.floor(Math.random()*2);
        if (rand == 1) {
            result += 'L';
        }else{
            result += 'R';
            count++;
        }

    }
    result += '\n';
    arr.push(count);
}
result += '\n';

                        //    creat balls array

for (let i = 0; i < slots; i++) {
    nballs = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == i) {
            nballs++;
        }
    }
    if (nballs > max) {
        max = nballs;
    }
    balls.push(nballs);
}

                            //    Print shape of balls

for (let i = 0; i < max; i++) {
    result += ' |';
    for (let j = 0; j < slots; j++) {
        if (balls[j] >= (max - i)) {
            result += 'o|';
        }else{
            result += ' |';
        }
    }
    result += '\n'
}
console.log(result);
