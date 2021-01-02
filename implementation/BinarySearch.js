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
        this.count = 1;
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
        };
        traverseTree(this.root);

        // count tree
        this.count++;
    };

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
    };

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
    };

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
    };

    /**
     * get total size of the tree
     */
    size() {
        return this.count;
    };

    // depth first search - branch by branch

    // in-order
    // case: left, root, right
    dfsInOrder() {
        const result = [];

        // traverse tree
        const traverseTree = node => {
            // if left child exists, go left again
            if (node.left) traverseTree(node.left);

            // root value
            result.push(node.value);

            // if right child exists, go right again
            if (node.right) traverseTree(node.right);
        };
        traverseTree(this.root);

        return result;
    };

    // pre-order
    // case: root, left, right
    dfsPreOrder() {
        const result = [];

        // traverse tree
        const traverseTree = node => {
            // root value
            result.push(node.value);

            // if left child exists, go left again
            if (node.left) traverseTree(node.left);

            // if right child exists, go right again
            if (node.right) traverseTree(node.right);
        };
        traverseTree(this.root);

        return result;
    };

    // post-order
    // case: left, right, root
    dfsPostOrder() {
        const result = [];

        // traverse tree
        const traverseTree = node => {
            // if left child exists, go left again
            if (node.left) traverseTree(node.left);

            // if right child exists, go right again
            if (node.right) traverseTree(node.right);

            // root value
            result.push(node.value);
        };
        traverseTree(this.root);

        return result;
    };

    // breadth first search - level by level
    // use a queue
    breadthFirstSearch() {
        const result = [];
        const queue = [];

        // push to queue
        queue.push(this.root);

        while (queue.length) {
            // pop node from queue
            const currentNode = queue.shift();

            // push it to result
            result.push(currentNode.value);

            // check for left child
            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            // check for right child
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return result;
    };
}
