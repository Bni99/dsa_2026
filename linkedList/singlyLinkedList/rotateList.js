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
      if (curr.next !== null) str = str + `${curr.value} ->`;
      else str = str + `${curr.value}`;
      curr = curr.next;
    }
    console.log(str);
  }

  rotateList(k) {
    if (!this.head || !this.head.next) return;
    //shorten the k
    let curr = this.head;
    let length = 0;
    while (curr) {
      length++;
      curr = curr.next;
    }

    k = k % length;
    if (k === 0) return;

    let first = this.head;
    let second = this.head;
    while (k) {
      first = first.next;
      k--;
    }
    while (first.next) {
      second = second.next;
      first = first.next;
    }
    first.next = this.head;
    this.head = second.next;
    second.next = null;
  }
}

const list1 = new LinkedList();
list1.addAtStart(5);
list1.addAtStart(4);
list1.addAtStart(1);
list1.addAtStart(3);
list1.addAtStart(2);
list1.print();
list1.rotateList(2);
list1.print();
