var Queue = function(){
  var someInstance = {
    _storage: {},
    _start: 0,
    _end: 0
  };
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

  enqueue: function(value){
    this._storage[this._end] = value;
    this._end++;
  },

  dequeue: function(){
    if (this._start < this._end) {
      var temp = this._storage[this._start];
      delete this._storage[this._start];
      this._start++;
      return temp;
    }
  },

  size: function(){
    return this._end - this._start;
  }
};

/*
var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = {};
  newQueue.getSize = 0;
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {

  enqueue: function (value) {
    var temp = this.getSize;
    for (var i in this.storage) {
      this.storage[temp] = this.storage[temp-1];
      temp --;
    }

    this.storage[temp] = value;
    this.getSize++;
  },

  dequeue: function() {
  	if (this.getSize > 0) {
  		this.getSize -- ;
  		var item = this.storage[this.getSize];
  		delete this.storage[this.getSize];
  		return item;
  	}
  },

  size: function() {
  	return this.getSize;
  }

};
*/

