var Set = function(){
  
  var set = Object.create(setPrototype);
  set.storage = [];
  return set;

};

var setPrototype = {

	add: function(item) {
    var found = 0;
    for (var i = 0; i < this.storage.length; i++) {
    	if (item === this.storage[i]) {
    		found = 1;
    		break;
    	}
    }	
    if (!found || this.storage.length === 0) {
    	this.storage.push(item);
    }
	},
    
	contains: function(item) {
    for (var i = 0; i < this.storage.length; i++) {
      if (item === this.storage[i]) {
      	 return true;
      }  
	  }
	  return false;
	},  

	remove: function(item) {
    for (var i = 0; i < this.storage.length; i++) {
      if (item === this.storage[i]) {
      	 delete this.storage[i];
      }  
	  }
	}
};
