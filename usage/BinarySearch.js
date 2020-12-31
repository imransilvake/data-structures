// app
import { BinarySearchTree } from './../implementation/BinarySearch.js';

// an instance of Binary Search Tree class
const bst = new BinarySearchTree(10);

// insert node to the tree
bst.insertNode(10);
bst.insertNode(20);
bst.insertNode(20);
bst.insertNode(30);
bst.insertNode(100);
bst.insertNode(3);
bst.insertNode(40);

// get minimum value node in the tree
const minNode = bst.minNode();

// get maximum value node in the tree
const maxNode = bst.maxNode();

// get total size of the tree
const treeSize = bst.size();

// validate if value is present in the tree
const nodeContains = bst.nodeContains(3000);

// output
console.log({
    minNode,
    maxNode,
    nodeContains,
    treeSize
});
