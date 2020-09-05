/**
 * Pros:
 * 1) Memory Management: no need to specify the size in advance
 * 2) Useful if you do a lot of insertions at the start of the list - it's faster than array
 * 	array: need to shift all the elements by 1 element
 * 	linkedList: we don't keep track of the postions of the elements
 *
 * Thoughts:
 * 1) Now-a-days, JavaScript has dynamic arrays and memory isn't really the primary issue in web apps
 *
 *
 * Comparisons
 * Point						Linked List								Array
 * Element Acesss				O(n)									O(1) if index is known; otherwise O(n)
 * Insertion: End				O(1) with tail; without tail O(n)		O(1)
 * win -> Insertion: Start		O(1)									O(n)
 * Insertion: Middle			Search Time + O(1)						O(n)
 * Search Elements				O(n)									O(n) if index is not known; otherwise O(1)
 */
export class LinkedList {
	constructor() {
		this.head = null; // initial head is null
		this.tail = null; // initial tail is null
	}

    /**
     * prepend newNode to the start of the Linked List
     * @param value
     */
	prependNodeToStart = (value) => {
		// newNode
		const newNode = {
			value,
			next: this.head,
		};

		// validate if tail not exists
		// happen when list is completely empty
		if (!this.tail) {
			this.tail = newNode;
		}

		// set head
		this.head = newNode;
	};

    /**
     * append newNode to the end of the Linked List
     * @param value
     */
	appendNodeToEnd = (value) => {
		// newNode
		const newNode = {
			value,
			next: null,
		}; // next is null because newNode is going to append at the end of the list

		// validate if head not exists
		// happen when list is completely empty
		if (!this.head) {
			this.head = newNode;
		}

		// validate if tail exists
		// means if there exist any items in the list
		if (this.tail) {
			this.tail.next = newNode;
		}

		// set tail
		this.tail = newNode;
	};

    /**
     * insert newNode after a givenNode in the Linked List
     * @param value
     * @param afterValue
     */
	insertNodeAfter = (value, afterValue) => {
		// find existing node
		const existingNode = this.findSingleMatchingNode(afterValue);

		// validate existing node
		if (existingNode) {
			// newNode
			const newNode = { value, next: existingNode.next };

			// insert the newNode
			existingNode.next = newNode;
		}
	};

    /**
     * delete selected node from the Linked List
     * @param value
     */
	deleteNodeFromList = (value) => {
		// validate if head not exists
		// happen when list is completely empty
		if (!this.head) return;

		// if delete node is at first position
		while (this.head && this.head.value === value) {
			this.head = this.head.next;
		}

		// start from head
		let currentNode = this.head;

		// traverse Linked List
		while (currentNode.next) {
			// compare value
			if (currentNode.next.value === value) {
				currentNode.next = currentNode.next.next;
				continue;
			}

			// set next node to the currentNode
			currentNode = currentNode.next;
		}

		// set tail
		if (this.tail.value === value) {
			this.tail = currentNode;
		}
	};

    /**
     * find a matching node in the Linked List
     * @param value
     */
	findSingleMatchingNode = (value) => {
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

			// set next node to the currentNode
			currentNode = currentNode.next;
		}

		// if nothing is found
		return null;
	};

    /**
     * find a matching node in the Linked List
     * @param value
     */
	findAllMatchingNodes = (value) => {
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

			// set next node to the currentNode
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
     * find a matching node in the Linked List
     * @param value
     */
	countOfAllMatchingNodes = (value) => {
		// get all matching nodes
		const allMatchingNodes = this.findAllMatchingNodes(value);

		// count and return all matching nodes
		return allMatchingNodes && allMatchingNodes.length > 0
			? allMatchingNodes.length
			: 0;
	};

    /**
     * convert Linked List to array
     */
	toArray = () => {
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
