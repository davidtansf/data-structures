var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {

  add: function(item) {
    this._storage[item] = true;
  },

  contains: function(item) {
    return !!this._storage[item];
  },

  remove: function(item) {
    delete this._storage[item];
  }
};
