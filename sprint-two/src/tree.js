var Tree = function(value) {
  var newTree = {};

// http://stackoverflow.com/questions/6163532/why-cant-i-set-properties-of-an-array-element-a-string-in-javascript
  newTree.value = value;
  newTree.children = [];
 
  _.extend(newTree,treeMethods);
  return newTree;

};




var treeMethods = {

  addChild: function(value){
    this.children[this.children.length] = new Treenode(value);

  },

  contains: function(target) {
    result = false;
    this.recursive(target);
    return result;
  }, 

  recursive: function(target) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        result = true;
      }
      this.children[i].recursive(target);
    }  
  }
};

var Treenode = function(value){
  var node = {};
  node.value = value;
  node.children = [];
  _.extend(node,treeMethods);
  return node;
};
