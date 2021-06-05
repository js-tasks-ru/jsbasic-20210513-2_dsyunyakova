function showSalary(users, age) {
  let str = '';
  for (let user of users) {
    
    if (user.age <= age) {
      str += `${user.name}, ${user.balance}\n`;
    }
  }
  return str.trim();
}
