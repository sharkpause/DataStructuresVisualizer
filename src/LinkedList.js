export default class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
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

	removeNode(index) {
		if(index === this.size - 1) {
			this.removeLast();
		} else if(index === 0) {
			this.removeFirst();
		}

		--this.size;
	}

	removeLast() {
		let pointer = this.head;

		while(pointer.next.next !== null) {
			pointer = pointer.next;
		}

		pointer.next = null;
		this.tail = pointer;
	}

	removeFirst() {
		const nextPointer = this.head.next;
		this.head = null;
		this.head = nextPointer;
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

	returnSize() {
		return this.size;
	}
}

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
