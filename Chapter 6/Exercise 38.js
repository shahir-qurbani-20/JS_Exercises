// *6.38 (Generate random characters) Use the methods in RandomCharacter in Listing 
// 6.10 to print 100 uppercase letters and then 100 single digits, printing ten per line.


let str = '';
let count = 0;
let character = '';
let result = '';

function getrandom(ch1, ch2){
    return String.fromCharCode(Math.floor(Math.random() * (ch2.charCodeAt(0) - ch1.charCodeAt(0) + 1))+ ch1.charCodeAt(0));
}
    for (let i = 1; i <= 100; i++) {
        character = getrandom('a', 'z');
        result += character+' ';
        count++;
        if (count%10==0) {
            result += '\n';
        }
}
result += '\n';
for (let i = 1; i <= 100; i++) {
    character = getrandom('A', 'Z');
    result += character+' ';
    count++;
    if (count%10==0) {
        result += '\n';
    }
}
result += '\n';
    for (let i = 1; i <= 100; i++) {
        character = getrandom('0', '9');
        result += character+' ';
        count++;
        if (count%10==0) {
            result += '\n';
        }
}
console.log(result);