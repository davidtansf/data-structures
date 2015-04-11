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
