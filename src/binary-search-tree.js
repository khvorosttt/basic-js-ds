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
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
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

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};