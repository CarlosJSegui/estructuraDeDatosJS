class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node (value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if(value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }


    // metodo recursivo
    search (value, currentNode = this.root) {
        if (currentNode === null) {
            return "El elemento no se encuentra";
        } else if (value > currentNode.value) {
            return this.search(value, currentNode.right);
        } else if (value < currentNode.value) {
            return this.search(value, currentNode.left);
        } else {
            return "El elemento ha sido encontrado"
        }
    }
}

const tree = new BinarySearchTree();