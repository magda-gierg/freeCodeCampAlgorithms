function pairElement(str) {

//   return str.split('').map(function(character) {
//     if (character === 'G') {
//       return ['G', 'C']
//     }
//     if (character === 'C') {
//       return ['C', 'G']
//     }
//     if (character === 'A') {
//       return ['A', 'T']
//     }
//     if (character === 'T') {
//       return ['T', 'A']
//     }
//   });
// }



var match = { G: 'C', C: 'G', A: 'T', T: 'A'}

return str.split('').map(function(character) {
  return [character, match[character]]
})
}




console.log(pairElement("GCG"))
