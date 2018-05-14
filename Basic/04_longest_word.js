function findLongestWord(str) {
  var myString = str.split(' ')
  var longestWordLength = 0

  for (var i=0; i < myString.length; i++) {
    if (myString[i].length > longestWordLength) {
      longestWordLength = myString[i].length
    }
  }
  return longestWordLength
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
