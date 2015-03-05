var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  
  // Implement the methods below

  someInstance.enqueue = function(value){
    var temp = size;
    for (var prop in storage) {
      storage[temp] = storage[temp-1];
      temp --;
      
    }
    size++;
    storage[0] = value;
    
  };
  someInstance.dequeue = function(){
    if (size > 0) {
    size --;

    var item = storage[size];  
    
    delete storage[size]; 
    
    return item;
    }               
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
