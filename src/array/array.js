// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() { // remove the last element of the array and return it
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) { // remove any element of the array and return it
        const item = this.data[index]
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index) { // repair de index after delete method
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    shift() { // remove the first item of the array and return it
        return this.delete(0);
    }
    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return item;
    }
}

const myArray = new MyArray();