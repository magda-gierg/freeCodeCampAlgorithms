function telephoneCheck(str) {

  var regex = /^(1[\s-]?)?(\([1-9]\d\d\)|[1-9]\d\d)[\s-]?[1-9]\d\d[\s-]?\d{4}$/g;
  return regex.test(str)
}

console.log(telephoneCheck("555-555-5555"))
