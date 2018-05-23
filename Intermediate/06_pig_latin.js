function translatePigLatin(str) {

  var pigLatin = ''
  var vowel = /[aeiou]/gi

  if (str[0].match(vowel)) {
    pigLatin = str + 'way'

  } else {

    var consonant = str.indexOf(str.match(vowel)[0])
    pigLatin = str.substr(consonant) + str.substr(0, consonant) + 'ay'
  }

  return pigLatin
}


console.log(translatePigLatin("consonant"))
