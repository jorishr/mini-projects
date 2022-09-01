module.exports = function(matrix, col, n){
    for(let i = 0; i < 9; i++){
        if(matrix[i][col] === n){
            return false;
        }
    }
    return true;
}