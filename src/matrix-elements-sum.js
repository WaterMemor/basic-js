const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matrix_width = matrix[0].length;
  let col = 0;
  let result = 0;
  while(col < matrix_width){
      for (let row = 0; row < matrix.length; row++) {
          if(matrix[row][col] !== 0){
              result += matrix[row][col];
          }else{
              break;    
          }
      }
      col++;
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
