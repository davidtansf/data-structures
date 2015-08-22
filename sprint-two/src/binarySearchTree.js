var BinarySearchTree = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {

  var node = new BinarySearchTree(value);

  if (value < this.value && this.left === null) {
    this.left = node;
    return;
  }
  if (value > this.value && this.right === null) {
    this.right = node;
    return;
  }
  if (value < this.value) {
    this.left.insert(value);
  }
  if (value > this.value) {
    this.right.insert(value);
  }

};

BinarySearchTree.prototype.contains = function(value) {

  if (this.value === value) {
    return true;
  }
  if (value < this.value && this.left === null) {
    return false;
  }
  if (value > this.value && this.right === null) {
    return false;
  }
  if (value < this.value) {
    return this.left.contains(value);
  }
  if (value > this.value) {
    return this.right.contains(value);
  }

};

BinarySearchTree.prototype.depthFirstLog = function(callback) {

  callback(this.value);

  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }

};

