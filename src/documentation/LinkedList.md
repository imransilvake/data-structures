# Doubly Linked List
- A Linked List is a linear data structure where each node is a separate object.
- Each node has two items - the data and a reference to the next node.
- In Linked List the data is not stored in contagious memory like in arrays.
- The number of nodes in a list is not fixed and can grow and shrink on demand. 
- In the Doubly Linked List, we maintain two pointers; for next node and for previous node. This way we will be able to iterate backward any time we want.

<p align="center">
  <img src="../assets/linked-list.jpg" />
</p>

### Pros
- Memory Management: no need to specify the size in advance.
- Useful if you do a lot of insertions at the beginning of the list - it's faster than array:
  - Array: need to shift all the elements by 1 element
  - Linked List: we don't keep track of the postions of the elements

### Cons
- Linked List does not allow direct access to the individual nodes. If you want to access a particular node then you have to start at the head and follow the references until you get to that node.
- Another disadvantage is that a Linked List uses more memory compare with to an array because each node store information about the reference to the next node.

### Big O Comparisons
| Point             |            Linked List            |                      Array |
| ----------------- | :-------------------------------: | -------------------------: |
| Element Acesss    |     O(n) - sequential access      |       O(1) - direct access |
| Insertion: End    | O(1) with tail; without tail O(n) |                       O(1) |
| Insertion: Start  |               O(1)                |                       O(n) |
| Insertion: Middle |        Search Time + O(1)         |                       O(n) |
| Search Elements   |               O(n)                | O(n) if index is not known |


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

#### Show and Count Linked List
```
const showLinkedList = linkedList.showLinkedList();
const countLinkedList = linkedList.sizeOfLinkedList();
```

#### search node or nodes in Linked List
```
const searchSingleNode = linkedList.searchSingleNode("Grapes");
const searchAllNodes = linkedList.searchAllNodes("Grapes");
```

#### count total node occurances
```
const countNodeOccurances = linkedList.countNodeOccurances("Cherries");
```
