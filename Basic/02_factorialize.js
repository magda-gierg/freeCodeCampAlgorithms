function factorialize(num) {
  if (num ===1) {
    return 1
  } else {
    return num * factorialize(num-1)  // I'm using recursion - function calls itself
  }
}



// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     var arr = []
//     for (var i = 1; i <= num; i++) {
//       arr.push(i)
//     }
//
//     return arr.reduce(function(a,b) {  /* a-accumulator and b-next value in the array   */
//       return a*b
//     })
//   }
// }

console.log(factorialize(5))
