function filterRange(arr, a, b) {
  let newArray = arr.filter(function(item){
    return item >= a && item <= b;
  })
  
  return newArray;
}
