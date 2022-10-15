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
function deleteDigit(number) {
  const arrayNumbers = []
  String(number).split('').forEach((el,i)=> {
    console.log(el, i)
    const edit = String(number).split('')
    edit.splice(i, 1)
    arrayNumbers.push(+edit.join(''))
  })
  return Math.max(...arrayNumbers)
}
console.log(deleteDigit(152))
module.exports = {
  deleteDigit
};
198