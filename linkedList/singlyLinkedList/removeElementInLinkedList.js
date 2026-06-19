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
      if (curr.next !== null) str = str + `${curr.value} -> `;
      else str = str + `${curr.value}`;
      curr = curr.next;
    }
    console.log(str);
  }

  //we are using a new concept of sentinel node where we create a node attach it at the beginning of the the list

  removeElement(value) {
    let sentinelNode = new Node();
    sentinelNode.next = this.head;
    let prev = sentinelNode;
    while (prev && prev.next) {
      if (prev.next.value === value) {
        prev.next = prev.next.next;
        this.size--;
      } else {
        prev = prev.next;
      }
    }
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
list.removeElement(1);
list.print();
