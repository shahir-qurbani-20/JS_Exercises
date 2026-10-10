// ***7.22 (Game: Eight Queens) The classic Eight Queens puzzle is to place eight queens 
// on a chessboard such that no two queens can attack each other (i.e., no two queens 
// are on the same row, same column, or same diagonal). There are many possible 
// solutions. Write a program that displays one such solution. A sample output is 
// shown below:
// |Q| | | | | | | |
// | | | | |Q| | | |
// | | | | | | | |Q|
// | | | | | |Q| | |
// | | |Q| | | | | |
// | | | | | | |Q| |
// | |Q| | | | | | |
// | | | |Q| | | | |



let queens = [];
let result = '';

function isSafe(row, col) {

    for (let i = 0; i < row; i++) {

        if (queens[i] === col) {
            return false;
        }

        if (Math.abs(i - row) === Math.abs(queens[i] - col)) {
            return false;
        }
    }
    return true;
}

function solve(row) {

    if (row === 8) {
        return true;
    }

    let columns = [0, 1, 2, 3, 4, 5, 6, 7];

    columns.sort(() => Math.random() - 0.5);

    for (let i = 0; i < columns.length; i++) {

        let col = columns[i];

        if (isSafe(row, col)) {

            queens[row] = col;

            if (solve(row + 1)) {
                return true;
            }
            queens[row] = undefined;
        }
    }
    return false;
}

solve(0);

for (let i = 0; i < queens.length; i++) {
    result += '|'
    for (let j = 0; j < queens.length; j++) {
        if (j == queens[i]) {
            result += 'Q|'
        }else{
            result += ' |'
        }
    }
    result += '\n'
}
console.log(result);
