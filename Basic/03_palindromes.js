function palindrome(str) {
 var myString = str.replace(/[\W_]/g, '').toLowerCase();

  if (myString === myString.split('').reverse().join('')) {
  return true;
} else {
  return false;
}
}



console.log(palindrome("eye"));
