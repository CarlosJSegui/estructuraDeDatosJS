class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Queues {
    constructor () {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek () {
        if (this.length === 0) {
            return "La cola esta vacía"
        } else {
            return this.first
        }
    }

    enqueue (value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue () {
        if(this.length === 0) {
            return "No hay nada que borrar"
        } else if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return this;
    }
}

const myQueue = new Queues();