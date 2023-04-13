class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek () {
        if (this.length === 0) {
            return null;
        } else {
            return this.top;
        }
    }

    push (value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPoint = this.top;
            this.top = newNode;
            this.top.next = holdingPoint;
        }
        this.length++;
        return this
    }

    pop () {
        if (this.length === 0) {
            return null;
        } else if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        }    
        else {
            this.top = this.top.next;
        }
        this.length--;
        return this;
    }
}

const myStack = new Stack();

