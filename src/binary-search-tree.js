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
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  removeNode(currentSubTree, data) {
    if(currentSubTree === null) {
      return null;
    } else {
      if(currentSubTree.data === data){
        if(!currentSubTree.left && !currentSubTree.right) {
          currentSubTree = null;
          return currentSubTree;
        } else if(!currentSubTree.left) {
          currentSubTree = currentSubTree.right;
        } else if(!currentSubTree.right) {
          currentSubTree = currentSubTree.left;
        } else {
          // currentSubTree = 
        }
      } else {
        if(data < currentSubTree.data){
          return this.removeNode(currentSubTree.left, data);
        } else {
          return this.removeNode(currentSubTree.right, data);
        }
      }
    }
  }

  min() {
    return this.minNode().data;
  }

  minNode() {
    if(!this._root){
      return null;
    }
    let currentNode = this._root;
    while(currentNode.left) {
       currentNode = currentNode.left;
    }
    return currentNode;
  }

  max() {
    return this.maxNode().data;
  }

  maxNode() {
    if(!this._root){
      return null;
    }
    let currentNode = this._root;
    while(currentNode.right) {
       currentNode = currentNode.right;
    }
    return currentNode;
  }
}

module.exports = {
  BinarySearchTree
};