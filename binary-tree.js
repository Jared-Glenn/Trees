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
    if (!this.root) {
      return 0;
    }

    const numList = [ this.root, 0 ];
    let depthLevel = 1;

    while (numList.length > 1) {
      let treeNode = numList.shift();

      if (treeNode === 0) {
        depthLevel++;
        numList.push(0);
      }

      if (treeNode.left) {
        numList.push(treeNode.left);
      }
      if (treeNode.right) {
        numList.push(treeNode.right);
      }
      if (!treeNode.left && !treeNode.right) {
        return depthLevel;
      }
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) {
      return 0;
    }

    const numList = [ this.root, 0 ];
    let depthLevel = 1;

    while (numList.length > 1) {
      let treeNode = numList.shift();

      if (treeNode === 0) {
        depthLevel++;
        numList.push(0);
      }

      if (treeNode.left) {
        numList.push(treeNode.left);
      }
      if (treeNode.right) {
        numList.push(treeNode.right);
      }
    }
    return depthLevel;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let highestSum = { value: 0 }
    getSum(this.root, highestSum);
    return highestSum.value;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) {
      return null;
    }
    const numList = [this.root];
    let closestOverVal = null;

    while (numList.length > 0) {
      let treeNode = numList.shift()
      if (treeNode.left) {
        numList.push(treeNode.left);
      }
      if (treeNode.right) {
        numList.push(treeNode.right);
      }

      if (treeNode.val > lowerBound) {
        if (!closestOverVal) {
          closestOverVal = treeNode.val;
        }
        else if (treeNode.val < closestOverVal) {
          closestOverVal = treeNode.val;
        }
      }
    }
    return closestOverVal;
  };

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

const getSum = (node, highestSum = {value: 0}) => {
  if (!node) {
    return 0;
  }

  const leftSum = getSum(node.left, highestSum);
  const rightSum = getSum(node.right, highestSum);
  const nodeSum = Math.max(0, leftSum) + Math.max(0, rightSum) + node.val;

  highestSum.value = Math.max(highestSum.value, nodeSum);
  
  return node.val + Math.max(0, leftSum, rightSum);
}

module.exports = { BinaryTree, BinaryTreeNode };
