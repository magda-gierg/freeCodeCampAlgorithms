function diffArray(arr1, arr2) {

  var arr1Filtered = arr1.filter(function(unique){
    return arr2.indexOf(unique) === -1
  })

  var arr2Filtered = arr2.filter(function(unique) {
    return arr1.indexOf(unique) === -1
  })

  return arr1Filtered.concat(arr2Filtered)
}


// return arr1
// .concat(arr2)
// .filter(
//   item => !arr1.includes(item) || !arr2.includes(item)
// )
// }







console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
