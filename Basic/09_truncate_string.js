function truncateString(str, num) {
  if (num <=3) {
    return str.slice(0, num) + '...'
  }
  if (num >= str.length) {
    return str
  }
  else {
    return str.slice(0, num-3) + '...'
  }
}



console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11))
