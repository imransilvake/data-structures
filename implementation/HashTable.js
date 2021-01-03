/**
 * Hash Table
 */
export class HashTable {
	table = new Array(200);
	numItems = 0;

	/**
	 * set item to the hash table
	 * @param {*} key
	 * @param {*} value
	 */
	setItem = (key, value) => {
		// increment counter
		this.numItems++;

		// resize array size
		const loadFactor = this.numItems / this.table.length;
		if (loadFactor > 0.8) {
			this.resizeArray();
		}

		// set item
		const idx = this.hash(key, this.table.length);
		if (this.table[idx]) {
			this.table[idx].push([key, value]);
		} else {
			this.table[idx] = [[key, value]];
		}
	};

	/**
	 * get item from hash table
	 * @param {*} key
	 */
	getItem = (key) => {
		// index
		const idx = this.hash(key, this.table.length);

		// value at provided index not exists
		if (!this.table[idx]) return null;

		// find the item from the list
		const item = this.table[idx].find(x => x[0] === key);
		return !!item ? item[1] : null;
	};

	/**
	 * delete item from hash table
	 * @param {*} key
	 */
	deleteItem = (key) => {
		// index
		const idx = this.hash(key, this.table.length);

		// value at provided index not exists
		if (!this.table[idx]) return null;

		// filter out the item from the list
		const remainingItems = this.table[idx].filter(x => x[0] !== key);
		this.table[idx] = remainingItems.length ? remainingItems : null;
	};

	/**
	 * resize array size
	 */
	resizeArray = () => {
		const newTable = new Array(this.table.length * 2);
		this.table.forEach(item => {
			if (item && item.length) {
				item.forEach(([key, value]) => {
					const idx = this.hash(key, newTable.length);
					if (newTable[idx]) {
						newTable[idx].push([key, value]);
					} else {
						newTable[idx] = [[key, value]];
					}
				});
			}
		});
		this.table = newTable;
	};

	/**
	 * hash string to index
	 * @param {*} key
	 * @param {*} tableSize
	 */
	hash(key, tableSize) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash += key.charCodeAt(i);
		}
		return hash % tableSize;
	}
}
