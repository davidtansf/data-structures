var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {

	addChild: function(value){
		var array = this.children;
		var node = new Tree(value);
    node.value = value;
		array[array.length] = node;

	},

	recursive: function(target) {
		console.log(result);
		for(var i = 0; i < this.children.length; i++) {
			if (this.children[i].value === target) {result = true;}
			this.children[i].recursive(target);

		}
	},


	contains: function(target){
		result = false;
		this.recursive(target);
		return result;
	}

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
