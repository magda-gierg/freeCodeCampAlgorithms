function myReplace(str, before, after) {

  if (before[0] === before[0].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1)
  }

  str = str.replace(before, after)
  return str
}


console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
