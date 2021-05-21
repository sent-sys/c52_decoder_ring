
const substitutionModule = (function () {
  const normAlpha = "abcdefghijklmnopqrstuvwxyz"//normal alphabet key

  function substitution(input, alphabet, encode = true) {
    let output = ''
    if(!alphabet) return false //check if no alphabet exists
    if(!(alphabet.length == 26)) return false // check if alphabet not equal to 26 characters
    for(let letter in alphabet){ //iterate through alphabet string to check for duplicates
      let count = 0
      for(let i = 0; i < 26; i++){
        if(alphabet[letter] == alphabet[i]) count++
      }
      if(count > 1) return false //return false if duplicate found
    }
    if(encode){ //encrypt
      let before = input.toLowerCase()
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]//checking for symbols or spaces
        else{
          const alphaIndex = normAlpha.indexOf(before[letter])
          output += alphabet[alphaIndex]
        }
      }
      return output      
    }
    else { //decrypt
      let before = input.toLowerCase()
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]//checking for symbols or spaces
        else{
          const alphaIndex = alphabet.indexOf(before[letter])
          output += normAlpha[alphaIndex]
        }
      }
      return output
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
