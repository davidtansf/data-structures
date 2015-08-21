var Queue = function(){

  var someInstance = Object.create(queueMethods);

  someInstance._storage = {};
  someInstance._start = 0;
  someInstance._end = 0;

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
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.getsize = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {

	enqueue: function (value) {

	  var temp = this.getsize;

	  for (var i in this.storage) {
	    this.storage[temp] = this.storage[temp-1];
	    temp --;
	  }

	  this.storage[0] = value;
	  this.getsize++;



	},

	dequeue: function () {
	  if (this.getsize > 0) {
	   this.getsize--;
	   var item = this.storage[this.getsize];
	   delete this.storage[this.getsize];
	   return item;
	  }
	},

	size: function () {
		return this.getsize;

}

};
*/
