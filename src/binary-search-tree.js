const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    if(!this._root) {
      this._root = new Node(data);
    } else {
      this.addSubTree(this._root, data);
    }
  }

  addSubTree(currentSubTree, data) {
    if(data <= currentSubTree.data){
      if(currentSubTree.left === null){
        currentSubTree.left = new Node(data);
      } else {
        this.addSubTree(currentSubTree.left, data);
      }
    } else {
      if(currentSubTree.right === null){
        currentSubTree.right = new Node(data);
      } else {
        this.addSubTree(currentSubTree.right, data);
      } 
    }
  }

  has(data) {
    return this.hasSubTree(this._root, data);
  }

  hasSubTree(currentSubTree, data) {
    if(!currentSubTree) {
      return false;
    } else {
      if(currentSubTree.data === data){
        return true;
      } else {
        if(data < currentSubTree.data){
          return this.hasSubTree(currentSubTree.left, data);
        } else {
          return this.hasSubTree(currentSubTree.right, data);
        }
      }
    }
  }

  find(data) {
    return this.findSubTree(this._root, data);
  }

  findSubTree(currentSubTree, data) {
    if(currentSubTree === null) {
      return null;
    } else {
      if(currentSubTree.data === data){
        return currentSubTree;
      } else {
        if(data < currentSubTree.data){
          return this.findSubTree(currentSubTree.left, data);
        } else {
          return this.findSubTree(currentSubTree.right, data);
        }
      }
    }
  }

  remove(data) {
    return this.removeNode(this._root, data);
  }

  removeNode(currentSubTree, data) {
    if(currentSubTree === null) {
      return null;
    } else {
      if(currentSubTree.data === data){
        if(!currentSubTree.left && !currentSubTree.right) {
          currentSubTree = null;
        } else if(!currentSubTree.left) {
          currentSubTree = currentSubTree.right;
        } else if(!currentSubTree.right) {
          currentSubTree = currentSubTree.left;
        } else {
          let minRightNode =  this.minNode(currentSubTree.right);
          currentSubTree.data = minRightNode.data;
          currentSubTree.right = this.removeNode(currentSubTree.right, minRightNode.data);
        }
      } else {
        if(data < currentSubTree.data){
          currentSubTree.left = this.removeNode(currentSubTree.left, data);
        } else {
          currentSubTree.right = this.removeNode(currentSubTree.right, data);
        }
      }
    }
    return currentSubTree;
  }

  min() {
    return this.minNode(this._root).data;
  }

  minNode(currentSubTree) {
    if(!currentSubTree){
      return null;
    }
    let currentNode = currentSubTree;
    while(currentNode.left) {
       currentNode = currentNode.left;
    }
    return currentNode;
  }

  max() {
    return this.maxNode(this._root).data;
  }

  maxNode(currentSubTree) {
    if(!currentSubTree){
      return null;
    }
    let currentNode = currentSubTree;
    while(currentNode.right) {
       currentNode = currentNode.right;
    }
    return currentNode;
  }
}

module.exports = {
  BinarySearchTree
};