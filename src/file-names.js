const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(fileArr) {
  console.log(fileArr.length ,new Set(...fileArr).size)
  if(fileArr.length !== new Set(fileArr).size){
    let i = 1;
    const obj = {}

    fileArr = fileArr.reduce((prev, curr) => {
      console.log(prev, prev.some(el => el===curr))
      if(prev.some(el => el===curr)){
        if(obj.hasOwnProperty(curr)){
          obj[curr] += obj[curr]
          return prev.concat(curr+'('+obj[curr]+')')
        }else{
          obj[curr] = 1
          return prev.concat(curr+'('+obj[curr]+')')
        }
      }
      return prev.concat(curr)
    }, [])
    console.log(fileArr)
    //renameFiles(fileArr)
  }
  return fileArr
}

renameFiles(["file", "file", "image", "file(1)", "file"])

module.exports = {
  renameFiles
};
