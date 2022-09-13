/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val)

    if (this.size === 0)  {
      this.first = newNode
      this.last = newNode
      this.size++
    } else {
      let oldFirst = this.first
      newNode.next = oldFirst
      this.first = newNode
      this.size++
    }

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      throw new Error('Stack is empty')
    }
    let oldFirst = this.first
    this.first = oldFirst.next
    this.size--
    return oldFirst.val
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) return true
    return false
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)

console.log(stack)


module.exports = Stack;
