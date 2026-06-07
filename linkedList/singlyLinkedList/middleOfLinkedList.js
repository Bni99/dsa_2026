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

  middle() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(`Middle element is ${slow.value}`);
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const newList = new LinkedList();
newList.addAtHead(6);
newList.addAtHead(5);
newList.addAtHead(4);
newList.addAtHead(3);
newList.addAtHead(2);
newList.addAtHead(1);
newList.middle();
newList.print();
