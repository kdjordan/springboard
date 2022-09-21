/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }


}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0

    function minDepthRecursion(node) {
      if (node.left === null && node.right === null) return 1
      if (node.left === null) return minDepthRecursion(node.right) + 1
      if (node.right === null) return minDepthRecursion(node.left) + 1

      return minDepthRecursion(node.left) < minDepthRecursion(node.right) ? minDepthRecursion(node.left) + 1: minDepthRecursion(node.right) + 1
      }
      
      return minDepthRecursion(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0
    
    function maxDepthRecursion(node) {
      if (node.left === null && node.right === null) return 1
      if (node.left === null) return maxDepthRecursion(node.right) + 1
      if (node.right === null) return maxDepthRecursion(node.left) + 1 

      return maxDepthRecursion(node.left) > maxDepthRecursion(node.right) ? maxDepthRecursion(node.left) + 1: maxDepthRecursion(node.right) + 1
    }

    return maxDepthRecursion(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let total = 0

    function sumPath(node) {
      if (node === null) return 0
      let rightTotal =  sumPath(node.right)
      let leftTotal =  sumPath(node.left)
      total = Math.max(total, node.val + rightTotal + leftTotal)
      return Math.max(0, leftTotal + node.val, rightTotal + node.val)
    }

    sumPath(this.root)
    return total
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    
    if (!this.root) return null
    
    let stack = [this.root]
    let currSmall = null
    
    while (stack.length) {
      let currNode = stack.pop()
      let currVal = currNode.val 
      let higherThanLowerBound = currVal > lowerBound
      let reassignClosest = currVal < currSmall || currSmall === null

      if (higherThanLowerBound && reassignClosest) {
        currSmall = currVal
      }
      if (currNode.left) stack.push(currNode.left)
      if (currNode.right) stack.push(currNode.right)
    }

    return currSmall

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}




  
module.exports = { BinaryTree, BinaryTreeNode };
