// app
import { HashTable } from './../implementation/HashTable.js';

// an instance of Hash Table class
const hashTable = new HashTable();

// insert items to Hash Table
hashTable.setItem("firstName", "Imran");
hashTable.setItem("lastName", "Khan");
hashTable.setItem("age", 29);
hashTable.setItem("dob", "19.01.1992");

// show items value by key
const fName = hashTable.getItem("firstName");
const lName = hashTable.getItem("lastName");
const age = hashTable.getItem("age");
const dob = hashTable.getItem("dob");

// output
console.log({ fName, lName, age, dob });