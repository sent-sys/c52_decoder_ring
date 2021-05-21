
const substitutionModule = (function () {
  const normAlpha = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    if(!alphabet.length == 26) return false
    if(encode){
      let output = ''
      let before = input.toLowerCase()
      
    }
    else {

    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
