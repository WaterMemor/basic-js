const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator !== undefined ? options.separator : '+';
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  
  let result_str = "";
  let addition_str = "";
  if(addition){
      for(let i = 0; i < additionRepeatTimes; i++){
          let separator_2 = additionSeparator;
          if(i == additionRepeatTimes-1){
              separator_2 = "";
          }
          addition_str = addition_str + addition + separator_2;
      }     
  }
  for(let i = 0; i < repeatTimes; i++){
      let separator_1 = separator;
      if(i == repeatTimes-1){
          separator_1 = "";
      }
      
      result_str = result_str + str + addition_str + separator_1;
  } 
  console.log(result_str);
  return result_str;
}

module.exports = {
  repeater
};
