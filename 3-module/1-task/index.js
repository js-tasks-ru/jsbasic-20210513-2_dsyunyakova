function namify(users) {
  let arr = users.map(function(item){
    for (let i in item) {
      return item[i];  
    }
    
  });
    
  return arr;
}
