function isEmpty(obj) {
  let sum = 0;
  for (let i in obj) {
    sum++;
  }
  if (sum === 0) return true;
  return false;
}
