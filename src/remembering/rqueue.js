class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if(this.length === 0) {
            return "Lista vacía";
        }
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        const primero = this.first;
        if(this.length === 0) {
            return "La lista esta vacía";
        } else if(this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return primero;
    }
}

const myQueue = new Queue();