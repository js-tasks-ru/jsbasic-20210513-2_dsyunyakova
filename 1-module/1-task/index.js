function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return 1;
  } else {
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  }
  return result;
}