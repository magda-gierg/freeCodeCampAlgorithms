function factorialize(num) {

  var arr = []
  for (var i = 1; i <= num; i++) {
    arr.push(i)
  }

  var result = arr.reduce(function(a,b) {  /* a-accumulator and b-next value in the array   */
    return a*b
  })
  return result
}

console.log(factorialize(5))
