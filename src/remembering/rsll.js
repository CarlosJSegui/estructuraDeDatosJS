class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        } else if(index === 0) {
            return this.prepend(value);
        } else {
            const newNode = new Node(value);
            const firstPointer = this.getIndex(index - 1);
            const holdingPointer = firstPointer.next;
            firstPointer.next = newNode;
            newNode.next = holdingPointer;

            this.length++;
            return this;
        }
    }

    getIndex(index) {
        let counter = 0
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove(index) {
        if(index >= this.length) {
            return "Index is bigger than list";
        } else if(index === 0) {
            this.head = this.head.next;
            this.length--;
        } else if(index === this.length -1) {
            const anterior = this.getIndex(index -1);
            anterior.next = null;
            this.tail = anterior;
            this.length--;
        } else {
            const aBorrar = this.getIndex(index);
            const anterior = this.getIndex(index - 1);
            const posterior = aBorrar.next;
            anterior.next = posterior;

            this.length--;
        }
    }
}

let MySinglyLinkedList = new SinglyLinkedList(1);