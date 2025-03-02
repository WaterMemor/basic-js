const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num_str = n.toString();
  let num_ = n;
  while(num_ > 9){
      num_str = num_.toString();
      num_ = 0;
    for(let char in num_str){
      num_ += Number(num_str[char]);
    }
  }
  return num_;
}

module.exports = {
  getSumOfDigits
};
