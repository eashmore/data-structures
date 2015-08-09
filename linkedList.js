function linkedNode(value) {
  this.value = value;
  this.next = null;
}

linkedNode.prototype.value = function() {
  return this.value;
};

linkedNode.prototype.nextNode = function() {
  return this.next;
};

function linkedList() {
  this.head = null;
  this.tail = null;
}

linkedList.prototype.push = function(value) {
  if (this.head === null) {
    this.head = new linkedNode(value);
    this.tail = this.head;
  } else {
    var newNode = new linkedNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

linkedList.prototype.pop = function() {
  this.tail = null;
};

linkedList.prototype.shift = function() {
  this.head = this.head.next;
};

linkedList.prototype.unshift = function(value) {
  var temp = this.head;
  this.head = new linkedNode(value);
  this.head.next = temp;
};

linkedList.prototype.deleteNode = function(value) {
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

linkedList.prototype.findNode = function(value) {
  var node = this.head;
  while (node !== null) {
    if (node.value === value) {
      return node;
    }
    node = node.next;
  }
  return -1;
};
