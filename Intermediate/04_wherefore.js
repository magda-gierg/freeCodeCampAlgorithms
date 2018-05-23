function whatIsInAName(collection, source) {

  var keys = Object.keys(source)

  return collection.filter(function(obj) {
    return keys.every(function(key) {   /* 'every' check if all elements in the array pass the test */
    return obj.hasOwnProperty(key) && obj[key] === source[key]
  })
})


}
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
