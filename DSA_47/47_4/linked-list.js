/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** utility class to return a node at an index => DRY as this code will be used in multiple places **/
  _get(idx) {
    let cur = this.head
    let count = 0
    while (cur !== null && count != idx) {
      count++
      cur = cur.next
    }
    return cur
  }
  /** utility class to check if index is in range => DRY as this code will be used in multiple places **/
  _checkIdx(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error ('Index out of range')
    }
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = newNode(val)

    //handle adding first node
    if (this.head === null) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    //if only one node present 
    if (this.length === 0) this.tail = this.head

    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
   

  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //check for boundary error first = will throw Error if idx out of range
    this._checkIdx(idx)
      
    console.log('made it ', idx)
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //check for boundary error
    if (idx >= this.length || idx < 0) {
      throw new Error ('Index out of range')
    }

    //handle index = 0
    if (idx === 0) {
      let val = this.head.val
      this.head = this.head.next
      this.length--
      return val
    }

    //handle removing last node
    if (idx === this.length - 1) {
      let val = this.tail.val
      return this.tail
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

let theList = new LinkedList([1,2,3])
console.log(theList)
// theList.pop()

module.exports = LinkedList;
