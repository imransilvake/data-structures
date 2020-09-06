# Data Structures
A data structure is a data organization, management, and storage format that enables efficient access and modification.

## Linked List
A linked list is a linear data structure where each element is a separate object. Each element (node) has two items - the data and a reference to the next node. The entry point into a linked list is called the head of the list. The number of nodes in a list is not fixed and can grow and shrink on demand. 

### Pros:
- Memory Management: no need to specify the size in advance
- Useful if you do a lot of insertions at the beginning of the list - it's faster than array
  - Array: need to shift all the elements by 1 element
  - Linked List: we don't keep track of the postions of the elements

### Cons
- Linked List does not allow direct access to the individual elements. If you want to access a particular item then you have to start at the head and follow the references until you get to that item.
- Another disadvantage is that a linked list uses more memory compare with an array (store reference to the next node).

### Comparisons
| Point             | Linked List                       | Array  |
| -------------     |:-------------:                    | -----:|
| Element Acesss    | O(n)                              | O(1) if index is known; otherwise O(n) |
| Insertion: End    | O(1) with tail; without tail O(n) | O(1) |
| Insertion: Start  | O(1)                              | O(n) |
| Insertion: Middle | Search Time + O(1)                | O(n) |
| Search Elements   | O(n)                              | O(n) if index is not known; otherwise O(1) |


Check out the [implementation](src/implementation/LinkedList.js) detail.
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

## Stack & Queues
todo
