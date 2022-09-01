const checkCol = require('./checkCol');
const checkRow = require('./checkRow');
const checkSquare = require('./checkSquare');
const checkSquare = require('./checkSquare');
const matrix   = require('./index').matrix;

describe('Sudoku solver tests', () => {
    test('Row check returns false if duplicate n found in row', () => {
        const matrix1 = [[1,2,3,4,5,6,7,8,0]];
        const matrix2 = [[0,2,0,4,5,6,7,8,9]];
        expect(checkRow(matrix1, 0, 4)).toBe(false);
        expect(checkRow(matrix1, 0, 9)).toBe(true);
        expect(checkRow(matrix2, 0, 9)).toBe(false);
        expect(checkRow(matrix2, 0, 1)).toBe(true);
        expect(checkRow(matrix2, 0, 3)).toBe(true);
    })
    test('Column check returns false if duplicate n found in column', () => {
        const matrix1 = [[1],[2],[3],[4],[5],[6],[7],[8],[0]];
        const matrix2 = [[0],[2],[0],[4],[5],[6],[7],[8],[9]];
        expect(checkCol(matrix1, 0, 4)).toBe(false);
        expect(checkCol(matrix1, 0, 9)).toBe(true);
        expect(checkCol(matrix2, 0, 9)).toBe(false);
        expect(checkCol(matrix2, 0, 1)).toBe(true);
        expect(checkCol(matrix2, 0, 3)).toBe(true);
    })
    test('Square check returns false if duplicate n found in square', () => {
        expect(checkSquare(matrix, 0, 0, 9)).toBe(false);
        expect(checkSquare(matrix, 2, 2, 9)).toBe(false);
        expect(checkSquare(matrix, 7, 0, 2)).toBe(true);
        expect(checkSquare(matrix, 8, 8, 5)).toBe(true);
    })
})