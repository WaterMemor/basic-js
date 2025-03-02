const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1_1 = {};
  let s2_2 = {};
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
      s1_1[s1[i]] = (s1_1[s1[i]] || 0) + 1;
  }
  for (let i = 0; i < s2.length; i++) {
      s2_2[s2[i]] = (s2_2[s2[i]] || 0) + 1;
  }
  for (let char in s1_1) {
      if (s2_2[char]) {
          result += Math.min(s1_1[char], s2_2[char]);
      }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
