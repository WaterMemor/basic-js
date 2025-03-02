const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numStr = n.toString();
  let minEl = [];
  let result = 0;
  
  for (let i = 0; i < numStr.length; i++) {
      let newNum = numStr.slice(0, i) + numStr.slice(i + 1);
      minEl.push(parseInt(newNum, 10));
  }
  result = Math.max(...minEl);
  return result;
}

module.exports = {
  deleteDigit
};
