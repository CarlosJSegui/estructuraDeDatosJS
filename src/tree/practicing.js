class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value;
    } 
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert (value) {
        const newNode = new Node (value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if (value < currentNode.value) {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search (value, currentNode = this.root) {
        if (currentNode === null) {
            return "El elemento no se encuentra"
        } else if (value < currentNode.value) {
            return this.search(value, currentNode.left);
        } else if (value > currentNode.value) {
            return this.search (value, currentNode.right);
        } else {
            return "Elemento encontrado";
        }
    }
}

const tree = new BinarySearchTree();