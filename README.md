# Data Structures
A data structure is a data organization, management, and storage format that enables efficient access and modification.

## Linked List
```
// An instance of Linked List class
const linkedList = new LinkedList();

// append at the end of the Linked List
linkedList.appendNodeToEnd("Apple");
linkedList.appendNodeToEnd("Banana");
linkedList.appendNodeToEnd("Banana");
linkedList.appendNodeToEnd("Banana");
linkedList.appendNodeToEnd("Orange");
linkedList.appendNodeToEnd("Potato");
linkedList.appendNodeToEnd("Grapes");
linkedList.appendNodeToEnd("Grapes");
linkedList.appendNodeToEnd("Grapes");
linkedList.appendNodeToEnd("Grapes");
linkedList.appendNodeToEnd("Cherries");

// prepend at the start of the Linked List
linkedList.prependNodeToStart("Fruit");

// delete node from the Linked List
linkedList.deleteNodeFromList("Fruit");
linkedList.deleteNodeFromList("Potato");
linkedList.deleteNodeFromList("Cherries");

// insert newNode after givenNode
linkedList.insertNodeAfter("Insert: Eggs", "Grapes");

// output Linked List
const allNodes = linkedList.toArray();

// find matching node or nodes in Linked List
const singleMatchingNode = linkedList.findSingleMatchingNode("Grapes");
const allMatchingNodes = linkedList.findAllMatchingNodes("Grapes");

// find total count of all matching nodes
const countAllMatchingNodes = linkedList.countOfAllMatchingNodes("Grapes");

// output
console.log({
    allNodes,
    singleMatchingNode,
    allMatchingNodes,
    countAllMatchingNodes,
});
```

## Binary Search
todo

## Linked List
todo
