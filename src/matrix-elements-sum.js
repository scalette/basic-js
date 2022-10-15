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
  let sum = 0
  console.log(matrix)
  const arr = new Array(matrix[0].length).fill(1)
  matrix.reduce((prev, curr) => {
    console.log(curr)
    console.log('prev:', prev)
    curr.forEach((el, num)=>{
      sum += prev[num] === 0 ? 0 : el
    })
    return curr
  }, arr)
  return sum
}
getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
])
module.exports = {
  getMatrixElementsSum
};
