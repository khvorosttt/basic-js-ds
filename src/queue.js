const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.top = null;
  }

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    if(!this.top){
      this.top = new ListNode(value);
      return this.top;
    }
    return this.enqueueValue(this.top, value);
  }

  enqueueValue(listNode, value) {
    if(!listNode.next) {
      listNode.next = new ListNode(value);
    } else {
      this.enqueueValue(listNode.next, value);
    }
    return listNode;
  }

  dequeue() {
    if(!this.top){
      return null;
    }
    let topElem = this.top.value;
    if(this.top.next) {
      this.top = this.top.next;
    } else {
      this.top = null;
    }
    return topElem; 
  }
}

module.exports = {
  Queue
};
