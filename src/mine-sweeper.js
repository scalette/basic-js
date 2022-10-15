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
  
  let arrayCopy = JSON.parse(JSON.stringify(matrix))
  matrix.forEach((row, indexRow) => {
    row.forEach((el, indexEl) => {
      let num = 0
      if(indexRow === 0){
        if(indexEl === 0){
          num += matrix[0][1] + matrix[1][0] + matrix[1][1]
        }
        else if(indexEl === matrix[0].length-1){
          num += matrix[0][matrix[0].length-2] + matrix[1][matrix[0].length-2] + matrix[1][matrix[0].length-1]
        }
        else{
          num += matrix[0][indexEl-1]+matrix[0][indexEl+1]+matrix[1][indexEl-1]+matrix[1][indexEl+1] +matrix[1][indexEl]
        }
      }
      else if(indexRow === matrix.length-1){
        if(indexEl === 0){
          console.log(indexRow, indexEl)
          num += matrix[indexRow-1][1] + matrix[indexRow-1][0] + matrix[indexRow][1]
          console.log(matrix[indexRow-1][1])
          console.log(num)
        }
        else if(indexEl === matrix[0].length-1){
          num += matrix[indexRow][matrix[0].length-2] + matrix[indexRow-1][matrix[0].length-2] + matrix[indexRow-1][matrix[0].length-1]
        }
        else{
          num += matrix[indexRow][indexEl-1]+matrix[indexRow][indexEl+1]+matrix[indexRow-1][indexEl-1]+matrix[indexRow-1][indexEl+1] +matrix[indexRow-1][indexEl]
        }
      }
      else if(indexEl === 0){
        console.log(indexRow)
        num += matrix[indexRow-1][indexEl] + matrix[indexRow+1][indexEl] + matrix[indexRow-1][indexEl+1] + matrix[indexRow+1][indexEl+1]+ matrix[indexRow][indexEl+1]
      }
      else if(indexEl === matrix[0].length-1){
        num += matrix[indexRow-1][indexEl] + matrix[indexRow+1][indexEl] + matrix[indexRow-1][indexEl-1] + matrix[indexRow+1][indexEl-1]+ matrix[indexRow][indexEl-1]
      }
      else{
        
        num += matrix[indexRow-1][indexEl-1] + matrix[indexRow-1][indexEl] + matrix[indexRow-1][indexEl+1] + matrix[indexRow][indexEl-1] + matrix[indexRow][indexEl+1]  + matrix[indexRow+1][indexEl-1] + matrix[indexRow+1][indexEl] + matrix[indexRow+1][indexEl+1] 
      }
      arrayCopy[indexRow][indexEl] = num
      console.log(matrix)
    })
  })
  return arrayCopy
}
console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]))
module.exports = {
  minesweeper
};
