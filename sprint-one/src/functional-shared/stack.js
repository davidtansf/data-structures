var Stack = function() {
  var newStack = {};
  newStack.getSize = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {

  push: function (value) {
    this.storage[this.getSize] = value;
    this.getSize++;
  },

  pop: function() {
  	if (this.getSize > 0) {
  		this.getSize--;
  		var item = this.storage[this.getSize];
  		delete this.storage[this.getSize];
  		return item;
  	}
  },

  size: function() {
  	return this.getSize;
  }

};
