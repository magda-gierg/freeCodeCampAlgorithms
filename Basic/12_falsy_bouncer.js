function bouncer(arr) {
  return arr.filter(function(value) {
    return value;
  });

  /* return arr.filter(Boolean); */
}

console.log(bouncer([7, "ate", "", false, 9]))
