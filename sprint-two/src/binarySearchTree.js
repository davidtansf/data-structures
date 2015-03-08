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
  console.log('hello');

  function letsCompare(newly, current) {
    console.log('newval: ',newly.value);
    console.log('currentval: ',current.value);
    if (newly.value < current.value) {
      console.log('goes here');
      return goLeft(newly, current);
    } else {
      console.log('doesnt go');
      return goRight(newly,current);
    } 
  }  

  function goLeft(newly, current) {
    console.log('goes here2');
    if (!current.left) {
      console.log('final');
      current.left = newly;
      console.log(newly);
    } else {
      current = current.left;
      return letsCompare(newly,current);
    }
  }

  function goRight(newly, current) {
    if (!current.right) {
      current.right = newly;
    } else {
      current = current.right;
      return letsCompare(newly,current);
    }
  }
  
  letsCompare(node,this);

};
  
binaryMethods.contains = function(value) {

};

binaryMethods.depthFirstLog = function() {
};