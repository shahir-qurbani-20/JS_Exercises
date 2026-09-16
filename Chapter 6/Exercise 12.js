// 6.12 (Display characters) Write a method that prints characters using the following 
// header:
// public static void printChars(char ch1, char ch2, int
//  numberPerLine)
// This method prints the characters between ch1 and ch2 with the specified num
// bers per line. Write a test program that prints ten characters per line from 1 to Z.
// Characters are separated by exactly one space.



function printChars(ch1, ch2, numberPerLine) {
    let count = 0;
    let output = "";

    for (let i = ch1.charCodeAt(0); i <= ch2.charCodeAt(0); i++) {
        output += String.fromCharCode(i) + " ";
        count++;
        
        if (count === numberPerLine) {
            output += "\n";
            count = 0;
        }
    }
    console.log(output);
}

printChars('1', 'Z', 10);