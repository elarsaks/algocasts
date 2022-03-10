// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null){
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(){
		this.head = null
	}

	insertFirst(data){
		this.head = new Node(data, this.head)
	}

	size(){
		let counter = 0;
		let node = this.head;

		while (node){
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst(){
		return this.head
	}

	getLast(){
		if(!this.head){
			return null
		}

		let node = this.head;

		while(node){
			if(!node.next){
				return node
			}
			node = node.next;
		}
	}

	clear(){
		this.head = null
	}

	removeFirst(){
		if (this.head.next != null){
			this.head = this.head.next
		} else {
			this.head = null
		}
	}

	removeLast(){

		if(!this.head){
			return;
		}

		if(!this.head.next){
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;

		while(node.next){
			previous = node;
			node = node.next; 
		}

		previous.next = null;

		return;
	}

	insertLast(data){
		const last = this.getLast();

		if(last){
			last.next = new Node(data)
		} else {
			this.head = new Node(data)
		} 
	}


	getAt(index){		
		let counter = 0;
		let node = this.head;

		while(node){
			if(counter === index){
				return node
			}

			counter++;
			node = node.next;
		}

		return null
	}

	removeAt(index){
		if(!this.head){
			return;
		}

		if(index === 0){
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);

		if(!previous){
			return;
		}

		if(!previous.next){
			return;
		}


		previous.next = previous.next.next


		return;
	}

	insertAt(data, index){
		// Insert when list is empty
		if(!this.head){
			this.head = new Node(data)
			return;
		}

		// Insert when index 0
		if(index === 0){
			this.head = new Node(data, this.head)
			return;
		}

		// Insert out of bounds
		if(index > this.size()){
			let last = this.getLast()
			last.next = new Node(data)
			return;
		}

		// Insert middle
		const previous = this.getAt(index - 1);
		previous.next =  new Node(data, previous.next)
		return;
	}

	forEach(func){
		let node = this.head
		let index = 0

		while (node){
			func(node, index)
			index + 1
			node = node.next
		}

		return;
	}

}

module.exports = { Node, LinkedList };
