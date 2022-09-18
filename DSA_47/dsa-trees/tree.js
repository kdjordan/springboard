/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  sumValues() {
    const theStack = [this]
    let total = 0
    while (theStack.length) {
      const curr = theStack.pop()
      total += curr.val
      for (let child of curr.children) {
        theStack.push(child)
      }
    }
    return total
  }

  countEvens() {
    const theStack = [this]
    let count = 0
    while (theStack.length) {
      const curr = theStack.pop()
      if (curr.val % 2 === 0) {
        count++
      }
      for (let child of curr.children) {
        theStack.push(child)
      }
    }
    return count
  }

  numGreater(lowerBound) {
    const theStack = [this]
    let count = 0
    while (theStack.length) {
      const curr = theStack.pop()
      if (curr.val > lowerBound) {
        count++
      }
      for (let child of curr.children) {
        theStack.push(child)
      }
    }
    return count
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(this.root) {
      return this.root.sumValues()
    } else {
      return 0
    }
  }
  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (this.root) {
      return this.root.countEvens()
    } else {
      return 0
    }
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (this.root) {
      return this.root.numGreater(lowerBound)
    } else {
      return 0
    }
  }
}

module.exports = { Tree, TreeNode };
