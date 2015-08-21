
var Stack = function() {
  var someInstance = {
    _storage: {},
    _size: 0
  };
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value){
    this._storage[this._size] = value;
    this._size++;
  },

  pop: function(){
    if(this._size) {
      this._size--;
      var temp = this._storage[this._size];
      delete this._storage[this._size];
      return temp;
    }
  },

  size: function(){
    return this._size;
  }
};

/* // preferred way (but doesn't pass test)
// methods stored as property of Stack function, instead of creating a new global variable

var Stack = function() {
  var someInstance = {
    _storage: {},
    _size: 0
  };
  _.extend(someInstance, Stack.methods);

  return someInstance;
};

Stack.methods = {
  push: function(value){
    this._storage[this._size] = value;
    this._size++;
  },

  pop: function(){
    if(this._size) {
      this._size--;
      var temp = this._storage[this._size];
      delete this._storage[this._size];
      return temp;
    }
  },

  size: function(){
    return this._size;
  }
};

*/

