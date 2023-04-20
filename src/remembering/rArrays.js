class Array {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    get (index) {
        return this.data[index];
    }

    push (item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop () {
        const deleted = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return deleted;
    }

    delete (index) {
        const deleted = this.data[index];
        this.shiftIndex(index);
        return deleted;
    }

    shiftIndex (index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    shift () {
        return this.delete(0);
    }

    unshift (item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        } 
        this.data[0] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new Array();