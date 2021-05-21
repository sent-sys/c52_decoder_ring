// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if(encode){
      const key = {a:11, b:21, c:31, d:41, e:51, f:12, g:22, h:32, i: 42, j:42, k:52, l:13, m:23, 
        n:33, o:43, p:53, q:14, r:24, s:34, t:44, u:54, v:15, w:25, x:35, y:45, z:55}
      let output = ''
      for(let letter of input){
        if(letter == ' ') output += ' '
        else output += key[letter]
      }
      return output
    }
    else{
      const key = {42: '(i/j)'}

    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
