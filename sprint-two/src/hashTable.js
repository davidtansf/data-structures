var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var value = [k,v];
  var temp = this._storage.get(i);

  if (!temp) { // if nothing in array element, add
    var combinedArray = [];
    combinedArray.push(value);
    this._storage.set(i, combinedArray);
  } else { // something already exists, combine to create duplo
    temp.push(value);
    //this._storage.set(i, temp);
  }
};

HashTable.prototype.retrieve = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);

  if (!temp) {
    return null;
  }  
  // temp = _.flatten(temp);
  for (var x = 0; x < temp.length; x++) {
    if (temp[x][0] === k) {
      return temp[x][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  
  if (!temp) {
    return null;
  }

  for (var x = 0; x < temp.length; x++) {
    if (temp[x][0] === k) {
      var returned = temp[x][1];
      temp.splice(x,1);
      return returned;
    }
  }

  return null;

 // this._storage.set(i, temp); redundant, passed by reference

};
