var Stack = function() {
	this.getSize = 0;
	this.storage = {};
};

Stack.prototype.push = function(value) {
	this.storage[this.getSize] = value;
	this.getSize++;
}

Stack.prototype.pop = function() {
  if (this.getSize > 0) {
		this.getSize--;
		var item = this.storage[this.getSize];
		delete this.storage[this.getSize];
		return item;
	}	

}

Stack.prototype.size = function() {
	return this.getSize;
}