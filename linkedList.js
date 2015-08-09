function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.push = function(value) {
  if (this.head === null) {
    this.head = new Node(value);
    this.tail = this.head;
  } else {
    var newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.pop = function() {
  this.tail = null;
};

LinkedList.prototype.shift = function() {
  this.head = this.head.next;
};

LinkedList.prototype.unshift = function(value) {
  var temp = this.head;
  this.head = new Node(value);
  this.head.next = temp;
};

LinkedList.prototype.deleteNode = function(value) {
  var currentNode = this.head;
  var previousNode = null;

  while (currentNode !== null) {
    if (currentNode.value === value) {
      previousNode.next = currentNode.next;
      currentNode.next = null;
      return;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  return -1;
};

LinkedList.prototype.findNode = function(value) {
  var node = this.head;
  while (node !== null) {
    if (node.value === value) {
      return node;
    }
    node = node.next;
  }
  return -1;
};
