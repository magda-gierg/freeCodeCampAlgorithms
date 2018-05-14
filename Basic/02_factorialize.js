function factorialize(num) {
  for (a = 1; num >= 1; num--) {
    a = num * a
  }
  return a
}

console.log(factorialize(5))
