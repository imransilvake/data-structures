# Binary Search
- A tree is a non-linear or hierarchical data structure.
- Each node has: data and a reference to the next node.
- A node that have no child is called a leaf node.

<p align="center">
  <img src="../assets/images/binary-search.png" />
</p>


## Pros & Cons

### Pros


### Cons



## Big O Comparisons

| Point             |       Linked List        |                Array |
| ----------------- | :----------------------: | -------------------: |
| Element Acesss    | O(n) - sequential access | O(1) - direct access |
| Insertion: End    |           O(1)           |                 O(1) |
| Insertion: Start  |           O(1)           |                 O(n) |
| Insertion: Middle |    Search Time + O(1)    |                 O(n) |
| Search Elements   |           O(n)           |                 O(n) |


## Applications in real world



## Usage

#### An instance of Linked List class
```
const linkedList = new LinkedList();
```

#### Append new node to the end of Linked List
```
linkedList.appendNode("Apple");
linkedList.appendNode("Banana");
linkedList.appendNode("Orange");
linkedList.appendNode("Potato");
linkedList.appendNode("Grapes");
linkedList.appendNode("Cherries");
linkedList.appendNode("Cherries");
linkedList.appendNode("Cherries");
linkedList.appendNode("Goose");
```

#### Prepend new node to the start of Linked List
```
linkedList.prependNode("Fruit");
```

#### Insert new node before a given node in the Linked List
```
linkedList.insertNodeBefore("Eggs", "Potato");
```

#### Insert new node after a given node in the Linked List
```
linkedList.insertNodeAfter("Eggs", "Potato");
```

#### Delete node from the Linked List
```
linkedList.deleteNode("Fruit");
linkedList.deleteNode("Banana");
linkedList.deleteNode("Goose");
```

#### Show and Count Linked List
```
const showLinkedList = linkedList.showLinkedList();
const countLinkedList = linkedList.sizeOfLinkedList();
```

#### Search node or nodes in Linked List
```
const searchSingleNode = linkedList.searchSingleNode("Grapes");
const searchAllNodes = linkedList.searchAllNodes("Grapes");
```

#### Count total node occurances
```
const countNodeOccurances = linkedList.countNodeOccurances("Cherries");
```
