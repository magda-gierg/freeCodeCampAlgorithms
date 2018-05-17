
function slasher(arr, howMany) {
  arr.splice(0, howMany)
  return arr
  // return arr.slice(howMany)
}

console.log(slasher([1, 2, 3], 2))
