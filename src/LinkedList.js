export default class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;

		this.addNode = this.addNode.bind(this);
	}

	addNode(val) {
		if(this.size <= 0) {
			this.head = new Node(val);
			this.tail = this.head;
		} else {
			this.tail.next = new Node(val);
			this.tail = this.tail.next;
		}
		++this.size;
	}

	returnNodes() {
		const arr = [];

		let pointer = this.head;
		while(pointer !== null) {
			arr.push(pointer.val);
			pointer = pointer.next
		}

		return arr;
	}
}

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
