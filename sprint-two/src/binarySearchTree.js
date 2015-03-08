var BinarySearchTree = function(value){
  
  var newBinary = {};

  newBinary.left = null;
  newBinary.right = null;
  newBinary.value = value;

  _.extend(newBinary,binaryMethods);
  return newBinary;

};

var binaryMethods = {}; 

binaryMethods.insert = function(value) {
  var node = new BinarySearchTree(value);
  
  letsCompare(node,this); // starts resursive process

  function letsCompare(newly, current) {
    if (newly.value < current.value) {
      return goLeft(newly, current);
    } else if (newly.value > current.value) {
      return goRight(newly,current);
    }
    else {
      return "Already Exists";
    }
  }  

  function goLeft(newly, current) {
    if (!current.left) {
      current.left = newly;
    } else {
      current = current.left;
      return letsCompare(newly,current); // recursive
    }
  }

  function goRight(newly, current) {
    if (!current.right) {
      current.right = newly;
    } else {
      current = current.right;
      return letsCompare(newly,current); // recursive
    }
  }

};
  
binaryMethods.contains = function(value) {

};

binaryMethods.depthFirstLog = function() {
};