// peice of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Not the best way to implement
// let first = new Node("Cam");
// first.next = new Node("Adam");
// first.next.next = new Node("Sam");
// first.next.next.next = new Node("Rick");

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();
