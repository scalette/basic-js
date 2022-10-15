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
  if(options.addition === null) {
    options.addition = 'null'
  }
  if(options.hasOwnProperty('addition')){
  const arr = new Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator ?? '|')
  str = str+arr
  }
  return new Array(options.repeatTimes).fill(str).join(options.separator ?? '+')
  console.log(arr2)
}
console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 }))
console.log('REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION')
module.exports = {
  repeater
};
