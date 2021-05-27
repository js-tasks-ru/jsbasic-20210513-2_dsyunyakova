function sumSalary() {
  
  let sum = 0;
  let salary = arguments[0];
  
  for (let i in salary) {
    if (Number.isFinite(salary[i])) sum += salary[i];
  }
  return sum;
}
