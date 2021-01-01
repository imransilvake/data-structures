// app
import { BinarySearchTree } from './../implementation/BinarySearch.js';

// an instance of Binary Search Tree class
const bst = new BinarySearchTree(15);

// insert node to the tree
bst.insertNode(3);
bst.insertNode(36);
bst.insertNode(2);
bst.insertNode(12);
bst.insertNode(28);
bst.insertNode(39);

// get minimum value node in the BST
const minNode = bst.minNode();

// get maximum value node in the BST
const maxNode = bst.maxNode();

// get total size of the BST
const treeSize = bst.size();

// validate if value is present in the BST
const nodeContains = bst.nodeContains(12);

// output
console.log({
    minNode,
    maxNode,
    nodeContains,
    treeSize
});

// DFS
// in-order: 2, 3, 12, 15, 28, 36, 39
const dfsInOrder = bst.dfsInOrder();

// pre-order: 15, 3, 2, 12, 36, 28, 39
const dfsPreOrder = bst.dfsPreOrder();

// post-order: 2, 12, 3, 28, 39, 36, 15
const dfsPostOrder = bst.dfsPostOrder();

// BFS
// 15, 3, 36, 2, 12, 28, 39
const bfs = bst.breadthFirstSearch();

// output
console.log({
    dfsInOrder,
    dfsPreOrder,
    dfsPostOrder,
    bfs
});