

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = new Graph();
};

Graph.prototype.contains = function(node){
  if (this.nodes[node] === undefined) {
    return false;
  }
  return true;
};

Graph.prototype.removeNode = function(node){

  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.nodes[fromNode][toNode] === true) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];

};

Graph.prototype.forEachNode = function(cb){
  for (var node in this.nodes) {
    cb(node);
  }
};