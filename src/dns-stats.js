const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {}
  for(domain of domains){
    console.log(domain.split('.').map(el => '.'+el))
    const arr = domain.split('.').map(el => '.'+el).reverse()
    
      for (let j = 0; j < arr.length; j++){
        console.log('test', arr.slice(0,j+1).join(''))
        obj.hasOwnProperty(arr.slice(0,j+1).join('')) ? obj[arr.slice(0,j+1).join('')] += 1 : obj[arr.slice(0,j+1).join('')] = 1
      }
  }
  return obj
}
module.exports = {
  getDNSStats
};
