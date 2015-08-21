var Queue = function(){
  this._storage = {};
  this._start = 0;
  this._end = 0;
};

Queue.prototype.enqueue = function(value){
  this._storage[this._end] = value;
  this._end++;
};

Queue.prototype.dequeue = function(){
  if (this._start < this._end) {
    var temp = this._storage[this._start];
    delete this._storage[this._start];
    this._start++;
    return temp;
  }
};

Queue.prototype.size = function(){
  return this._end - this._start;
};

/*

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

*/
