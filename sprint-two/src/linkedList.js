var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value){
    var newnode = new Node(value);
    list.length++;
    if (list.head === null) {
      list.head = newnode;
      list.tail = newnode;
    } else {
      list.tail.next = newnode;
      list.tail = newnode;
    }



    // if (list.tail !== null) {list.tail.next = value}
    
    // list.tail = new Node(value);


    // if (list.head === null) {list.head = list.tail}
    //list.tail = value;
    // console.log('hello' + size);
    // list[size] = value;
    // list.tail = list[size]; 
    // size++;
  };

  list.removeHead = function(){
    var temp = list.head;
    list.head = list.head.next;
    list.length--;
    temp.next = null;
    return temp.value;

  };

  list.contains = function(target){
    if (list.head.value === target) {
      return true;
    } else if (list.head.next === null) {
      return false;
    } else {
      return recursive (list.head.next);
    }

    function recursive (node) {
      console.log('hello');
      if (node.value === target) {return true} 
      else if (node.value === list.tail.value) {
        if (node.value === target) {return true} 
        else {return false}
      } 
      else {
        console.log();
        recursive(node.next)} 
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
