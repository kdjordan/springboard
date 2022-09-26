class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }
    
    let currNode = this.root

    while (true) {
      if (val < currNode.val) {
        if(currNode.left === null) {
          currNode.left = new Node(val)
          return this
        } else {
          currNode = currNode.left
        }
      } else if (val > currNode.val) {
        if(currNode.right === null) {
          currNode.right = new Node(val)
          return this
        } else {
          currNode = currNode.right
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }
  
    if (val > node.val) {
      if (node.right === null) {
        node.right = new Node(val)
        return this
      }
      return this.insertRecursively(val, node.right)
    } else {
      if (node.left === null) {
        node.left = new Node(val)
        return this
      }
      return this.insertRecursively(val, node.left)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    let currNode = this.root

    while (true) {
      if (currNode.val === val) return currNode
      if (currNode.right === null && currNode.left === null) return

      currNode = val > currNode.val ? currNode.right : currNode.left
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode = this.root) {
    if (this.root === null) return

    if (val > currNode.val) {
      if (currNode.right === null) return
      return this.findRecursively(val, currNode.right)
    } else if (val < currNode.val) {
      if (currNode.left === null) return
      return this.findRecursively(val, currNode.left)
    }
    return currNode
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let currNode = this.root
    let arr = []

    function traverse(node) {
      arr.push(node.val)
      if (node.left !== null) traverse(node.left)
      if (node.right !== null) traverse(node.right)
    }

    traverse(currNode)
    return arr
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let currNode = this.root
    let arr = []

    function traverse(node) {
      if (node.left !== null) traverse(node.left)
      arr.push(node.val)
      if (node.right !== null) traverse(node.right)
    }

    traverse(currNode)
    return arr


  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let currNode = this.root
    let arr = []

    function traverse(node) {
      if (node.left !== null) traverse(node.left)
      if (node.right !== null) traverse(node.right)
      arr.push(node.val)
    }

    traverse(currNode)
    return arr

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currNode = this.root
    let arr = []
    let queue = []

    queue.push(currNode)

    while (queue.length) {
      currNode = queue.shift()
      arr.push(currNode.val)
      if (currNode.left) [
        queue.push(currNode.left)
      ]
      if (currNode.right) {
        queue.push(currNode.right)
      }
    }

    return arr
 
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
