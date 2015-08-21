var Stack = function(){
  var someInstance = {};
  var storage = {};
  var size = 0;

  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
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

/*
var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance._size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    someInstance.storage[someInstance._size] = value;
    someInstance._size++;
  };

  someInstance.pop = function(){
    if(someInstance._size) {
      someInstance._size--;
      var temp = someInstance.storage[someInstance._size];
      delete someInstance.storage[someInstance._size];
      return temp;
    }
  };

  someInstance.size = function(){
    return someInstance._size;
  };

  return someInstance;
};

*/
