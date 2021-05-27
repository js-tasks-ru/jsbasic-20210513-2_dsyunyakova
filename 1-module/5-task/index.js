function truncate(str, maxlength) {
  let string = '';
  if (str.length <= 20) {
    return str;
  } else {
    string = str.slice(0, 19);
    string += '…';
  }
  return string;
}
