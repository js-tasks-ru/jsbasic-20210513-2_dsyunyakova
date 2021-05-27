function ucFirst(str) {
  let string = '';
  if (str === '') {
    return '';
  } else {
    let strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    for (let i = 0; i < str.length; i++) {
      string += strArr[i];
    }
    return string;
  }
}
