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
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  addAtEnd(value) {
    const newNode = new Node(value);
    newNode.next = null;
    if (this.size === 0) {
      this.head = newNode;
    }
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.size++;
  }

  addAtIndex(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.addAtHead(value);
    } else if (index === this.size) {
      this.addAtEnd(value);
    } else {
      const newNode = new Node(value);
      let curr = this.head;
      while (index - 1 !== 0) {
        curr = curr.next;
        index--;
      }
      newNode.next = curr.next;
      curr.next = newNode;
      this.size++;
    }
  }

  deleteAtHead() {
    if (this.size === 0) {
      console.log("list is already empty");
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  deleteAtTail() {
    if (this.size === 0) {
      console.log("already an empty list");
      return;
    } else if (this.size === 1) {
      this.heaad = null;
      this.size = 0;
      return;
    }

    let curr = this.head;
    while (curr.next.next !== null) {
      curr = curr.next;
    }
    curr.next = null;
    this.size--;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.deleteAtHead();
    } else if (index === this.size - 1) {
      this.deleteAtTail();
    } else {
      let curr = this.head;
      while (index - 1 !== 0) {
        curr = curr.next;
        index--;
      }
      curr.next = curr.next.next;
      this.size--;
    }
  }

  lengthOfList() {
    let curr = this.head;
    let len = 0;
    while (curr) {
      len++;
      curr = curr.next;
    }
    return len;
  }

  search(val) {
    let curr = this.head;
    while (curr) {
      if (curr.value === val) return true;
      curr = curr.next;
    }
    return false;
  }

  middleOfLinkedList() {
    let len = this.lengthOfList();
    let mid = Math.floor(len / 2);
    console.log(mid);
    let curr = this.head;
    for (let i = 0; i < mid; i++) {
      curr = curr.next;
    }
    return curr;
  }

  print() {
    let curr = this.head;
    let str = "";
    while (curr) {
      if (curr.next !== null) str = str + `${curr.value} -> `;
      else str = str + `${curr.value}`;
      curr = curr.next;
    }
    console.log(str);
  }
}

const newList = new LinkedList();
newList.addAtHead(6);
newList.addAtHead(5);
newList.addAtHead(4);
newList.addAtHead(3);
newList.addAtHead(2);
newList.addAtHead(1);
console.log(newList.middleOfLinkedList());
newList.print();
