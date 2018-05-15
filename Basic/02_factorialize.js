function factorialize(num) {

  var arr = []
  for (var i = 1; i <= num; i++) {
    arr.push(i)
  }

  return arr.reduce(function(a,b) {  /* a-accumulator and b-next value in the array   */
    return a*b
  })
}

console.log(factorialize(5))
