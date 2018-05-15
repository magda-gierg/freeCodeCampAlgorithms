function findLongestWord(str) {
  var words = str.split(' ')
  var longestWord = 0

  for (var i=0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length
    }   
  }
  return longestWord
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
