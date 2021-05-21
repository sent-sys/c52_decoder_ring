
const polybiusModule = (function () {

  function polybius(input, encode = true) {
    if(encode){//encrypt
      const key = {a:11, b:21, c:31, d:41, e:51, f:12, g:22, h:32, i: 42, j:42, k:52, l:13, m:23, 
        n:33, o:43, p:53, q:14, r:24, s:34, t:44, u:54, v:15, w:25, x:35, y:45, z:55}//encrypt key
      let output = ''
      let before = input.toLowerCase()//ignore capitals
      for(let letter of before){//iterate through and encrypt
        if(letter == ' ') output += ' '//check for spaces
        else output += key[letter]
      }
      return output
    }
    else{//decrypt
      const key = {11:'a', 21:'b', 31:'c', 41:'d', 51:'e', 12:'f', 22:'g', 32:'h', 42: '(i/j)',
        52:'k', 13:'l', 23:'m', 33:'n', 43:'o', 53:'p', 14:'q', 24:'r', 34:'s', 44:'t',
        54:'u', 15:'v', 25:'w', 35:'x', 45:'y', 55:'z'}//decrypt key
      let check = 0
      for(letter in input){//counting characters ignoring spaces
        if(!(input[letter] == ' ')) check++
      }
      if(!((check % 2) == 0)) return false//if check count is odd return false  
      let output = ''
      let before = input.toLowerCase()//ignore capitals
      for(let i = 0; i < before.length; i += 2){//iterate through and decrypt
        if(before[i] == ' ') {//check for spaces
          output += ' '
          i -= 1 //correct the iterator if space is found
        }
        else {
          let temp = `${before[i]}${before[i+1]}`
          output += key[temp]
        }
      }
      return output
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
