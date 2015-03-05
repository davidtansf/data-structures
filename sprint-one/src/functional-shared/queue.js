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
  console.log('hellothere');
	return this.getSize;

}


};



