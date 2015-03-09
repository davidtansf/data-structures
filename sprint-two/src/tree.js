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
    this.children[this.children.length] = new Tree (value); //why don't you have to add new?

  },

  contains: function(target) {
    window.result = false; // intentional declaration of global variable
    this.recursive(target);
    var temp = result;
    delete window.result;
    return temp;
  }, 

  recursive: function(target) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === target) {
        return result = true;
      }
      this.children[i].recursive(target);
    }  
  }

};

/*
 var treeMethods = {

   addChild: function(value){
    this.children[this.children.length] = Tree (value); //why don't you have to add new?

  },

  contains: function (target) {
    var result = false;
    var searchNode = function (node) {
      if (node.value === target) {
        result = true;
        return;
      }
      for (var i = 0; i < node.children.length; i++) {
        searchNode(node.children[i]);
      }
    }  
    searchNode(this);
    return result;
  }

};
*/
