# Hash Table
- In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.
- Hash Table uses an array as a storage medium and uses hash technique to generate an index where an element is to be inserted or is to be located from.

<p align="center">
  <img src="../assets/images/hash-table.jpg" />
</p>


## Pros & Cons

### Pros
- Hash tables are a fast and efficient way for looking up, creating, and deleting stored data.
- Hash tables are typically more efficient for looking up values than search trees, which have a linear time complexity, and binary search trees, which have a logarithmic time complexity.
- Regardless of the input size, hast tables will typically have a constant time complexity for looking up, creating, and deleting stored data.

### Cons
- Hash functions do not accept “null” as a key’s values. This is because hashing functions require a unique key to find it’s associated value and “null” is neither unique nor a value.
- Can also be inefficient when there are too many collisions. As the number of collisions increase, the amount of tuples in each storage bucket increases and as the bucket size increases with tuples the time complexity for finding an element’s value becomes more linear "O(n)". A programmer can get around this issue by re-hashing or “re-sizing” the hash table. Re-hashing can be done gradually or all at once, but either way the time complexity for this action will be O(n).


## Big O Comparisons (Average Case)

| Point                |                     Hash Table                   |                      Array                    |
| -------------------- | :----------------------------------------------: | --------------------------------------------: |
| Element Acesss       |      O(1) + Hashing & Indexing - direct access   | O(1) - direct access; O(n) - squential access |
| Insertion / Deletion |      O(1) + Hashing & Indexing (amortized)       |       O(n) - because of shifting items        |
| Search Elements      |                        O(1)                      |       O(n) - unsorted; O(log n) sorted        |
| -------------------- | :----------------------------------------------: | --------------------------------------------: |


## Applications in real world
- Authentication: Cryptographic hash functions let you log in to a system without storing your password anywhere vulnerable.
- Search: Hashing is useful for indexing large storage spaces, so that you can look things up in them without reading their entire contents every time.
- Programming languages: Hash tables are a convenient way to implement the mechanism that connects a variable's name to its memory location.


## Usage
#### An instance of Hash Table class
```
const hashTable = new HashTable();
```

#### Insert new item to the Hash Table
```
hashTable.setItem("firstName", "Imran");
hashTable.setItem("lastName", "Khan");
hashTable.setItem("age", 29);
hashTable.setItem("dob", "19.01.1992");
```

#### Get item from the Hash Table
```
const fName = hashTable.getItem("firstName");
const lName = hashTable.getItem("lastName");
const age = hashTable.getItem("age");
const dob = hashTable.getItem("dob");
```
