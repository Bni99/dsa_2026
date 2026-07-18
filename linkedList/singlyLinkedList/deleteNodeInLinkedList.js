class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  deleteAtHead() {
    if (this.size === 0) {
      console.log("List is already empty");
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  deleteAtTail() {
    if (this.size === 0) {
      console.log("List is already empty");
      return;
    } else if (this.size === 1) {
      this.head = null;
      this.size = 0;
      return;
    }
    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }

  deleteAtIndex(index) {
    if (index >= this.size || index < 0) {
      console.log(-1);
      return;
    }
    if (index === 0) {
      this.deleteAtHead();
      return;
    }
    if (index === this.size - 1) {
      this.deleteAtTail();
      return;
    }

    let current = this.head;
    while (index - 1 !== 0) {
      current = current.next;
      index--;
    }
    current.next = current.next.next;
    this.size--;
  }

  print() {
    let str = "";
    let current = this.head;
    while (current) {
      if (current.next !== null) {
        str = str + `${current.value} -> `;
      } else {
        str = str + `${current.value}`;
      }
      current = current.next;
    }
    console.log(`linked list : ${str}`);
    console.log(`size : ${this.size}`);
  }
}

const list = new LinkedList();
list.addAtHead(5);
list.addAtHead(4);
list.addAtHead(3);
list.addAtHead(2);
list.addAtHead(1);
list.deleteAtIndex(2);
list.deleteAtIndex(2);
list.deleteAtIndex(2);
list.deleteAtIndex(0);
list.print();
