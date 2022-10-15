const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.split('').reduce((prev, curr) => {
    return prev[prev.length-1] === curr ? prev.slice(0, prev.length-1) + '2'+curr : prev + curr
  }, '').split('').map(el => isNaN(parseInt(el)) ? el : parseInt(el)).reduce((prev, curr) => {
    return (curr == 2 && !isNaN(parseInt(prev[prev.length-1]))) ? prev.slice(0, prev.length-1) + ++prev[prev.length-1] : prev + curr
  }, '')
}

console.log(encodeLine('aaaatttt'))

module.exports = {
  encodeLine
};
