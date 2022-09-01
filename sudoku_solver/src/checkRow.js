module.exports = function(matrix, row, n){
    for(let i = 0; i < 9; i++){
        if(matrix[row][i] === n){
            return false;
        }
    }
    return true;
}