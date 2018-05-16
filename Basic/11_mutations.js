function mutation(arr) {
  var string1 = arr[0].toLowerCase()
  var string2 = arr[1].toLowerCase()

  for (var i = 0; i < string2.length; i++) {
    if (string1.indexOf(string2[i]) === -1) { /*indexOf returns -1 if the value is not found; if the letter dosn't exist*/
    return false
  }
}
return true
}


console.log(mutation(["hello", "hey"]))
