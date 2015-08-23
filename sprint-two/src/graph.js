

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){

  this.nodes[node] = [];
};

Graph.prototype.contains = function(node){
  for (var val in this.nodes) {
    if (val === node) {
      return true;
    }
  }
  return false;
};

Graph.prototype.removeNode = function(node){

  for (var i = 0; i < this.nodes[node].length; i++) { // first remove edges
    this.removeEdge(node, i);
  }
  for (var val in this.nodes) {
    if (val === node) {
      delete this.nodes[node];
      return;
    }
  }
  return null;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.nodes[fromNode].indexOf(toNode) !== -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.nodes[fromNode] && this.nodes[toNode]) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var spliceIndex = this.nodes[fromNode].indexOf(toNode);

  if (spliceIndex !== -1) {
    this.nodes[fromNode].splice(spliceIndex, 1)
  };

  spliceIndex = this.nodes[toNode].indexOf(fromNode);

  if (spliceIndex !== -1) {
    this.nodes[toNode].splice(spliceIndex, 1)
  };
};

Graph.prototype.forEachNode = function(cb){
  for (node in this.nodes) {
    cb(node);
  }
};


