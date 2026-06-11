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
    console.log(str);
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
  }
}

const newList = new LinkedList();
newList.addAtHead(5);
newList.addAtHead(4);
newList.addAtHead(3);
newList.addAtHead(2);
newList.addAtHead(1);
newList.reverse();
newList.print();
