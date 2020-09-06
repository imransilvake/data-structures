<template>
	<div class="ds-linked-list"></div>
</template>

<script>
import { LinkedList } from './../../implementation/LinkedList';

export default {
	name: "LinkedList",
	mounted: function () {
		// An instance of Linked List class
		const linkedList = new LinkedList();

		// append new node to the end of Linked List
		linkedList.appendNode("Apple");
		linkedList.appendNode("Banana");
		linkedList.appendNode("Orange");
		linkedList.appendNode("Potato");
		linkedList.appendNode("Grapes");
		linkedList.appendNode("Cherries");
		linkedList.appendNode("Cherries");
		linkedList.appendNode("Cherries");
		linkedList.appendNode("Goose");

		// prepend new node to the start of Linked List
		linkedList.prependNode("Fruit");

		// insert new node before a given node in the Linked List
		linkedList.insertNodeBefore("Eggs", "Potato");

		// insert new node after a given node in the Linked List
		linkedList.insertNodeAfter("Eggs", "Potato");

		// delete node from the Linked List
		linkedList.deleteNode("Fruit");
		linkedList.deleteNode("Banana");
		linkedList.deleteNode("Goose");

		// show and count Linked List
		const showLinkedList = linkedList.showLinkedList();
		const countLinkedList = linkedList.sizeOfLinkedList();

		// search node or nodes in Linked List
		const searchSingleNode = linkedList.searchSingleNode("Grapes");
		const searchAllNodes = linkedList.searchAllNodes("Grapes");

		// count total node occurances
		const countNodeOccurances = linkedList.countNodeOccurances("Cherries");

		// output
		console.log({
			showLinkedList,
			countLinkedList,
			searchSingleNode,
			searchAllNodes,
			countNodeOccurances,
		});
	},
};
</script>
