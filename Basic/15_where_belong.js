
function getIndexToIns(arr, num) {

  arr = arr.concat(num).sort(sortNumber)
  return arr.indexOf(num)
}

function sortNumber(a,b) {
  return a - b
}

console.log(getIndexToIns([40, 60], 50))
