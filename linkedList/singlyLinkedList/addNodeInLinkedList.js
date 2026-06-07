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

  addAtTail(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  addAtIndex(index, value) {
    if (index === 0) {
      this.addAtHead(value);
    } else if (index === this.size) {
      this.addAtTail(value);
    } else {
      const newNode = new Node(value);
      let current = this.head;
      while (index - 1 !== 0) {
        current = current.next;
        index--;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.size++;
    }
  }

  getAtIndex(index) {
    if (index >= this.size || index < 0) {
      console.log(-1);
      return;
    }
    let current = this.head;
    while (index !== 0) {
      current = current.next;
      index--;
    }
    console.log(current.value);
  }

  print() {
    let str = "";
    let current = this.head;
    while (current) {
      if (current.next !== null) str = str + `${current.value} -> `;
      else str = str + `${current.value}`;
      current = current.next;
    }
    console.log(str);
    console.log(`size : ${this.size}`);
  }
}

const list = new LinkedList();
list.addAtHead(5);
list.addAtHead(4);
list.addAtHead(3);
list.addAtHead(2);
list.addAtHead(1);
list.addAtTail(6);
list.addAtTail(7);
// list.addAtIndex(3, 20);
// list.addAtIndex(0, 20);
// list.addAtIndex(9, 20);
list.getAtIndex(-2);
list.print();
