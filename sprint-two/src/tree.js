var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {

  addChild: function(value) {
    var node = Tree(value);
    this.children.push(node);
  },

  contains: function(target) { // true recursive solution with loop

    if (this.value === target) {
      return true;
    }

    var nodes = this.children;

    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].contains(target)) {
        return true;
      }
    }

    return false;
  },

/*
  contains: function(target) { // true recursive solution, with _.each

    var result = false;

    if (this.value === target) {
      result = true;
    }

    var nodes = this.children;

    _.each(nodes, function(node) {
      if (node.contains(target)) {
        return result = true;
      }
    });

    return result;
  }

*/

/*
  contains: function(target) {  // sub recursive solution
    var result = false;

    var recursive = function(node) {
      if (node.value === target) {
        return result = true;
      }

      for (var i = 0; i < node.children.length; i++) {
        recursive(node.children[i]);
      }
    };

    recursive(this);

    return result;
  }
*/

/*
  contains: function(target) { // iterative solution using queue

  var index = 0;
  var queue = [this];

  while(index < queue.length) {
    if (queue[index].value === target) {
      return true;
    }
    queue[index].children.forEach(function(node){
      queue.push(node);
    });
    index++;
  }

  return false;

  }
*/
};
