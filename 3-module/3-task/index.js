function camelize(str) {
  let arr = str.split('-');
    
  let filteredArray = arr.filter(function(item) {
    return item.length > 0;
  });
  let camelCaseArray = arr.map(function(item, i) {
    if (i === 0) {
      return item;
    }
    
    let itemStr = item.split('');
    let myString = '';
    myString += itemStr[0].toUpperCase();
         
    for (let j = 1; j < itemStr.length; j++) {
      myString += itemStr[j];
    }
    return myString;
  });
  
  return camelCaseArray.join('');
  
}
