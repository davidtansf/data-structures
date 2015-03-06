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
		var node = new treeNode;
    node.value = value;

		array[array.length] = node;

	},

	contains: function(target){
	}

};

var treeNode = function(value){
  var node = {};

  node.value = value;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
