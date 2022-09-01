/**
 * Find the 3x3 square the current element matrix[col][row] belongs too:
 * - the left most limit of the square is either column 0, column 3 or column 6
 * - the upper most limit of the square is either row 0, row 3 or row 6.
 * 
 * Example: col = 1, row = 3
 * Left col limit = 0
 * Upper row limit = 3
 * -> we have to iterate through the square at col 0, 1 and 2
 * or from columnCorner to columnCorner + 3 
 * -> we have to iterate through the square at row 3, 4 and 5 
 * or from rowCorner + 3 to rowCorner + 3 + 3
 */

module.exports = function(matrix, col, row, n) {
    // Save the upper left corner of matrix
    let   columnCorner = 0,
            rowCorner = 0,
            squareSize = 3;
  
    // Find the left-most column
    while(col >= columnCorner + squareSize) {
        columnCorner += squareSize;
    }
    // Find the upper-most row
    while(row >= rowCorner + squareSize) {
        rowCorner += squareSize;
    }
    for(let i = rowCorner; i < rowCorner + squareSize; i++) {
      for(let j = columnCorner; j < columnCorner + squareSize; j++) {
        if(matrix[i][j] === n) {        
          return false;
        }
      }
    }
    return true;
};