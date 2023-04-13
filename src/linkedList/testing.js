class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor (value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.lenght = 1
    }

    append (value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght ++;
        return this
    }

    prepend (value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.lenght ++;
    }

    insert (index, value) {
        if (index >= this.lenght) {
            return this.append(value);
        } else if (index === 0) {
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const firstPointer = this.getIndex(index -1);
        const holdingPointer = firstPointer.next;
        firstPointer = newNode;
        newNode.next = holdingPointer;

        this.lenght++;
    }

    getIndex (index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode;
    }
}

let myLinkedList = new LinkedList(1);

myLinkedList.append(2);

myLinkedList