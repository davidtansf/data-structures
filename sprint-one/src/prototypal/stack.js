var Stack = function() {

	var newStack = Object.create(stackMethods);
	newStack.getsize = 0;
	newStack.storage = {};

	return newStack;
};

stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.getsize] = value;
	this.getsize++;
}

stackMethods.pop = function() {
	
	if (this.getsize > 0) {
		this.getsize--;

		var temp = this.storage[this.getsize];

		delete this.storage[this.getsize];
		
		return temp;
	} 
}

stackMethods.size = function() {
	return this.getsize;
}
