function fearNotLetter(str) {
   var arr = str.split('')

  for(var i=0; i<arr.length; i++){
    var code = str.charCodeAt(i)
    if( code !== str.charCodeAt(0) + i){
      return String.fromCharCode(code -1)
    }
  }
  return undefined
}

console.log(fearNotLetter("abce"))
