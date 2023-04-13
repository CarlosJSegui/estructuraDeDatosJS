class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.prev = null;
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if(index >= this.length) {
            return this.append(value);
        } else if (index === 0) {
            return this.prepend(value);
        } 
        const newNode = new Node(value);
        const firstPointer = this.getIndex(index).prev;
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        newNode.prev = firstPointer;

        this.length++;
        return this
    }

    getIndex(index) {
        const counter = 0;
        const currentNode = this.head;
        while (counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }
    
    remove (index) {
        if(index >= this.length) {
            return "Ese index es mayor que el tamaño de la lista"
        } else if (index === 0) {
            this.head = this.head.next;
            this.length--;
        } else if (index === this.length -1) {
            const anterior = this.getIndex(index -1);
            anterior.next = null;
            this.tail = anterior;
            this.length--;
        } else {
            const anterior = this.getIndex(index -1);
            const aBorrar = this.getIndex(index);
            const posterior = aBorrar.next;
            anterior.next = posterior;
            this.length--;
        }
    }
}

const newDoublyLinkedList = new MyDoublyLinkedList(1);