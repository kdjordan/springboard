/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  _get(idx) {
    if (idx === 0) {
      return this.first
    }
    if (idx === this.size) {
      return this.last
    }
    if (idx > 0 && idx < this.size) {
      let cur = this.first
  
      while (cur.next != null) {
        cur = cur.next
      }
      return cur
    }

  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val)

    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      let oldLast = this._get(this.size)
      oldLast.next = newNode
      this.last = newNode
    }

    this.size++
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error('Queue is empty')
    }

    let firstNode = this.first
    this.size--

    if (this.size === 0) {
      return firstNode.val
    } else {
      this.first = firstNode.next
      return firstNode.val
    }


  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true
    return false
  }
}


module.exports = Queue;
