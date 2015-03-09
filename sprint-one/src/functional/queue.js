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

// var Queue = function() {

//   var someInstance = {};

//   var storage = {};
//   var size = 0;
//   var next = 0;

//   someInstance.enqueue = function (value) {
//     storage[size] = value;
//     size++;
//   };
//   someInstance.dequeue = function () {
//     if (next !== size) {
//       var item = storage[next];
//       delete storage[next];
//       next++;
//       return item;
//     }
//   };
//   someInstance.size = function () {
//     return size - next;
//   }

//   return someInstance;

// };