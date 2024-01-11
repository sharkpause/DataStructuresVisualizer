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

	removeAt(index) {
		if(index === 0) return this.removeFirst();
		if(index === this.size-1) return this.removeLast();
		let pointer = this.head;

		for(let i = 0; i < index-1; ++i, pointer = pointer.next) {}

		const NNN = pointer.next.next;
		pointer.next = null;
		pointer.next = NNN;

		--this.size;
	}

	removeLast() {
		let pointer = this.head;

		while(pointer.next.next !== null) {
			pointer = pointer.next;
		}

		pointer.next = null;
		this.tail = pointer;

		--this.size;
	}

	removeFirst() {
		const nextPointer = this.head.next;
		this.head = null;
		this.head = nextPointer;

		--this.size;
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

	copyList(originList) {
		const nodes = originList.returnNodes();
		for(let i = 0; i < nodes.length; ++i) {
			this.addNode(nodes[i]);
		}
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

//const list = new LinkedList();
//
//list.addNode(10);
//list.addNode(20);
//list.addNode(30);
//list.addNode(40);
//list.addNode(50);
//
//const copiedList = new LinkedList();
//copiedList.copyList(list);
//
//copiedList.addNode(60);
//
//console.log(list.returnNodes());
//console.log(copiedList.returnNodes());
