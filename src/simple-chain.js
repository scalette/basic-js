const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    if(this.hasOwnProperty('arr')){
      console.log('next', value)
      console.log(this.arr)
    }
    else{
      console.log('first', value)
      this.arr = []
      console.log(this.arr)
    }
    this.arr.push(''+value)
    return this

  },
  removeLink(pos) {
    console.log(pos, this.getLength())
    if(pos < 1 || pos > this.getLength() || typeof pos === "string"){
      this.arr = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.arr.splice(pos-1, 1)
    return this
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    const copy = this.arr.join(' )~~( ')
    this.arr = []
    return '( ' + copy + ' )'
  }
};
module.exports = {
  chainMaker
};
