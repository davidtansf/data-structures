var Queue = function() {
	this.getSize = 0;
	this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  
  var temp = this.getSize;

  for (var i in this.storage) {
  	this.storage[temp] = this.storage[temp-1];
  	temp --;
  }

  this.storage[0] = value;
  this.getSize++;
}

Queue.prototype.dequeue = function() {
	if (this.getSize > 0) {
		this.getSize --;
		var item = this.storage[this.getSize];
		delete this.storage[this.getSize];
		return item;
	}
}

Queue.prototype.size = function() {
	return this.getSize;
}

var Starbucks = Queue();
var Subway = Queue();
