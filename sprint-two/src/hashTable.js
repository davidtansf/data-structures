var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index) || [];

  for (var i = 0; i < storage.length; i++) {
    if (storage[i][0] === [k]) {
      storage[i][1] = v;
      return;
    }
  }

  storage.push([k,v]);
  this._storage.set(index,storage);

};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storage = this._storage.get(index) || [];

  for (var i = 0; i < storage.length; i++) {
    if (storage[i][0] === k) {
      return storage[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var storage = this._storage.get(index);

  if (!storage) {
    return null;
  }

  for (var i = 0; i < storage.length; i++) {
    if (storage[i][0] === key) {
      return storage.splice(i,1);
    }
  }
  return null;
};

