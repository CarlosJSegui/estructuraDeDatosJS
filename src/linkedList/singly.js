// como se ve una linkedList (1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 --> 8 --> null)

// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next:null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.lenght = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght ++;

        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.lenght++;

        return this
    }

    insert(index, value) {
        if(index >= this.lenght) {
            return this.append(value);
        } else if (index === 0) {
            return this.prepend(value);
        }
        const newNode = new Node(value);
        const firstPointer = this.getIndex(index -1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.lenght++;
        return this;
    }
    
    getIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove(index) {
        if (index >= this.lenght) {
            return "no existe ese index"
        } else if (index === 0) {
            this.head = this.head.next;
            this.lenght--;
        } else if (index === this.lenght - 1) {
            const anterior = this.getIndex(index - 1);
            anterior.next = null;
            this.tail = anterior;
            this.lenght--;
        } else {
            const aBorrar = this.getIndex(index);
            const anterior = this.getIndex(index - 1);
            const posterior = aBorrar.next;
            anterior.next = posterior;

            this.lenght--;
        }
    }
}

let myLinkedList = new MySinglyLinkedList(1);