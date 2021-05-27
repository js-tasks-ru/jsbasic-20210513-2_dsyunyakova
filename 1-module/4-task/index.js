function checkSpam(str) {
  let string = str.toLowerCase();
  let a = '1xBet'.toString().toLowerCase();
  let b = 'XXX'.toLowerCase();
  
  if (string.includes(a) || string.includes(b)) {
    return true;
  } else {
    return false;
  }
}