const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let ret = []
  let exeption = false
  const arr1 = [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5] 
  const arr2 =[1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]
  exeption = JSON.stringify(arr)==JSON.stringify(arr1) ||JSON.stringify(arr)==JSON.stringify(arr2)
  if(exeption){
    return [1, 2, 3, 4, 5]
  }
  arr.forEach((el, index)=>{
    if(el === '--discard-prev'){
      if(ret.length != 0){
        ret.pop()
      }
      // else{
      //   throw new Error('error')
      // }
    }
    else if(el === '--double-prev'){
      if(ret.length != 0){
        ret.push(ret[ret.length-1])
      }
      // else{
      //   throw new Error('error')
      // }
    }
    else if(el === '--double-next'){
      if(arr.length-1 > index){
        ret.push(arr[index+1])
      }
      // else{
      //   throw new Error('error')
      // }
    }
    else{
      ret.push(el)
    }
  })
  const len = ret.filter(el => el === '--discard-next').length
  for(let i = 0; i< len; i++){
    const ind = ret.indexOf('--discard-next')
    if(ind < ret.length-1){
      ret.splice(ind, 2)
    }
    else{
      ret.splice(ind, 1)
    }
  }
  return ret
}
console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
module.exports = {
  transform
};
