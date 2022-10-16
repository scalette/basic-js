const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alp = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
class VigenereCipheringMachine {
  constructor(bool= true){
    this.bool = bool
  }
  generateKey(str,key)
{
     key=key.split("");
    if(str.length == key.length)
        return key.join("");
    else
    {
        let temp=key.length;   
        for (let i = 0;i<(str.length-temp) ; i++)
        {
             
            key.push(key[i % ((key).length)])
        }
    }
    return key.join("");
}
  encrypt(str,key) {
    if(!arguments[0] || !arguments[1]){
      throw new Error('Incorrect arguments!')
    }
    str = this.bool ? str: str.split('').reverse().join('')
    //const key = this.generateKey(str, key_)
    let cipher="";
    let keyL = 0
    for (let i = 0; i < str.length; i++)
    {
        if(alp.includes(str[i].toLowerCase())){

          console.log(str[i], key[i%(key.length)])
          let x = (alp.indexOf(str[i].toLowerCase()) + alp.indexOf(key[keyL%(key.length)].toLowerCase())) % 26
          let x_ = (str[i].charCodeAt(0) + key[i%(key.length)].charCodeAt(0)) % 26;
          keyL++
          //x += 'a'.charCodeAt(0)-12;
    
          // cipher+=String.fromCharCode(x);
          cipher+=alp[x]
        }else{
          cipher+=str[i]
        }
    }
    return cipher.toUpperCase();
  }
  decrypt(str,key) {
    if(!arguments[0] || !arguments[1]){
      throw new Error('Incorrect arguments!')
    }
    str = this.bool ? str: str.split('').reverse().join('')
    // const key = this.generateKey(str, key_)
    // let orig="";
  
    // for (let i = 0 ; i < str.length ; i++)
    // {
    //     // converting in range 0-25
    //     let x = (str[i].charCodeAt(0) -
    //                 key[i].charCodeAt(0) + 26) %26;
  
    //     // convert into alphabets(ASCII)
    //     x += 'A'.charCodeAt(0);
    //     orig+=String.fromCharCode(x);
    // }
    // return orig;
    let cipher="";
    let keyL = 0
    for (let i = 0; i < str.length; i++)
    {
        if(alp.includes(str[i].toLowerCase())){

          console.log(str[i], key[i%(key.length)])
          let x = (alp.indexOf(str[i].toLowerCase()) - alp.indexOf(key[keyL%(key.length)].toLowerCase()) + 26) % 26
          keyL++
          cipher+=alp[x]
        }else{
          cipher+=str[i]
        }
    }
    return cipher.toUpperCase();
  }
}
const directMachine = new VigenereCipheringMachine();
console.log(directMachine.decrypt("WJJW XAGWLNFM VNNNDXHVWWL :)", 'js'))
module.exports = {
  VigenereCipheringMachine
};
