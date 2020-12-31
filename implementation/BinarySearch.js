/**
 * Node
 */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Binary Search Tree
 */
export class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value);
        this.count = 0;
    }

    /**
     * insert node to the tree
     * @param {*} value
     */
    insertNode = (value) => {
        // create new node
        const newNode = new Node(value);

        // traverse tree
        const traverseTree = node => {
            // case 1: left size of the tree
            // case 2: right size of the tree
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    traverseTree(node.left);
                }
            } else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    traverseTree(node.right);
                }
            }
        }
        traverseTree(this.root);

        // count tree
        this.count++;
    }

    /**
     * get minimum value node in the tree
     */
    minNode = () => {
        // set current node to root node
        let currentNode = this.root;

        // go to the very left node of the tree
        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    /**
     * get maximum value node in the tree
     */
    maxNode = () => {
        // set current node to root node
        let currentNode = this.root;

        // go to the very right node of the tree
        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }

    /**
     * validate if value is present in the tree
     * @param {*} value
     */
    nodeContains = (value) => {
        let currentNode = this.root;
        while (currentNode) {
            // case: value found at root
            if (value === currentNode.value) return true;

            // case: left and right
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    /**
     * get total size of the tree
     */
    size() {
        return this.count;
    }

    // depth first search
}
