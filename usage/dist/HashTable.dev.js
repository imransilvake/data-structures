"use strict";

var _HashTable = require("./../implementation/HashTable.js");

// app
// an instance of Hash Table class
var hashTable = new _HashTable.HashTable(); // insert items to Hash Table

hashTable.setItem("firstName", "Imran");
hashTable.setItem("lastName", "Khan");
hashTable.setItem("age", 29);
hashTable.setItem("dob", "19.01.1992"); // show items value by key

var fName = hashTable.getItem("firstName");
var lName = hashTable.getItem("lastName");
var age = hashTable.getItem("age");
var dob = hashTable.getItem("dob"); // output

console.log({
  fName: fName,
  lName: lName,
  age: age,
  dob: dob
});
var dob2 = hashTable.deleteItem("dob");
console.log({
  fName: fName,
  lName: lName,
  age: age,
  dob2: dob2
});