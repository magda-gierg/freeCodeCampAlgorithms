
function chunkArrayInGroups(arr, size) {
  var newArr = []
  for (var i = 0; i < arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size))
  } return newArr
}


// function chunkArrayInGroups(arr, size) {
//   var groupArr = []
//   var position = 0
//   while(position < arr.length) {
//     groupArr.push(arr.slice(position, position+=size))
//   }
//   return groupArr
// }


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
