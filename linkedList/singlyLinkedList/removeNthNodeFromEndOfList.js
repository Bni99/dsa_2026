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

  addAtStart(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  print() {
    let curr = this.head;
    let str = "";
    while (curr) {
      if (curr.next !== null) {
        str = str + `${curr.value} -> `;
      } else {
        str = str + `${curr.value}`;
      }
      curr = curr.next;
    }
    console.log(str);
  }

  // 2 pass solution without sentinel node
  removeNthNodeFromEndOfList(index) {
    let curr = this.head;
    let length = 0;
    while (curr) {
      length++;
      curr = curr.next;
    }

    let nodeIndex = length - index - 1;

    if (nodeIndex < 0) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      while (nodeIndex !== 0) {
        prev = prev.next;
        nodeIndex--;
      }
      prev.next = prev.next.next;
    }
  }
  // 2 pass solution
  removeFromEndSentinel(index) {
    let sentinelNode = new Node();
    sentinelNode.next = this.head;

    let length = 0;
    let curr = this.head;
    while (curr) {
      length++;
      curr = curr.next;
    }

    let nodeIndex = length - index;
    let prev = sentinelNode;
    while (nodeIndex) {
      prev = prev.next;
      nodeIndex--;
    }
    prev.next = prev.next.next;
    this.head = sentinelNode.next;
  }

  // 1 pass solution
  removeFromEnd(index) {
    let sentinelNode = new Node();
    sentinelNode.next = this.head;

    let first = sentinelNode;
    let second = sentinelNode;
    while (index) {
      first = first.next;
      index--;
    }
    while (first.next !== null) {
      first = first.next;
      second = second.next;
    }
    second.next = second.next.next;
    this.head = sentinelNode.next;
  }
}

const list = new LinkedList();
list.addAtStart(5);
list.addAtStart(4);
list.addAtStart(3);
list.addAtStart(2);
list.addAtStart(1);
list.print();
// list.removeNthNodeFromEndOfList(2);
// list.print();
// list.removeNthNodeFromEndOfList(3);
// list.print();
// list.removeNthNodeFromEndOfList(3);
// list.print();
// list.removeNthNodeFromEndOfList(1);
// list.print();
// list.removeNthNodeFromEndOfList(1);
// list.print();
// list.removeFromEndSentinel(2);
// list.print();
list.removeFromEnd(2);
list.print();
