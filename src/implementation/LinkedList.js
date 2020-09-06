/**
 * Node
 */
class Node {
	constructor(value, prev, next) {
		this.value = value;
		this.prev = prev || null;
		this.next = next || null;
	}
}

/**
 * Linked List
 */
export class LinkedList {
	constructor() {
		this.head = this.tail = null; // first & last node
	}

    /**
     * append new node to the end of Linked List
     * @param value
     */
	appendNode = (value) => {
		// if list is empty
		if (!this.tail) {
			this.head = this.tail = new Node(value);
		} else {
			const oldTail = this.tail; 		// save old tail
			this.tail = new Node(value);	// set new node to the new tail
			oldTail.next = this.tail;		// set new tail to old tail next
			this.tail.prev = oldTail;		// set old tail to new tail prev
		}
	};

    /**
     * prepend new node to the start of Linked List
     * @param value
     */
	prependNode = (value) => {
		// if list is empty
		if (!this.head) {
			this.head = this.tail = new Node(value);
		} else {
			const oldHead = this.head;		// save old head
			this.head = new Node(value);	// set new node to the new head
			oldHead.prev = this.head;		// set new head to old head prev
			this.head.next = oldHead;		// set old head to new head next
		}
	};

    /**
     * insert new node before a given node in the Linked List
     * @param value
     * @param afterValue
     */
	insertNodeBefore = (value, afterValue) => {
		// search existing node
		const existingNode = this.searchSingleNode(afterValue);
		const previousNode = existingNode && this.searchSingleNode(existingNode.prev.value);

		// validate existing node
		if (previousNode) {
			// new node
			const newNode = new Node(value, previousNode, existingNode);

			// insert the new node
			previousNode.next = newNode;
			existingNode.prev = newNode;
		}
	};

    /**
     * insert new node after a given node in the Linked List
     * @param value
     * @param afterValue
     */
	insertNodeAfter = (value, afterValue) => {
		// search existing node
		const existingNode = this.searchSingleNode(afterValue);
		const nextNode = existingNode && this.searchSingleNode(existingNode.next.value);

		// validate existing node
		if (nextNode) {
			// new node
			const newNode = new Node(value, existingNode, nextNode);

			// insert the new node
			existingNode.next = newNode;
			nextNode.prev = newNode;
		}
	};

    /**
     * delete selected node(s) from the Linked List
     * @param value
     */
	deleteNode = (value) => {
		// validate if head not exists
		// happen when list is completely empty
		if (!this.head) return;

		// start from head
		let currentNode = this.head;

		// traverse Linked List
		while (currentNode) {
			// compare value
			if (currentNode.value === value) {
				const prevNode = currentNode.prev;	// prev node
				const nextNode = currentNode.next;	// next node

				// case 1: middle
				// case 2: head
				// case 3: tail
				if (prevNode && nextNode) {
					nextNode.prev = prevNode;		// set next node prev
					prevNode.next = nextNode;		// set prev node next
				} else if(!prevNode) {
					nextNode.prev = null;
					this.head = nextNode;			// set head to the next node
				} else {
					prevNode.next = null;
					this.tail = prevNode;			// set tail to the prev node
				}
			}
			currentNode = currentNode.next;
		}
	};

    /**
     * search a node in the Linked List
     * @param value
     */
	searchSingleNode = (value) => {
		// validate if head not exists
		// happen when list is completely empty
		if (!this.head) return;

		// start from head
		let currentNode = this.head;

		// traverse Linked List
		while (currentNode) {
			// compare value
			if (currentNode.value === value) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}

		// if nothing is found
		return null;
	};

    /**
     * search all occurances of a node in the Linked List
     * @param value
     */
	searchAllNodes = (value) => {
		// nodes array
		const matchingNodes = [];

		// validate if head not exists
		// happen when list is completely empty
		if (!this.head) return;

		// start from head
		let currentNode = this.head;

		// traverse Linked List
		while (currentNode) {
			// compare value
			if (currentNode.value === value) {
				matchingNodes.push(currentNode);
			}
			currentNode = currentNode.next;
		}

		// return matching nodes
		if (matchingNodes && matchingNodes.length > 0) {
			return matchingNodes;
		}

		// if nothing is found
		return null;
	};

    /**
     * find the total size of the Linked List
     */
	sizeOfLinkedList = () => {
		// get all nodes
		const allNodes = this.showLinkedList();

		// return size
		return allNodes && allNodes.length ? allNodes.length : 0;
	};

    /**
     * count all occurances of a node in the Linked List
     * @param value
     */
	countNodeOccurances = (value) => {
		// get all matching nodes
		const allMatchingNodes = this.searchAllNodes(value);

		// count and return all matching nodes
		return allMatchingNodes && allMatchingNodes.length > 0
			? allMatchingNodes.length
			: 0;
	};

    /**
     * output the Linked List
     */
	showLinkedList = () => {
		// nodes array
		const nodes = [];

		// start from head
		let currentNode = this.head;

		// traverse Linked List
		while (currentNode) {
			// push node to the nodes array
			nodes.push(currentNode);

			// set next node to the currentNode
			currentNode = currentNode.next;
		}

		// return nodes
		return nodes;
	};
}
