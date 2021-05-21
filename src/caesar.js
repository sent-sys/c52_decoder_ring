
const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    if(shift == 0 || shift < -25 || shift > 25) return false //checking valid shift value
    if(encode){
      let before = input.toLowerCase()//ignore capitals
      let output = ''
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]//checking for symbols or spaces
        else{
          const alphabetIndex = alphabet.indexOf(before[letter])
          if(alphabet[alphabetIndex + shift]) output += alphabet[alphabetIndex + shift]
          if((alphabetIndex + shift) < 0) output += alphabet[alphabetIndex + shift + 26]
          if((alphabetIndex + shift) > 25) output += alphabet[alphabetIndex + shift - 26]
        }
      }
      return output
    }
    else{
      let before = input.toLowerCase()
      let output = ''
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]
        else{
          const alphabetIndex = alphabet.indexOf(before[letter])
          if(alphabet[alphabetIndex - shift]) output += alphabet[alphabetIndex - shift]
          if((alphabetIndex - shift) < 0) output += alphabet[alphabetIndex - shift + 26]
          if((alphabetIndex - shift) > 25) output += alphabet[alphabetIndex - shift - 26]
        }
      }
      return output
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
