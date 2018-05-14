function titleCase(str) {
  var myArray = str.split(' ')
  for (var i= 0; i < myArray.length; i++) {
    myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].substring(1).toLowerCase()
  }

  return myArray.join(' ')
}

console.log(titleCase("I'm a little tea pot"))
