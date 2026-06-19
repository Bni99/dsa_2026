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

  //Using 2 arrays
  oddAndEvenList() {
    let curr = this.head;
    let now = this.head;
    let odd = [];
    let even = [];
    let index = 1;
    while (curr) {
      if (index % 2 !== 0) odd.push(curr.value);
      else even.push(curr.value);
      curr = curr.next;
      index++;
    }
    let oddIndex = 0;
    let evenIndex = 0;
    while (oddIndex < odd.length) {
      now.value = odd[oddIndex];
      now = now.next;
      oddIndex++;
    }
    while (evenIndex < even.length) {
      now.value = even[evenIndex];
      now = now.next;
      evenIndex++;
    }
  }

  oddAndEvenListOptimal() {
    let odd = this.head;
    let even = this.head.next;
    let evenHead = this.head.next;
    while (odd.next && even.next) {
      odd.next = odd.next.next;
      odd = odd.next;

      even.next = even.next.next;
      even = even.next;
    }
    odd.next = evenHead;
  }
}

const list = new LinkedList();
list.addAtStart(1);
list.addAtStart(2);
list.addAtStart(3);
list.addAtStart(4);
list.addAtStart(5);
list.print();
// list.oddAndEvenList();
list.oddAndEvenListOptimal();
list.print();
