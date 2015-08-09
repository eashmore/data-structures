function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.add = function(value) {
  if (this.root === null) {
    this.root = new Node(value);
  } else {
    var currentNode = this.root;
    var parent = this.root;
    while (currentNode !== null) {
      if (value > currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.right;
      } else if (value < currentNode.left) {
        parent = currentNode;
        currentNode = currentNode.left;
      } else {
        return -1;
      }
    }

    currentNode = new Node(value);
    currentNode.parent = parent;
  }
};

BinarySearchTree.prototype.find = function(value) {
  var currentNode = this.root;
  while (currentNode !== null) {
    if (currentNode.value === value) {
      return currentNode;
    }

    if (value > currentNode.value) {
      currentNode = currentNode.right;
    } else if (value < currentNode.left) {
      currentNode = currentNode.left;
    }
  }

  return -1;
};

// BinarySearchTree.prototype.leftRotate = function(parent) {
//   var newParent = parent.right;
//   newParent.parent = parent.parent;
//   parent.parent = newParent;
//
//   parent.right = newParent.left;
//   newParent.left = parent;
// };
//
// BinarySearchTree.prototype.rightRotate = function(parent) {
//   var newParent = parent.left;
//   newParent.parent = parent.parent;
//   parent.parent = newParent;
//
//   parent.left = newParent.right;
//   newParent.right = parent;
// };

BinarySearchTree.prototype.remove = function(value) {
  var node = this.find(value);
  if (node === -1) {
    return node;
  }
  var currentNode;
  if (node.parent.right === node) {
    node.parent.right = node.left;
    currentNode = node.left;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    currentNode.right = node.right;
    node.right.parent = currentNode;
  } else if (node.parent.left === node) {
    node.parent.left = node.right;
    currentNode = node.right;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    currentNode.left = node.left;
    node.left.parent = currentNode;
  }
  return node;
};

BinarySearchTree.prototype.toArray = function() {};
