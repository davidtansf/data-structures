var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);

    if (list.tail) {
      list.tail.next = node;
    }

    list.tail = node;

    if (!list.head) {
      list.head = node;
    }

  };

  list.removeHead = function(){

    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){

    var node = list.head;
    // have to create another reference to list.head without destroying the list;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }

    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
