const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  
  // Initialize result matrix with zeros
  let result = Array.from({ length: rows }, () => Array(cols).fill(0));
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if(matrix[row][col] === true){
          result[row][col] = 1;
          if(col !== matrix[row].length-1){
              if(matrix[row][col+1] !== true){
                  result[row][col+1] += 1;
              }
          }
          if(col !== 0){
              if(matrix[row][col-1]  !== true){
                  result[row][col-1] += 1;
              }
          }
          if(row !== matrix.length-1){
              if(matrix[row+1][col]  !== true){
                  result[row+1][col] += 1;
              }
              if(col !== 0){
                  if(matrix[row+1][col-1] !== true){
                      result[row+1][col-1] += 1;
                  }
              }
              if(col !== matrix[row].length-1){
                  if(matrix[row+1][col+1] !== true){
                      result[row+1][col+1] += 1;
                  }
              }
          } 
          if(row !== 0){
              if(matrix[row-1][col] !== true){
                  result[row-1][col] += 1;
              }
              if(col !== 0){
                  if(matrix[row-1][col-1] !== true){
                      result[row-1][col-1] += 1;
                  }
              }
              if(col !== matrix[row].length-1){
                  if(matrix[row-1][col+1] !== true){
                      result[row-1][col+1] += 1;
                  }
              }
          } 
      }
    }
}
return result;
}

module.exports = {
  minesweeper
};
