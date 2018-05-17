function destroyer(arr) {
  var args = Array.from(arguments);
  args.splice(0,1);

  return arr.filter(function (value) {
    return args.indexOf(value) === -1;
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
