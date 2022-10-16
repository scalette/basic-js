const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = []
  const len = arr.filter(el => el === -1).length
  for (let i = 0; i < len; i++){
    console.log(arr)
    const ind = arr.indexOf(-1)
    indexes.push(ind+i)
    arr.splice(ind, 1)
    console.log(arr.indexOf(-1), indexes)
  }
  arr = arr.sort((left,right)=> -right + left)
  for(let i = 0; i < indexes.length; i++){
    arr.splice(indexes[i], 0, -1)
  }
  return arr
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
module.exports = {
  sortByHeight
};

// -1 150 190 170 -1 -1 160 180
// -1 150 170 190 -1 -1 160 180