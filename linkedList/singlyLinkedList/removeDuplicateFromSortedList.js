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
    let str = "";
    let curr = this.head;
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

  removeDuplicates() {
    let prev = this.head;
    while (prev.next) {
      if (prev.next.value === prev.value) {
        prev.next = prev.next.next;
      } else {
        prev = prev.next;
      }
    }
  }
}

const list = new LinkedList();
list.addAtStart(1);
list.addAtStart(1);
list.addAtStart(2);
list.addAtStart(2);
list.addAtStart(4);
list.addAtStart(4);
list.addAtStart(5);
list.print();
list.removeDuplicates();
list.print();
