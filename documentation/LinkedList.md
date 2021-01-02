# Linked List (Doubly)
- A Linked List is a linear data structure where each node is a separate object.
- Each node has three items - the data and a reference to the previous and next node.
- In Linked List the data is not stored in contagious memory like in arrays.
- The number of nodes in a list is not fixed and can grow and shrink on demand. 
- In the Doubly Linked List, we maintain two pointers; one for next node and another for previous node. This way we will be able to iterate backward or forward any time we want.

<p align="center">
  <img src="../assets/images/linked-list.jpg" />
</p>


## Pros & Cons

### Pros
- Memory Management: LinkedLists dose not require contiguous blocks of memory and therefore can help reduce memory fragmentation.
- Useful if you need a lot of insertions at the beginning of the list. It's faster than array.
  - Array: need to shift all the elements by 1 element
  - Linked List: we don't keep track of the postions of the elements

### Cons
- Linked List does not allow direct access to the individual nodes. If you want to access a particular node then you have to start at the head and follow the references until you get to that node.
- Another disadvantage is that a Linked List uses more memory compare with to an array because each node store extra information about the reference to the prev or next node.


## Big O Comparisons (Average Case)

| Point                         |          Doubly Linked List          |                      Array                    |
| ----------------------------- | :----------------------------------: | --------------------------------------------: |
| Element Acesss                |       O(n) - sequential access       | O(1) - direct access; O(n) - squential access |
| Insertion / Deletion          |                 O(1)                 |       O(n) - because of shifting items        |
| Search Elements               |                 O(n)                 |       O(n) - unsorted; O(log n) sorted        |
| ----------------------------- | :----------------------------------: | --------------------------------------------: |
#### Insertion at middle is O(1), but getting to that middle node is O(n).


## Applications in real world
- Image Viewer: Previous and next images are linked, hence can be accessed by next and previous button.
- Previous and Next Page in Web Browser: We can access previous and next url searched in web browser by pressing back and next button since, they are linked.
- Music Player: Songs in music player are linked to previous and next song. You can play songs either from starting or ending of the list.


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
