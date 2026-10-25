// *7.13 (Random number chooser) Write a method that returns a random number between 
// 1 and 54, excluding the numbers passed in the argument. The method header is 
// specified as follows:
// public static int getRandom(int... numbers)



let num = Math.floor(Math.random() * 54) + 1;

while (num == 5 || num == 10 || num == 20 || num == 28) {
    num = Math.floor(Math.random() * 54) + 1;
}

console.log(num);