function firstDuplicateValue(array) {
    // Write your code here.
      let data = new Set();
      data.add(array[0])
      for(let i=1;i<array.length; i++){
          if(data.has(array[i])){
              return array[i];
          }
          data.add(array[i]);
      }
      
    return -1;
  }
  