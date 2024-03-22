/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0;
    }
    const numList = [this.root];
    let sum = 0;

    while (numList.length > 0) {
      let treeNode = numList.shift()

      for (let child of treeNode.children) {
        numList.push(child);
      }

      sum += treeNode.val;
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) {
      return 0;
    }
    const numList = [this.root];
    let res = 0;

    while (numList.length > 0) {
      let treeNode = numList.shift()

      for (let child of treeNode.children) {
        numList.push(child);
      }

      if (treeNode.val%2 === 0) {
        res++;
      }
    }

    return res;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0;
    }
    const numList = [this.root];
    let res = 0;

    while (numList.length > 0) {
      let treeNode = numList.shift()

      for (let child of treeNode.children) {
        numList.push(child);
      }

      if (treeNode.val > lowerBound) {
        res++;
      }
    };
    return res;
}
}

module.exports = { Tree, TreeNode };
