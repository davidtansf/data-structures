
var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var created = Node(value);
    if (!this.head) {
      this.head = created;
    }
    if (this.tail) {
      this.tail.next = created;
    }
    this.tail = created;
  };

  list.removeHead = function(){
    var temp = this.head;
    this.head = this.head.next;

    return temp.value;
  };

  list.contains = function(target){
    while (list.head) {
      if (list.head.value === target) {
        return true;
      }
      list.head = list.head.next
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



// var LinkedList = function(){
//   var list = {};
//   list.head = null;
//   list.tail = null;
//   list.length = 0;

//   list.addToTail = function(value){
//     var newnode = new Node(value);
//     list.length++;
//     if (list.head === null) {
//       list.head = newnode;
//       list.tail = newnode;
//     } else {
//       list.tail.next = newnode;
//       list.tail = newnode;
//     }

//   };

//   list.removeHead = function(){
//     var temp = list.head;
//     list.head = list.head.next;
//     list.length--;
//     temp.next = null;
//     return temp.value;

//   };

//   list.contains = function(target){
//     if (list.head.value === target) {
//       return true;
//     } else if (list.head.next === null) {
//       return false;
//     } else {
//       return recursive (list.head.next);
//     }

//     function recursive (node) {
//       if (node.value === target) {return true} 
//       else if (node.value === list.tail.value) {
//         if (node.value === target) {return true} 
//         else {return false}
//       } 
//       else {
//         recursive(node.next)} 
//     }
//   };

//   return list;
// };

// var Node = function(value){
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };
