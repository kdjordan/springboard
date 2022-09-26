class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    if (!this.nodes.has(vertex)) {
      this.nodes.add(vertex)
    }
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let node of vertexArray) {
      if (!this.nodes.has(node)) {
        this.nodes.add(node)
      }
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    if (!v1.adjacent.has(v2)) v1.adjacent.add(v2)
    if (!v2.adjacent.has(v1)) v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    if (v1.adjacent.has(v2)) v1.adjacent.delete(v2)
    if (v2.adjacent.has(v1)) v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    if (this.nodes.has(vertex)) {
      this.nodes.delete(vertex)
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    if(!this.nodes.has(start)) return
    let arr = []
    let stack = [start]
    let seen = new Set()
    seen.add(start)

    while (stack.length) {
      let curr = stack.pop()
      arr.push(curr.value)

      for (let node of curr.adjacent) {
        if (!seen.has(node)) {
          stack.push(node)
          seen.add(node)
        }
      }
    }
    return arr
      
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {}
}

module.exports = {Graph, Node}