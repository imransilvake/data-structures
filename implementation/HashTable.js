/**
 * Hash Table
 */
export class HashTable {
	table = new Array(200);
	numItems = 0;

	/**
	 * set item to the table
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
		const idx = this.hashStringToInt(key, this.table.length);
		if (this.table[idx]) {
			this.table[idx].push([key, value]);
		} else {
			this.table[idx] = [[key, value]];
		}
	};

	/**
	 * get item through key
	 * @param {*} key
	 */
	getItem = (key) => {
		// index
		const idx = this.hashStringToInt(key, this.table.length);

		// value at provided index not exists
		if (!this.table[idx]) return null;

		// find the item
		return this.table[idx].find(x => x[0] === key)[1];
	};

	/**
	 * resize array size
	 */
	resizeArray = () => {
		const newTable = new Array(this.table.length * 2);
		this.table.forEach(item => {
			if (item && item.length) {
				item.forEach(([key, value]) => {
					const idx = this.hashStringToInt(key, newTable.length);
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
	 * hash method to generate integer values
	 * @param {*} s
	 * @param {*} tableSize
	 */
	hashStringToInt(s, tableSize) {
		let hash = 17;
		for (let i = 0; i < s.length; i++) {
			hash = (13 * hash * s.charCodeAt(i)) % tableSize;
		}
		return hash;
	}
}
