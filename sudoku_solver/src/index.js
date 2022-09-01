const checkCol = require('./checkCol');
const checkRow = require('./checkRow');
const checkSquare = require('./checkSquare');
const grid ='090000006\n' + 
            '000960485\n' +
            '000581000\n' +
            '004000000\n' +
            '517200900\n' +
            '602000370\n' +
            '100804020\n' +
            '706000810\n' +
            '300090000';
console.log('###################');
console.log('#######SUDOKU######');
console.log('###################');
console.log('',grid.split('').join(' '));
console.log('###################');
/*
- Parse the grid: Parse the string into a 2D array and convert strings to 
integers for easier manipulation.
- Store the empty positions: Iterate through the board and save all of the 
empty positions into an array so we can track them.
- Function to try a number at given position
- Function to check the row 
- Function to check the column 
- Function to check3x3Square
- Solve the puzzle: Take the parsed Sudoku grid and the array of empty 
positions, and find the solution.

Parse board: 
- string to array of strings/rows (split),
- convert each row into an array (Array.from)
- convert each char in row to number
*/
const matrix = grid.split('\n').map(str => Array.from(
    str.split('').map(val => Number(val))));

//find empty positions in matrix  
function findEmptyPos(matrix){
    let result = [];
    for(let col = 0; col < 9; col++){
        for(let row = 0; row < 9; row++){
            if(matrix[col][row] === 0) {
                result.push([col, row]);
            }
        }
    }
    return result;
}
//check if a value is possible at given position
function isPossible(matrix, col, row, n){
    if(checkRow(matrix, row, n) && 
        checkCol(matrix, col, n) && 
        checkSquare(matrix, col, row, n)){
            return true;
        }
    return false;
}

function solve(matrix) {
    const emptyPositions = findEmptyPos(matrix)
    const limit = 9;
    let i = 0;
    while(i < emptyPositions.length){
        let row = emptyPositions[i][0];
        let column = emptyPositions[i][1];
        // Value for empty position = 0, add 1 on each iteration
        // as long as value is not valid 
        let value = matrix[row][column] + 1;
        let found = false;
        // Keep trying new values until either the limit
        // was reached or a valid value was found
        // If a valid value is found, mark found true,
        // set the position to the value, and move to the
        // next position
        // Otherwise, try the next value
        while(!found && value <= limit) {
            if(isPossible(matrix, column, row, value)) {
                found = true;
                matrix[row][column] = value;
                i++;
            } 
            else {
                value++;
            }
        }
        // If no valid value was found and the limit was
        // reached, move back to the previous position
        if(!found) {
            matrix[row][column] = 0;
            i--;
        }
    }
    // A solution was found. Log the rows as strings
    console.log('#################');
    matrix.forEach(function(row) {
      console.log(row.join(' '));
    });
    console.log('#################');
    return matrix;
};
solve(matrix)

module.exports = {
    matrix
}