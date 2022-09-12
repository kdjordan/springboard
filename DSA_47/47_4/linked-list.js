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
    let newNode = new Node(val)

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
   return this.removeAt(this.length - 1)

  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //check for boundary error first = will throw Error if idx out of range
    this._checkIdx(idx)

    return this._get(idx).val  
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    this._checkIdx(idx)

    this._get(idx).val = val

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Index out of range')
    }
    //handle adding to front or end of list
    if (idx === 0) return this.unshift(val)
    if (idx === this.length) return this.push(val)

    let prev = this._get(idx - 1)

    let newNode = new Node(val)
    newNode.next = prev.next
    prev.next = newNode

    this.length++
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    //check for boundary error
    this._checkIdx

    //handle index = 0
    if (idx === 0) {
      let val = this.head.val
      this.head = this.head.next
      this.length--
      if (this.length < 2) this.tail = this.head
      return val
    }

    let prev = this._get(idx - 1)

    //handle removing last node
    if (idx === this.length - 1) {
      let val = prev.next.val
      prev.next = null
      this.tail = prev
      this.length--
      return val
    }

    let val = prev.next.val
    prev.next = prev.next.next 
    this.length--
    return val
  }

  /** average(): return an average of all values in the list */

  average() {
    //check for empty list
    if (this.length === 0) return 0

    let total = 0
    let count = 0
    let cur = this.head

    while (count < this.length) {
      total += cur.val
      count++
      cur = cur.next
    }
    return total / count 
  }
}


module.exports = LinkedList;
