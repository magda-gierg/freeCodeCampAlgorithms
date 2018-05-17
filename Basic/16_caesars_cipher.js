function rot13(str) {
  var word = str.split('')
  return word.map(function(letter) {
    letter = letter.charCodeAt()

    if (letter >= 65 && letter <= 77) {
      letter += 13
    } else if (letter >= 78 && letter <= 90) {
      letter -= 13
    }
    return String.fromCharCode(letter)
  }).join('')
}




console.log(rot13("SERR PBQR PNZC"))
