
const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"//normal alphabet key

  function caesar(input, shift, encode = true) {
    if(shift == 0 || shift < -25 || shift > 25) return false //checking valid shift value
    if(encode){//encrypt
      let before = input.toLowerCase()//ignore capitals
      let output = ''
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]//check for symbols or spaces
        else{
          const alphabetIndex = alphabet.indexOf(before[letter])//find index
          if(alphabet[alphabetIndex + shift]) output += alphabet[alphabetIndex + shift]//within range shift
          if((alphabetIndex + shift) < 0) output += alphabet[alphabetIndex + shift + 26]//out of range shift
          if((alphabetIndex + shift) > 25) output += alphabet[alphabetIndex + shift - 26]//out of range shift
        }
      }
      return output
    }
    else{//decrypt
      let before = input.toLowerCase()//ignore capitals
      let output = ''
      for(let letter in before){
        if(!alphabet.includes(before[letter])) output += before[letter]//check for symbols or spaces
        else{
          const alphabetIndex = alphabet.indexOf(before[letter])//find index
          if(alphabet[alphabetIndex - shift]) output += alphabet[alphabetIndex - shift]//within range shift
          if((alphabetIndex - shift) < 0) output += alphabet[alphabetIndex - shift + 26]//out of range shift
          if((alphabetIndex - shift) > 25) output += alphabet[alphabetIndex - shift - 26]//out of range shift
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
