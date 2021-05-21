// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

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
